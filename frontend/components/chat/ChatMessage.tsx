"use client";

import {
  Bot,
  User,
  Sparkles,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import MessageActions from "./MessageActions";

interface Props {
  role: "user" | "assistant";
  text: string;
}

export default function ChatMessage({
  role,
  text,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex w-full max-w-6xl gap-5 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div className="sticky top-24 h-fit">

          <div
            className={`flex h-14 w-14 items-center justify-center rounded-3xl shadow-md ${
              isUser
                ? "bg-black text-white"
                : "bg-gradient-to-br from-gray-900 via-black to-gray-700 text-white"
            }`}
          >
            {isUser ? (
              <User size={22} />
            ) : (
              <Sparkles size={22} />
            )}
          </div>

        </div>

        {/* Message */}

        <div className="flex-1">

          {/* Header */}

          <div
            className={`mb-3 flex items-center gap-3 ${
              isUser ? "justify-end" : ""
            }`}
          >
            <h3 className="font-semibold text-gray-900">
              {isUser ? "You" : "DevNex AI"}
            </h3>

            {!isUser && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                AI Online
              </span>
            )}
          </div>

          {/* Bubble */}

          <div
            className={`overflow-hidden rounded-[30px] border shadow-sm transition-all duration-300 hover:shadow-lg ${
              isUser
                ? "border-black bg-black text-white"
                : "border-gray-200 bg-white"
            }`}
          >
            {isUser ? (
              <div className="px-7 py-6">

                <p className="whitespace-pre-wrap text-[15px] leading-8">
                  {text}
                </p>

              </div>
            ) : (
              <div className="px-7 py-6">

                <article className="prose prose-gray max-w-none prose-headings:font-bold prose-p:leading-8 prose-li:leading-8 prose-pre:rounded-3xl prose-pre:bg-[#0d1117] prose-pre:p-6 prose-code:before:hidden prose-code:after:hidden prose-table:block prose-table:overflow-x-auto">

                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {text}
                  </ReactMarkdown>

                </article>

              </div>
            )}
          </div>

          {/* Footer */}

          <div
            className={`mt-3 flex items-center justify-between ${
              isUser ? "flex-row-reverse" : ""
            }`}
          >
            <span className="text-xs text-gray-400">
              Just now
            </span>

            {!isUser && (
              <MessageActions text={text} />
            )}
          </div>

        </div>

      </div>
    </div>
  );
}