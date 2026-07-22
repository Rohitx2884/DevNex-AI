"use client";

import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">

        <Bot size={20} />

      </div>

      <div className="rounded-3xl border border-gray-200 bg-white px-6 py-4 shadow-sm">

        <div className="flex gap-2">

          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
            style={{ animationDelay: "0.4s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}