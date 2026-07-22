import os
import shutil
from pathlib import Path

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.services.resume_service import analyze_resume
from app.utils.pdf_reader import extract_text_from_pdf

router = APIRouter(
    prefix="/resume",
    tags=["Resume"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/analyze")
async def analyze_resume_route(
    file: UploadFile = File(...),
):
    # =============================
    # Validate File
    # =============================

    if file.filename is None:
        raise HTTPException(
            status_code=400,
            detail="No file selected.",
        )

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are supported.",
        )

    file_path = UPLOAD_DIR / file.filename

    try:
        # =============================
        # Save Uploaded PDF
        # =============================

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # =============================
        # Extract Resume Text
        # =============================

        resume_text = extract_text_from_pdf(
            str(file_path)
        )

        if not resume_text.strip():
            raise HTTPException(
                status_code=400,
                detail="Could not extract text from this PDF.",
            )

        # =============================
        # AI Analysis
        # =============================

        analysis = analyze_resume(resume_text)

        return {
            "success": True,
            "analysis": analysis,
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Resume analysis failed: {str(e)}",
        )

    finally:
        if file_path.exists():
            file_path.unlink()