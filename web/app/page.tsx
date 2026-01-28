"use client";

import { useState } from "react";

type Message = { role: "user" | "assistant"; text: string; t: number };

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "Hi, I’m Karen. I’m here to listen. What’s on your mind today?",
      t: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || sending) return;
    setInput("");
    const userMsg: Message = { role: "user", text: trimmed, t: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setSending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = (await res.json()) as { reply: string };
      const assistantMsg: Message = {
        role: "assistant",
        text: data.reply,
        t: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (e) {
      const assistantMsg: Message = {
        role: "assistant",
        text:
          "I’m having trouble connecting right now, but I’m here with you. Could you try again in a moment?",
        t: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setSending(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      void sendMessage();
    }
  }

  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: 16,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 20, marginBottom: 8, marginLeft: 12 }}>karen</h1>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 12,
          minHeight: 360,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {messages.map((m, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  background: m.role === "user" ? "#e8f0fe" : "#f3f4f6",
                  color: "#111827",
                  padding: "8px 12px",
                  borderRadius: 12,
                  maxWidth: 480,
                  whiteSpace: "pre-wrap",
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Share what's on your mind…"
            aria-label="Message"
            disabled={sending}
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
          <button
            onClick={() => void sendMessage()}
            disabled={sending || !input.trim()}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #2563eb",
              background: sending ? "#93c5fd" : "#3b82f6",
              color: "white",
              cursor: sending ? "not-allowed" : "pointer",
            }}
          >
            {sending ? "Sending…" : "Send"}
          </button>
        </div>
      </div>
      <p style={{ color: "#6b7280", fontSize: 12, marginTop: 8 }}>
        Phase 1 placeholder responses; Groq/Brave integration comes next.
      </p>
    </main>
  );
}
