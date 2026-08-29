import { useState } from "react";
import "./SystemAi.css";

function SystemAI() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "SYSTEM AI ONLINE. Ask me anything."
    }
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage }
    ]);

    setMessage("");

    try {
      const response = await fetch("https://atharva-portfolio-mwpm.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMessage
        })
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.response }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "SYSTEM ERROR: Backend unavailable."
        }
      ]);
    }
  };

  return (
    <section className="system-ai" id="system-ai">

      <div className="ai-header">
        <p>SYSTEM DATABASE</p>
        <h1>SYSTEM AI</h1>
        <span>PERSONAL AI GUIDE // ONLINE</span>
      </div>

      <div className="ai-window">

        <div className="ai-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`ai-message ${msg.role}`}
            >
              <span>
                {msg.role === "ai" ? "SYSTEM AI" : "YOU"}
              </span>

              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="ai-input">
          <input
            type="text"
            placeholder="Ask System AI..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button onClick={sendMessage}>
            SEND
          </button>
        </div>

      </div>

    </section>
  );
}

export default SystemAI;