"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Code2,
  FolderOpen,
  BarChart3,
  Settings,
  User,
  Sparkles,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Resume Analyzer",
    href: "/resume",
    icon: FileText,
  },
  {
    title: "Code Review",
    href: "/code",
    icon: Code2,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FolderOpen,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">

      {/* Logo */}

      <div className="border-b border-gray-100 px-8 py-7">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">

            <Sparkles size={28} />

          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight">
              DevNex AI
            </h1>

            <p className="text-sm text-gray-500">
              AI Workspace
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-5 py-6">

        <p className="mb-5 px-3 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
          Workspace
        </p>

        <div className="space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200 ${
                  active
                    ? "bg-black text-white shadow-xl"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <Icon
                  size={22}
                  className={`transition ${
                    active
                      ? "text-white"
                      : "text-gray-500 group-hover:text-black"
                  }`}
                />

                <span
                  className={`font-medium ${
                    active ? "text-white" : ""
                  }`}
                >
                  {item.title}
                </span>

              </Link>
            );
          })}

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-100 p-5">

        <Link
          href="/profile"
          className="mb-3 flex items-center gap-4 rounded-2xl p-3 transition hover:bg-gray-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">

            <User size={20} />

          </div>

          <div>

            <h3 className="font-semibold">
              Rohit
            </h3>

            <p className="text-sm text-gray-500">
              AI Developer
            </p>

          </div>

        </Link>

        <Link
          href="/settings"
          className="group flex items-center gap-4 rounded-2xl px-3 py-3 text-gray-700 transition hover:bg-gray-100"
        >
          <Settings
            size={20}
            className="text-gray-500 group-hover:text-black"
          />

          <span>Settings</span>

        </Link>

      </div>

    </aside>
  );
}