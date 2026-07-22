from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import Conversation
from app.schemas import (
    ConversationListResponse,
    ConversationResponse,
)

router = APIRouter(
    prefix="/history",
    tags=["Chat History"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# =====================================
# Get all conversations
# =====================================

@router.get(
    "/",
    response_model=list[ConversationListResponse],
)
def get_history(
    db: Session = Depends(get_db),
):
    conversations = (
        db.query(Conversation)
        .order_by(Conversation.updated_at.desc())
        .all()
    )

    return conversations


# =====================================
# Get one conversation
# =====================================

@router.get(
    "/{conversation_id}",
    response_model=ConversationResponse,
)
def get_conversation(
    conversation_id: int,
    db: Session = Depends(get_db),
):
    conversation = (
        db.query(Conversation)
        .filter(
            Conversation.id == conversation_id
        )
        .first()
    )

    if conversation is None:
        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    return conversation


# =====================================
# Delete conversation
# =====================================

@router.delete("/{conversation_id}")
def delete_conversation(
    conversation_id: int,
    db: Session = Depends(get_db),
):
    conversation = (
        db.query(Conversation)
        .filter(
            Conversation.id == conversation_id
        )
        .first()
    )

    if conversation is None:
        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    db.delete(conversation)
    db.commit()

    return {
        "success": True,
        "message": "Conversation deleted successfully",
    }


# =====================================
# Rename conversation
# =====================================

@router.put("/{conversation_id}")
def rename_conversation(
    conversation_id: int,
    data: dict,
    db: Session = Depends(get_db),
):
    conversation = (
        db.query(Conversation)
        .filter(
            Conversation.id == conversation_id
        )
        .first()
    )

    if conversation is None:
        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    title = data.get("title", "").strip()

    if not title:
        raise HTTPException(
            status_code=400,
            detail="Title cannot be empty",
        )

    conversation.title = title

    db.commit()
    db.refresh(conversation)

    return {
        "success": True,
        "message": "Conversation renamed successfully",
        "conversation": conversation,
    }