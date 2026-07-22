from fastapi import APIRouter
from pydantic import BaseModel

from app.services.code_service import review_code

router = APIRouter(
    prefix="/code",
    tags=["Code Reviewer"],
)


# =====================================
# Request Schema
# =====================================

class CodeRequest(BaseModel):
    code: str


# =====================================
# Response Schema
# =====================================

class CodeResponse(BaseModel):
    analysis: str


# =====================================
# AI Code Review
# =====================================

@router.post(
    "/review",
    response_model=CodeResponse,
)
async def review(
    request: CodeRequest,
):
    analysis = review_code(request.code)

    return CodeResponse(
        analysis=analysis,
    )