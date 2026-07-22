import json

from app.services.gemini import analyze_resume_with_ai


def analyze_resume(resume_text: str) -> dict:
    """
    Analyze a resume using DevNex AI and return structured JSON.
    """

    try:
        response_text = analyze_resume_with_ai(resume_text)

        cleaned_response = (
            response_text
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        result = json.loads(cleaned_response)

        return {
            "score": result.get("score", 0),
            "strengths": result.get("strengths", []),
            "weaknesses": result.get("weaknesses", []),
            "skills": result.get("skills", []),
            "missing_keywords": result.get("missing_keywords", []),
            "suggestions": result.get("suggestions", []),
        }

    except json.JSONDecodeError:
        return {
            "score": 0,
            "strengths": [],
            "weaknesses": [],
            "skills": [],
            "missing_keywords": [],
            "suggestions": [
                "Unable to parse the AI response."
            ],
            "raw_response": response_text,
        }

    except Exception as e:
        return {
            "score": 0,
            "strengths": [],
            "weaknesses": [],
            "skills": [],
            "missing_keywords": [],
            "suggestions": [
                "Resume analysis failed."
            ],
            "error": str(e),
        }