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
  ChevronRight,
  Plus,
  Clock3,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    description: "Overview & Insights",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Chat",
    description: "Your AI Assistant",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Resume Analyzer",
    description: "ATS & Resume Review",
    href: "/resume",
    icon: FileText,
  },
  {
    title: "Code Review",
    description: "Analyze & Improve Code",
    href: "/code",
    icon: Code2,
  },
  {
    title: "Documents",
    description: "AI Document Workspace",
    href: "/documents",
    icon: FolderOpen,
  },
  {
    title: "Analytics",
    description: "Usage & Performance",
    href: "/analytics",
    icon: BarChart3,
  },
];

const recent = [
  "Frontend Review",
  "Resume Scan",
  "Landing Page",
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-80 flex-col border-r border-gray-200 bg-[#FAFAFA]">

      {/* Logo */}

      <div className="border-b border-gray-200 px-7 py-7">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-black text-white shadow-xl">

            <Sparkles size={26} />

          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight">
              DevNex AI
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Professional AI Workspace
            </p>

          </div>

        </div>

      </div>

      {/* Quick Action */}

      <div className="px-6 pt-6">

        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-4 py-4 text-sm font-semibold text-white transition hover:scale-[1.02]">

          <Plus size={18} />

          New Workspace

        </button>

      </div>

      {/* Navigation */}

      <div className="mt-7 flex-1 overflow-y-auto px-5">

        <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">

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
                className={`group flex items-center justify-between rounded-3xl border p-4 transition-all duration-300 ${
                  active
                    ? "border-black bg-black text-white shadow-xl"
                    : "border-transparent bg-white hover:border-gray-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      active
                        ? "bg-white/15"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={
                        active
                          ? "text-white"
                          : "text-gray-700"
                      }
                    />
                  </div>

                  <div>

                    <h3
                      className={`font-semibold ${
                        active
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs ${
                        active
                          ? "text-gray-300"
                          : "text-gray-500"
                      }`}
                    >
                      {item.description}
                    </p>

                  </div>

                </div>

                <ChevronRight
                  size={18}
                  className={
                    active
                      ? "text-gray-300"
                      : "text-gray-400"
                  }
                />

              </Link>
            );
          })}

        </div>

        {/* Recent */}

        <div className="mt-10">

          <div className="mb-4 flex items-center gap-2 px-2">

            <Clock3 size={15} className="text-gray-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Recent
            </span>

          </div>

          <div className="space-y-2">

            {recent.map((item) => (

              <button
                key={item}
                className="flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3 text-left transition hover:shadow-md"
              >
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>

                <ChevronRight
                  size={16}
                  className="text-gray-400"
                />

              </button>

            ))}

          </div>

        </div>

      </div>

      {/* User */}

      <div className="border-t border-gray-200 p-5">

        <div className="rounded-3xl bg-white p-4 shadow-sm">

          <Link
            href="/profile"
            className="flex items-center gap-4"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">

              <User size={22} />

            </div>

            <div className="flex-1">

              <h3 className="font-semibold text-gray-900">
                Rohit
              </h3>

              <p className="text-sm text-gray-500">
                AI Developer
              </p>

            </div>

          </Link>

          <Link
            href="/settings"
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gray-100 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
          >

            <Settings size={18} />

            Settings

          </Link>

        </div>

      </div>

    </aside>
  );
}