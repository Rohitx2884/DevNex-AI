from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import User
from app.schemas import (
    UserCreate,
    UserLogin,
    UserResponse,
)
from app.auth import (
    get_password_hash,
    verify_password,
    create_access_token,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


# ==========================
# Database
# ==========================

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ==========================
# Register
# ==========================

@router.post(
    "/register",
    response_model=UserResponse,
)
def register(
    user: UserCreate,
    db: Session = Depends(get_db),
):
    existing = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered.",
        )

    new_user = User(
        name=user.name,
        email=user.email,
        password=get_password_hash(user.password),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# ==========================
# Login
# ==========================

@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db),
):
    existing = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    if not verify_password(
        user.password,
        existing.password,
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    access_token = create_access_token(
        data={
            "sub": str(existing.id),
            "email": existing.email,
        },
        expires_delta=timedelta(days=7),
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": existing.id,
            "name": existing.name,
            "email": existing.email,
        },
    }


# ==========================
# Get Current User
# ==========================

@router.get(
    "/me",
    response_model=UserResponse,
)
def get_me(
    db: Session = Depends(get_db),
):
    """
    Temporary endpoint.

    Replace this with JWT authentication later.
    """

    user = db.query(User).first()

    if user is None:
        raise HTTPException(
            status_code=404,
            detail="User not found.",
        )

    return user