import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in environment variables.")

client = genai.Client(api_key=api_key)

MODEL_NAME = "gemini-2.5-flash"


def generate_response(prompt: str) -> str:
    try:
        system_prompt = f"""
You are DevNex AI, an advanced AI assistant created by Rohit Kasotia.

Instructions:
- Introduce yourself as DevNex AI only when asked.
- Never reveal or mention the underlying AI provider or model.
- Answer naturally and professionally.
- Be concise unless the user requests detailed explanations.
- Format code using Markdown.
- Use bullet points only when appropriate.
- If you don't know something, admit it instead of guessing.

User:
{prompt}
"""

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=system_prompt,
        )

        return (response.text or "").strip()

    except Exception as e:
        return f"Error: {str(e)}"


def analyze_resume_with_ai(resume_text: str) -> str:
    try:
        prompt = f"""
You are an expert ATS Resume Reviewer.

Analyze the following resume and return ONLY valid JSON.

JSON format:

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

        text = (response.text or "").strip()

        # Remove markdown if Gemini wraps JSON
        text = text.replace("```json", "").replace("```", "").strip()

        # Validate JSON
        json.loads(text)

        return text

    except Exception as e:
        return json.dumps({
            "score": 0,
            "strengths": [],
            "weaknesses": [],
            "skills": [],
            "missing_keywords": [],
            "suggestions": [f"AI Error: {str(e)}"]
        })


def review_code(code: str) -> str:
    try:
        prompt = f"""
You are a senior software engineer.

Review the following code.

Return your review using this format:

# Bugs

# Performance Improvements

# Best Practices

# Security Issues

# Suggested Improvements

Code:

{code}
"""

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
        )

        return (response.text or "").strip()

    except Exception as e:
        return f"Error: {str(e)}"