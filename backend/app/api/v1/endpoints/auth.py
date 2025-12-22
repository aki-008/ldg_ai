from typing import Union
from fastapi import Depends, HTTPException, status, APIRouter
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from google.oauth2 import id_token
from google.auth.transport import requests
from jose import jwt, JWTError

from app.services.logs import get_logger
from app.core.config import settings
from app.db.session import get_db
from app.services.security import (
    get_hashed_password,
    verify_password,
    create_access_token,
)
from app.models.models import CreateUser, LoginRequest, LoginResponse, UserResponse
from datetime import timedelta
from app.schemas.tables import User

logger = get_logger(__name__)

security = HTTPBearer()

router = APIRouter()

GOOGLE_CLIENT_ID = settings.GOOGLE_CLIENT_ID


async def get_current_user(
    token: HTTPAuthorizationCredentials = Depends(security),
    db: AsyncSession = Depends(get_db),
) -> Union[User, dict]:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token_str = token.credentials

    try:
        payload = jwt.decode(
            token_str, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )

        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception

        result = await db.execute(select(User).filter(User.username == username))
        user = result.scalar_one_or_none()

        if user is None:
            raise credentials_exception

        return user

    except (JWTError, AttributeError):
        try:
            idinfo = id_token.verify_oauth2_token(
                token_str,
                requests.Request(),
                GOOGLE_CLIENT_ID,
                clock_skew_in_seconds=10,
            )

            return {
                "username": idinfo.get("name", "Google User"),
                "email": idinfo["email"],
                "picture": idinfo.get("picture", ""),
            }
        except ValueError as e:
            logger.error(f"Token verification failed:{e}")
            raise credentials_exception


@router.get("/users/me", response_model=UserResponse)
async def read_users_me(current_user: Union[User, dict] = Depends(get_current_user)):
    return current_user


@router.post("/sign_up", response_model=dict)
async def sign_up(user: CreateUser, db: AsyncSession = Depends(get_db)):
    try:
        result = await db.execute(select(User).filter(User.email == user.email))
        existing_user = result.scalar_one_or_none()

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered",
            )
        new_user = User(
            username=user.username,
            email=user.email,
            hashed_password=get_hashed_password(user.password),
        )
        db.add(new_user)
        await db.commit()

        return {"message": "User registered sucessfully", "username": user.username}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"registered failed: {str(e)}",
        )


@router.post("/sign_in", response_model=LoginResponse)
async def sign_in(request: LoginRequest, db: AsyncSession = Depends(get_db)):
    try:
        result = await db.execute(select(User).filter(User.email == request.email))
        user = result.scalar_one_or_none()

        if not user or not verify_password(request.password, user.hashed_password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": user.username}, expires_delta=access_token_expires
        )

        return LoginResponse(
            access_token=access_token, token_type="bearer", username=user.username
        )

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Login failed: {str(e)}",
        )
