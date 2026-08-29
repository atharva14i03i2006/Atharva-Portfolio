from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Atharva System AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {"status": "SYSTEM AI ONLINE"}


@app.post("/chat")
def chat(request: ChatRequest):
    message = request.message.lower()

    if "hello" in message or "hi" in message:
        response = "Hey! System AI online. How can I help you?"

    elif "project" in message:
        response = "You can explore Atharva's projects in the RAID BOARD section."

    elif "skill" in message:
        response = "Atharva's primary path is AI/ML Engineering."

    elif "career" in message:
        response = "Focus on AI/ML, software engineering, projects and practical problem solving."

    else:
        response = (
            "I'm System AI. I can guide you about projects, skills, "
            "career, learning and this portfolio."
        )

    return {"response": response}