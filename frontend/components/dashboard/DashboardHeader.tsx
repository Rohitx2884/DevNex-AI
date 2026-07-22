"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";

export default function DashboardHeader() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-black via-gray-900 to-gray-800 p-10 text-white shadow-xl">

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        <div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Sparkles size={18} />
            <span className="text-sm font-medium">
              Welcome back
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Good Evening, Rohit 👋
          </h1>

          <p className="mt-4 max-w-2xl text-gray-300 text-lg leading-relaxed">
            Welcome back to <span className="font-semibold text-white">DevNex AI</span>.
            Continue your conversations, analyze resumes, review code,
            and boost your productivity with AI.
          </p>

        </div>

        <div className="flex flex-col gap-4">

          <button className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105">

            Launch AI Chat

            <ArrowUpRight size={18} />

          </button>

          <button className="rounded-2xl border border-white/20 px-6 py-4 font-medium transition hover:bg-white/10">
            View Analytics
          </button>

        </div>

      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <p className="text-sm text-gray-300">
            AI Chats
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            156
          </h2>

        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <p className="text-sm text-gray-300">
            Resumes Reviewed
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            48
          </h2>

        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <p className="text-sm text-gray-300">
            Code Reviews
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            89
          </h2>

        </div>

      </div>

    </section>
  );
}