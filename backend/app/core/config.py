from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI Template"
    API_V1_STR: str = "/api/v1"
    DATABASE_URL: str

    google_client_id: str

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
