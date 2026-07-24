"use client";

import { useEffect, useMemo, useState } from "react";
import api from "@/lib/api";
import {
  Clock3,
  MessageSquare,
  MessageSquarePlus,
  MoreHorizontal,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";

interface Chat {
  id: number;
  title: string;
  updated_at: string;
}

interface Props {
  refresh: number;
  activeConversation: number | null;
  onOpenConversation: (id: number) => void;
  onNewChat: () => void;
}

export default function ChatSidebar({
  refresh,
  activeConversation,
  onOpenConversation,
  onNewChat,
}: Props) {
  const [search, setSearch] = useState("");
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    loadChats();
  }, [refresh]);

  const loadChats = async () => {
    try {
      const res = await api.get("/history/");
      setChats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteConversation = async (id: number) => {
    try {
      await api.delete(`/history/${id}`);

      setChats((prev) =>
  prev.filter((chat) => chat.id !== id)
);

if (activeConversation === id) {
  onNewChat();
}
    } catch (err) {
      console.error(err);
    }
  };

  const filteredChats = useMemo(() => {
    return chats.filter((chat) =>
      chat.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, chats]);

  return (
    <aside className="flex h-screen w-80 flex-col border-r border-gray-200 bg-[#FAFAFA]">

      <div className="border-b border-gray-200 p-6">

        <div className="mb-6 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-black text-white shadow-lg">

            <Sparkles size={24} />

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              AI Chat
            </h2>

            <p className="text-sm text-gray-500">
              Intelligent conversations
            </p>

          </div>

        </div>

        <button
          onClick={onNewChat}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >

          <MessageSquarePlus size={18} />

          New Conversation

        </button>

      </div>

      <div className="p-5">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-black focus:shadow-md"
          />

        </div>

      </div>

      <div className="flex items-center gap-2 px-6 pb-3">

        <Clock3
          size={15}
          className="text-gray-400"
        />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">

          Recent Chats

        </span>

      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-5">
              {filteredChats.length === 0 ? (

          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-8 text-center">

            <MessageSquare
              size={34}
              className="mx-auto mb-4 text-gray-300"
            />

            <h3 className="font-semibold text-gray-700">
              No Conversations
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Start your first AI conversation.
            </p>

          </div>

        ) : (

          <div className="space-y-3">

            {filteredChats.map((chat) => (

              <div
                key={chat.id}
                className={`group rounded-3xl border p-4 transition-all ${
                  activeConversation === chat.id
                    ? "border-black bg-black text-white shadow-xl"
                    : "border-transparent bg-white hover:border-gray-200 hover:shadow-md"
                }`}
              >

                <div className="flex items-start justify-between">

                  <button
                    onClick={() => onOpenConversation(chat.id)}
                    className="flex flex-1 items-start gap-3 text-left"
                  >

                    <div
                      className={`mt-1 flex h-10 w-10 items-center justify-center rounded-2xl ${
                        activeConversation === chat.id
                          ? "bg-white/10"
                          : "bg-gray-100"
                      }`}
                    >

                      <MessageSquare
                        size={18}
                        className={
                          activeConversation === chat.id
                            ? "text-white"
                            : "text-gray-700"
                        }
                      />

                    </div>

                    <div className="min-w-0 flex-1">

                      <h3
                        className={`truncate font-semibold ${
                          activeConversation === chat.id
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {chat.title}
                      </h3>

                      <p
                        className={`mt-1 text-xs ${
                          activeConversation === chat.id
                            ? "text-gray-300"
                            : "text-gray-500"
                        }`}
                      >
                        {new Date(chat.updated_at).toLocaleDateString()}
                      </p>

                    </div>

                  </button>

                  <div className="flex items-center gap-1 opacity-0 transition group-hover:opacity-100">

                    <button className="rounded-xl p-2 hover:bg-gray-100">

                      <MoreHorizontal
                        size={16}
                        className={
                          activeConversation === chat.id
                            ? "text-white"
                            : "text-gray-500"
                        }
                      />

                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteConversation(chat.id);
                      }}
                      className="rounded-xl p-2 hover:bg-red-50"
                    >

                      <Trash2
                        size={16}
                        className="text-red-500"
                      />

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

           </div>

      <div className="border-t border-gray-200 p-5">

        <div className="rounded-3xl bg-black p-5 text-white">

          <p className="text-sm font-semibold">
            DevNex AI Pro
          </p>

          <p className="mt-2 text-xs leading-5 text-gray-300">
            Faster responses, larger context window and premium AI tools.
          </p>

        </div>

      </div>

    </aside>
  );
}