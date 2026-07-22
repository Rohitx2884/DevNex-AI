from app.services.gemini import review_code as ai_review_code


def review_code(code: str) -> str:
    try:
        return ai_review_code(code)

    except Exception as e:
        return f"""
# Error

Unable to review code.

{str(e)}
"""