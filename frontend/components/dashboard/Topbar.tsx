"use client";

import {
  Bell,
  ChevronDown,
  Command,
  Plus,
  Search,
} from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">

      <div className="flex h-24 items-center justify-between px-10">

        {/* Left Spacer */}

        <div className="w-6" />

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="relative hidden xl:block">

            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search workspaces, chats, documents..."
              className="h-14 w-[430px] rounded-3xl border border-gray-200 bg-gray-50 pl-14 pr-20 text-sm text-gray-700 outline-none transition-all duration-300 focus:border-black focus:bg-white focus:shadow-lg"
            />

            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-xl border border-gray-200 bg-white px-2 py-1 text-xs font-semibold text-gray-500">

              <Command size={12} />

              K

            </div>

          </div>

          {/* New */}

          <button className="flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">

            <Plus size={18} />

            New

          </button>

          {/* Theme */}

          <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm transition hover:shadow-md">

            <ThemeToggle />

          </div>

          {/* Notifications */}

          <button className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">

            <Bell
              size={21}
              className="text-gray-700"
            />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500" />

          </button>

          {/* User */}

          <button className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition hover:shadow-md">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-base font-bold text-white">

              R

            </div>

            <div className="hidden text-left lg:block">

              <h3 className="font-semibold text-gray-900">
                Rohit
              </h3>

              <p className="text-xs text-gray-500">
                AI Developer
              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-gray-400"
            />

          </button>

        </div>

      </div>

    </header>
  );
}