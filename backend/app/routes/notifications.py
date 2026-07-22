from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import Notification

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def get_notifications(db: Session = Depends(get_db)):
    notifications = (
        db.query(Notification)
        .order_by(Notification.id.desc())
        .all()
    )

    return notifications


@router.post("/")
def create_notification(
    title: str,
    message: str,
    type: str = "info",
    user_id: int = 1,
    db: Session = Depends(get_db),
):
    notification = Notification(
        title=title,
        message=message,
        type=type,
        user_id=user_id,
    )

    db.add(notification)
    db.commit()
    db.refresh(notification)

    return notification


@router.patch("/{notification_id}/read")
def mark_as_read(
    notification_id: int,
    db: Session = Depends(get_db),
):
    notification = (
        db.query(Notification)
        .filter(Notification.id == notification_id)
        .first()
    )

    if not notification:
        raise HTTPException(
            status_code=404,
            detail="Notification not found",
        )

    notification.is_read = True

    db.commit()

    return {
        "message": "Notification marked as read"
    }


@router.delete("/{notification_id}")
def delete_notification(
    notification_id: int,
    db: Session = Depends(get_db),
):
    notification = (
        db.query(Notification)
        .filter(Notification.id == notification_id)
        .first()
    )

    if not notification:
        raise HTTPException(
            status_code=404,
            detail="Notification not found",
        )

    db.delete(notification)
    db.commit()

    return {
        "message": "Notification deleted"
    }
