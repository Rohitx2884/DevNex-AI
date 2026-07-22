from datetime import datetime
from pydantic import BaseModel, EmailStr


# =====================================================
# User Schemas
# =====================================================

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr

    model_config = {
        "from_attributes": True
    }


# =====================================================
# Message Schemas
# =====================================================

class MessageCreate(BaseModel):
    role: str
    content: str


class MessageResponse(BaseModel):
    id: int
    role: str
    content: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }


# =====================================================
# Conversation Schemas
# =====================================================

class ConversationCreate(BaseModel):
    title: str | None = None


class ConversationResponse(BaseModel):
    id: int
    title: str
    created_at: datetime
    updated_at: datetime
    messages: list[MessageResponse]

    model_config = {
        "from_attributes": True
    }


class ConversationListResponse(BaseModel):
    id: int
    title: str
    updated_at: datetime

    model_config = {
        "from_attributes": True
    }


# =====================================================
# Chat Schemas
# =====================================================

class ChatRequest(BaseModel):
    message: str
    conversation_id: int | None = None


class ChatResponse(BaseModel):
    reply: str
    conversation_id: int