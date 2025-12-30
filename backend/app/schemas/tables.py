from sqlalchemy import String, LargeBinary, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime
from typing import List
from app.db.session import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, index=True)
    email: Mapped[str] = mapped_column(String(100), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255))

    case_dir: Mapped[list["Case_dir"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )


class Case_dir(Base):
    __tablename__ = "case_dir"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    dir_name: Mapped[str] = mapped_column(String(255))

    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    user: Mapped["User"] = relationship(back_populates="case_dir")
    files: Mapped[List["File"]] = relationship(
        back_populates="case_dir", cascade="all, delete-orphan"
    )


class File(Base):
    __tablename__ = "files"

    id: Mapped[int] = mapped_column(primary_key=True)
    filename: Mapped[str] = mapped_column(String(255))
    file_data: Mapped[bytes] = mapped_column(LargeBinary)
    uploaded_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)

    case_dir_id: Mapped[int] = mapped_column(ForeignKey("case_dirs.id"))

    case_dir: Mapped["Case_dir"] = relationship(back_populates="files")
