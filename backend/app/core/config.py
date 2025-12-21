from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI Template"
    API_V1_STR: str = "/api/v1"
    GOOGLE_CLIENT_ID: str
    DATABASE_URL: str

    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int  # Pydantic will convert "30" from .env to int 30

    class Config:
        env_file = ".env"
        extra = "ignore"


# Instantiate settings
settings = Settings()
