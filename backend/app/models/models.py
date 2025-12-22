from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import Optional


class CreateUser(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr = Field(...)
    password: str

    @field_validator("password")
    def validate_password(cls, v):
        if len(v.encode("utf-8")) > 72:
            raise ValueError("Password cannot exceed 72 bytes")
        return v


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str
    username: str


class UserResponse(BaseModel):
    username: str
    email: EmailStr
    picture: Optional[str] = None

    class Config:
        from_attributes = True
