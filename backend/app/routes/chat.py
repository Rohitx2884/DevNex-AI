from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import Conversation, Message
from app.schemas import ChatRequest, ChatResponse
from app.services.gemini import generate_response

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=ChatResponse)
async def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
):
    conversation = None

    # =====================================
    # Continue existing conversation
    # =====================================

    if request.conversation_id is not None:
        conversation = (
            db.query(Conversation)
            .filter(Conversation.id == request.conversation_id)
            .first()
        )

        if conversation is None:
            raise HTTPException(
                status_code=404,
                detail="Conversation not found",
            )

    # =====================================
    # Create new conversation
    # =====================================

    if conversation is None:

        title = request.message.strip()

        if len(title) > 50:
            title = title[:50] + "..."

        conversation = Conversation(
            user_id=1,
            title=title,
        )

        db.add(conversation)
        db.commit()
        db.refresh(conversation)

    # =====================================
    # Save user message
    # =====================================

    user_message = Message(
        conversation_id=conversation.id,
        role="user",
        content=request.message,
    )

    db.add(user_message)

    # =====================================
    # Generate AI response
    # =====================================

    reply = generate_response(request.message)

    # =====================================
    # Save assistant message
    # =====================================

    assistant_message = Message(
        conversation_id=conversation.id,
        role="assistant",
        content=reply,
    )

    db.add(assistant_message)

    db.commit()
    db.refresh(conversation)

    return ChatResponse(
        reply=reply,
        conversation_id=conversation.id,
    )