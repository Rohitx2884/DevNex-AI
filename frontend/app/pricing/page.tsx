"use client";

import { useState } from "react";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            Pricing
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Simple, transparent pricing
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Whether you're a student, developer, or enterprise team,
            DevNex AI has a plan for you.
          </p>

          {/* Billing Toggle */}
          <div className="mt-12 flex justify-center">
            <div className="flex rounded-full border border-white/10 bg-white/5 p-1">

              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-6 py-2 transition ${
                  billing === "monthly"
                    ? "bg-violet-600 text-white"
                    : "text-gray-400"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`rounded-full px-6 py-2 transition ${
                  billing === "yearly"
                    ? "bg-violet-600 text-white"
                    : "text-gray-400"
                }`}
              >
                Yearly
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 lg:grid-cols-5">

          {/* Free */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">Free</h3>

            <p className="mt-2 text-gray-400">
              Try DevNex AI.
            </p>

            <div className="mt-8 text-5xl font-bold">
              $0
            </div>

            <button className="mt-8 w-full rounded-xl bg-white py-3 font-semibold text-black hover:bg-gray-200">
              Get Started
            </button>
          </div>

          {/* Go */}
          <div className="relative rounded-3xl border border-violet-500 bg-gradient-to-b from-violet-600/20 to-white/5 p-8 shadow-xl">

            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold uppercase">
              Most Popular
            </span>

            <h3 className="text-2xl font-bold">
              Go
            </h3>

            <p className="mt-2 text-gray-400">
              Best for students.
            </p>

            <div className="mt-8 text-5xl font-bold">
              {billing === "monthly" ? "$8" : "$6"}
            </div>

            <button className="mt-8 w-full rounded-xl bg-violet-600 py-3 font-semibold hover:bg-violet-700">
              Upgrade
            </button>
          </div>

          {/* Plus */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">Plus</h3>

            <p className="mt-2 text-gray-400">
              Power users.
            </p>

            <div className="mt-8 text-5xl font-bold">
              {billing === "monthly" ? "$20" : "$16"}
            </div>

            <button className="mt-8 w-full rounded-xl bg-white py-3 font-semibold text-black hover:bg-gray-200">
              Choose Plus
            </button>
          </div>

          {/* Pro */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">Pro</h3>

            <p className="mt-2 text-gray-400">
              Maximum power.
            </p>

            <div className="mt-8 text-5xl font-bold">
              {billing === "monthly" ? "$200" : "$160"}
            </div>

            <button className="mt-8 w-full rounded-xl bg-white py-3 font-semibold text-black hover:bg-gray-200">
              Go Pro
            </button>
          </div>

          {/* Enterprise */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">
              Enterprise
            </h3>

            <p className="mt-2 text-gray-400">
              For organizations.
            </p>

            <div className="mt-8 text-4xl font-bold">
              Custom
            </div>

            <button className="mt-8 w-full rounded-xl border border-white/20 py-3 font-semibold hover:bg-white/10">
              Contact Sales
            </button>
          </div>

        </div>

      </section>

    </main>
  );
}