"use client";

import { useEffect, useRef, useState } from "react";
import api from "@/lib/api";

import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import EmptyState from "@/components/chat/EmptyState";
import TypingIndicator from "@/components/chat/TypingIndicator";

interface Message {
  id?: number;
  role: "user" | "assistant";
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);

  const [refreshSidebar, setRefreshSidebar] = useState(0);

  const [activeConversation, setActiveConversation] =
    useState<number | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const loadConversation = async (
    id: number
  ) => {
    try {
      const res = await api.get(`/history/${id}`);

      const formatted: Message[] = res.data.messages.map(
  (message: {
    id: number;
    role: "user" | "assistant";
    content: string;
  }) => ({
          id: message.id,
          role: message.role,
          text: message.content,
        })
      );

      setMessages(formatted);

      setActiveConversation(id);
    }catch (err) {
  console.error("Failed to load conversation:", err);
}
  };

  const handleSend = async (
    userMessage: string,
    aiReply: string,
    conversationId: number
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setTyping(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );
        setTyping(false);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: aiReply,
      },
    ]);

    setActiveConversation(conversationId);

    setRefreshSidebar((prev) => prev + 1);
  };

  const handleNewChat = () => {
    setMessages([]);
    setTyping(false);
    setActiveConversation(null);
  };

  return (
    <main className="flex h-screen overflow-hidden bg-[#F6F7FB]">

      <ChatSidebar
        refresh={refreshSidebar}
        activeConversation={activeConversation}
        onOpenConversation={loadConversation}
        onNewChat={handleNewChat}
      />

      <section className="flex flex-1 flex-col">

        <ChatHeader />

        <div className="flex-1 overflow-y-auto">

          {messages.length === 0 ? (

            <div className="flex h-full items-center justify-center px-12">

              <div className="w-full max-w-6xl">

                <EmptyState />

              </div>

            </div>

          ) : (

            <div className="mx-auto w-full max-w-6xl px-10 py-10">

              <div className="space-y-8">

                {messages.map((message, index) => (

                  <ChatMessage
                    key={message.id ?? index}
                    role={message.role}
                    text={message.text}
                  />

                ))}

                {typing && <TypingIndicator />}

                <div ref={bottomRef} />

              </div>

            </div>

          )}

        </div>
                <ChatInput
          conversationId={activeConversation}
          onSend={handleSend}
        />

      </section>

    </main>
  );
}