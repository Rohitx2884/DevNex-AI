from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.routes.auth import router as auth_router
from app.routes.chat import router as chat_router
from app.routes.code import router as code_router
from app.routes.history import router as history_router
from app.routes.notifications import router as notification_router
from app.routes.resume import router as resume_router

# =====================================
# Create Database Tables
# =====================================

Base.metadata.create_all(bind=engine)

# =====================================
# FastAPI App
# =====================================

app = FastAPI(
    title="DevNex AI API",
    description="AI-powered backend for DevNex AI",
    version="3.0.0",
)

# =====================================
# CORS
# =====================================

app.add_middleware(
    CORSMiddleware,
   allow_origins=[
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://main.d2kgh4jifg13kp.amplifyapp.com",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================================
# Register Routers
# =====================================

app.include_router(auth_router)
app.include_router(chat_router)
app.include_router(history_router)
app.include_router(resume_router)
app.include_router(code_router)
app.include_router(notification_router)

# =====================================
# Root
# =====================================

@app.get("/")
async def root():
    return {
        "success": True,
        "message": "🚀 Welcome to DevNex AI Backend",
        "version": "3.0.0",
        "status": "running",
    }

# =====================================
# Health Check
# =====================================

@app.get("/health")
async def health():
    return {
        "success": True,
        "status": "healthy",
        "message": "Backend is running successfully",
    }