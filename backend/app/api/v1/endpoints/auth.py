from fastapi import Depends, HTTPException, status, APIRouter
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from google.oauth2 import id_token
from google.auth.transport import requests
from app.models.item import User
from app.services.logs import get_logger
from app.core.config import settings

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

        return User(
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
async def read_users_me(current_user: User = Depends(get_current_user)):
    return {
        "message": "You are successfully logged in with Google!",
        "user_data": current_user,
    }
