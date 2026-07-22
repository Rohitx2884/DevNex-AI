"use client";

import {
  Sparkles,
  Settings,
  UserCircle2,
  Search,
  Bell,
  ChevronDown,
  Command,
  ShieldCheck,
} from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-24 items-center justify-between border-b border-gray-200 bg-white/80 px-8 backdrop-blur-xl">

      {/* Left */}

      <div className="flex items-center gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-black text-white shadow-lg">

          <Sparkles size={24} />

        </div>

        <div>

          <div className="flex items-center gap-3">

            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              AI Chat Workspace
            </h1>

            <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

              <ShieldCheck size={13} />

              Online

            </div>

          </div>

          <p className="mt-1 text-sm text-gray-500">
            Chat with DevNex AI using the latest AI models.
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative hidden xl:block">

          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search conversations..."
            className="h-12 w-80 rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-16 text-sm outline-none transition focus:border-black focus:bg-white focus:shadow-md"
          />

          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-500">

            <Command size={11} />

            K

          </div>

        </div>

        {/* Settings */}

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">

          <Settings
            size={20}
            className="text-gray-700"
          />

        </button>

        {/* Notifications */}

        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">

          <Bell
            size={20}
            className="text-gray-700"
          />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm transition hover:shadow-md">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">

            <UserCircle2 size={24} />

          </div>

          <div className="hidden text-left lg:block">

            <h3 className="font-semibold text-gray-900">
              Rohit
            </h3>

            <p className="text-xs text-gray-500">
              Professional Plan
            </p>

          </div>

          <ChevronDown
            size={16}
            className="text-gray-400"
          />

        </button>

      </div>

    </header>
  );
}