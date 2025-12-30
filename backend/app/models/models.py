from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import Optional
from datetime import datetime
from fastapi import UploadFile, File


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


class Bail_form(BaseModel):
    # Application details
    full_name: str = Field(..., min_length=3, max_length=50)
    age: int = Field(..., ge=18, le=100)
    residental_address: str
    contact_number: int = Field(..., min_length=10, max_length=10)
    occupation: str
    religion: str
    educational_qualification: str
    id_proof_type: str
    #  Current case / FIR details
    FIR_name: int
    FIR_date: datetime
    Police_station: str
    Date_of_incident: datetime
    Applicable_sections: str
    #  Statement recorded under section
    Date_of_statement: datetime
    statement_details: str
    #  Bail Rejection order details
    date_of_rejection: datetime
    Order_details: str
    # Supporting docs and user prompt
    files: list[UploadFile] = File(..., description="The PDF files to be ingested.")
    user_prompt: str
