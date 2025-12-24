from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.core.config import settings
from app.api.v1.api import api_router
from app.db.session import engine, Base
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("--- Connecting to DB ---")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("--- DB Connected ---")

    yield
    print("🧹 Server shutting down:", datetime.now())

    print("--- Disposing DB Engine ---")
    await engine.dispose()
    print("--- DB Engine Disposed ---")


app = FastAPI(title=settings.PROJECT_NAME, lifespan=lifespan)


origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # WARNING: Only for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI Template"}
