"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          DevNex AI
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/"
            className="transition hover:text-violet-600"
          >
            Home
          </Link>

          <Link
            href="/workspace"
            className="transition hover:text-violet-600"
          >
            Workspace
          </Link>

          <Link
            href="/pricing"
            className="transition hover:text-violet-600"
          >
            Pricing
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">

          <Link
            href="/login"
            className="rounded-xl px-5 py-2.5 font-medium transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/dashboard"
           className="rounded-xl bg-black px-5 py-2.5 font-medium !text-white transition hover:bg-gray-900"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}