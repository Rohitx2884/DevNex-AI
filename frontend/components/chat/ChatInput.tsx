"use client";

import { useState } from "react";
import {
  SendHorizontal,
  Paperclip,
  Sparkles,
  Mic,
} from "lucide-react";

import api from "@/lib/api";

interface Props {
  conversationId: number | null;
  onSend: (
    userMessage: string,
    aiReply: string,
    conversationId: number
  ) => void;
}

export default function ChatInput({
  conversationId,
  onSend,
}: Props) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setMessage("");
    setLoading(true);

    try {
      const res = await api.post("/chat/", {
        message: userMessage,
        conversation_id: conversationId,
      });

      onSend(
        userMessage,
        res.data.reply,
        res.data.conversation_id
      );
    } catch (error) {
      console.error("Failed to send message:", error);

      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-[#FAFAFA] px-8 py-6">

      <div className="mx-auto max-w-5xl">

        <div className="mb-4 flex flex-wrap gap-3">

          {[
            "Explain this code",
            "Summarize a document",
            "Generate React component",
            "Improve my resume",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setMessage(item)}
              className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-black hover:text-black hover:shadow-sm"
            >
              {item}
            </button>
          ))}

        </div>

        <div className="rounded-[32px] border border-gray-200 bg-white p-5 shadow-lg">

          <textarea
            rows={2}
            value={message}
            placeholder="Ask DevNex AI anything..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey
              ) {
                e.preventDefault();
                sendMessage();
              }
            }}
            className="min-h-[90px] max-h-52 w-full resize-none bg-transparent text-[15px] text-gray-800 outline-none placeholder:text-gray-400"
          />

          <div className="mt-5 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 transition hover:bg-gray-100"
              >
                <Paperclip
                  size={18}
                  className="text-gray-600"
                />
              </button>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 transition hover:bg-gray-100"
              >
                <Mic
                  size={18}
                  className="text-gray-600"
                />
              </button>

              <div className="ml-2 flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-2">

                <Sparkles
                  size={16}
                  className="text-black"
                />

                <span className="text-sm font-medium text-gray-700">
                  DevNex AI Pro
                </span>

              </div>

            </div>

            <button
              type="button"
              onClick={sendMessage}
              disabled={loading}
              className="flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >

              {loading ? "Thinking..." : "Send"}

              <SendHorizontal size={18} />

            </button>

          </div>

        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">

          <p>
            AI responses may contain mistakes. Always verify important information.
          </p>

          <span>
            Enter ↵ to send • Shift + Enter for new line
          </span>

        </div>

      </div>

    </div>
  );
}