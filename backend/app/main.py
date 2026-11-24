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
    title="DevNex AI Backend",
    version="3.0.0",
)

# =====================================
# CORS Configuration
# =====================================

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",

    # AWS Amplify Frontend
    "https://main.d2uudqe8nwj29y.amplifyapp.com",

    # Optional (useful while testing)
    "https://pummel-collide-geiger.ngrok-free.dev",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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
# Root Endpoint
# =====================================

@app.get("/")
def root():
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
def health():
    return {
        "status": "healthy",
        "backend": "running",
        "version": "3.0.0",
    }