from fastapi import Depends, HTTPException, status, APIRouter
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from google.oauth2 import id_token
from google.auth.transport import requests
from app.services.logs import get_logger
from app.core.config import settings
from app.db.session import get_db
from app.services.security import (
    get_hased_password,
    verify_password,
    create_access_token,
)
from app.models.models import CreateUser, LoginRequest, LoginResponse
from datetime import timedelta
from app.schemas.tables import User

logger = get_logger(__name__)

security = HTTPBearer()

router = APIRouter()

GOOGLE_CLIENT_ID = settings.GOOGLE_CLIENT_ID


async def get_current_user(token: HTTPAuthorizationCredentials = Depends(security)):
    try:
        logger.info(f"Received Session Token: {token.credentials}")
        idinfo = id_token.verify_oauth2_token(
            token.credentials,
            requests.Request(),
            GOOGLE_CLIENT_ID,
            clock_skew_in_seconds=10,
        )

        return CreateUser(
            id=idinfo["sub"],
            email=idinfo["email"],
            name=idinfo.get("name", "Unknown"),
            picture=idinfo.get("picture", ""),
        )
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid authentication credentials: {str(e)}",
            headers={"WWW-Authenticate": "Bearer"},
        )


@router.get("/users/me")
async def read_users_me(current_user: CreateUser = Depends(get_current_user)):
    return {
        "message": "You are successfully logged in with Google!",
        "user_data": current_user,
    }


@router.post("/sign_up", response_model=dict)
async def sign_up(user: CreateUser, db: AsyncSession = Depends(get_db)):
    try:
        result = await db.execute(select(User).filter(User.email == user.email))
        existing_user = result.scalar_one_or_none()

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username already registered",
            )
        new_user = User(
            username=user.username,
            email=user.email,
            hashed_password=get_hased_password(user.password),
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
