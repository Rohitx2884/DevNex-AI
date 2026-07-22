import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env")

client = genai.Client(api_key=api_key)

MODEL_NAME = "gemini-2.5-flash"


def generate_response(prompt: str) -> str:
    try:
        system_prompt = f"""
You are DevNex AI, an intelligent AI assistant created by Rohit Kasotia.

Rules:
- Introduce yourself as DevNex AI only if asked.
- Never mention Google, Gemini, or the underlying model.
- Give clear and natural responses.
- Keep answers concise unless the user asks for detail.
- Format code using Markdown.
- Use bullet points only when necessary.

User:
{prompt}
"""

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=system_prompt,
        )

        return response.text.strip()

    except Exception as e:
        return f"Error: {str(e)}"


def analyze_resume_with_ai(resume_text: str) -> str:
    try:
        prompt = f"""
You are an expert ATS Resume Reviewer.

Return ONLY valid JSON.

Format:

{{
  "score": 0,
  "strengths": [],
  "weaknesses": [],
  "skills": [],
  "missing_keywords": [],
  "suggestions": []
}}

Resume:

{resume_text}
"""

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
        )

        return response.text.strip()

    except Exception as e:
        return f'{{"error":"{str(e)}"}}'


def review_code(code: str) -> str:
    try:
        prompt = f"""
You are a senior software engineer.

Review the following code.

Include:
- Bugs
- Performance improvements
- Best practices
- Security issues
- Suggested improvements

Code:

{code}
"""

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
        )

        return response.text.strip()

    except Exception as e:
        return f"Error: {str(e)}"