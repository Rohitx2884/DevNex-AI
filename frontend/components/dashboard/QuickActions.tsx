"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  FileText,
  FolderOpen,
  MessageSquare,
} from "lucide-react";

const actions = [
  {
    title: "AI Chat",
    description: "Start a conversation",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Resume Analyzer",
    description: "Check ATS score",
    href: "/resume",
    icon: FileText,
  },
  {
    title: "Code Reviewer",
    description: "Review your code",
    href: "/code",
    icon: Code2,
  },
  {
    title: "Documents",
    description: "Chat with PDFs",
    href: "/documents",
    icon: FolderOpen,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">Quick Actions</h2>

      <div className="mt-6 space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex items-center justify-between rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-black p-3 text-white">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-semibold">{action.title}</h3>
                  <p className="text-sm text-gray-500">
                    {action.description}
                  </p>
                </div>
              </div>

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}