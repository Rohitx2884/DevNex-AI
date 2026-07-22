"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    monthly: "$0",
    yearly: "$0",
    description: "Get started with DevNex AI.",
    popular: false,
    button: "Get Started",
    features: [
      "Basic AI Chat",
      "Limited Messages",
      "Standard Models",
      "Resume Analyzer",
      "Community Support",
    ],
  },
  {
    name: "Go",
    monthly: "$8",
    yearly: "$6",
    description: "Perfect for students and creators.",
    popular: true,
    button: "Upgrade to Go",
    features: [
      "Everything in Free",
      "Higher Message Limits",
      "Faster Responses",
      "Image Generation",
      "Priority Access",
      "File Uploads",
    ],
  },
  {
    name: "Plus",
    monthly: "$20",
    yearly: "$16",
    description: "For professionals and developers.",
    popular: false,
    button: "Get Plus",
    features: [
      "Everything in Go",
      "Advanced AI Models",
      "Code Assistant",
      "Document Analysis",
      "Workspace History",
      "Priority Support",
    ],
  },
  {
    name: "Pro",
    monthly: "$200",
    yearly: "$160",
    description: "Maximum power for AI professionals.",
    popular: false,
    button: "Go Pro",
    features: [
      "Everything in Plus",
      "Highest Limits",
      "Deep Research",
      "Premium AI Models",
      "Advanced Coding",
      "Early Features",
    ],
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    yearly: "Custom",
    description: "For organizations and teams.",
    popular: false,
    button: "Contact Sales",
    features: [
      "Unlimited Team Members",
      "Admin Dashboard",
      "SSO Login",
      "Analytics",
      "Custom Integrations",
      "Dedicated Support",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="bg-[#050816] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Sparkles className="h-4 w-4 text-violet-400" />
            Pricing
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Choose the perfect plan for your workflow.
            Upgrade anytime as your projects grow.
          </p>

          <div className="mt-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1">

            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                !yearly
                  ? "bg-violet-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                yearly
                  ? "bg-violet-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Yearly
            </button>

          </div>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-5">
            {plans.map((plan) => (
  <div
    key={plan.name}
    className={`relative rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
      plan.popular
        ? "border-violet-500 bg-gradient-to-b from-violet-600/20 to-white/5 shadow-violet-500/20 shadow-xl"
        : "border-white/10 bg-white/5"
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Most Popular
        </span>
      </div>
    )}

    <div className="p-8">

      <h3 className="text-2xl font-bold">
        {plan.name}
      </h3>

      <p className="mt-3 text-sm text-gray-400">
        {plan.description}
      </p>

      <div className="mt-8">
        <span className="text-5xl font-bold">
          {yearly ? plan.yearly : plan.monthly}
        </span>

        {plan.monthly !== "Custom" && (
          <span className="ml-2 text-gray-400">
            /month
          </span>
        )}
      </div>

      <button
        className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
          plan.popular
            ? "bg-violet-600 hover:bg-violet-700"
            : "bg-white text-black hover:bg-gray-200"
        }`}
      >
        {plan.button}
      </button>

      <div className="mt-10 space-y-4">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <Check className="h-5 w-5 text-green-400" />

            <span className="text-sm text-gray-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

    </div>
  </div>
))}
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-blue-600/10 to-cyan-600/10 p-10 text-center">

          <h3 className="text-4xl font-bold">
            Ready to build with DevNex AI?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Join thousands of developers, students, and professionals using
            DevNex AI to write code, analyze resumes, generate content,
            and boost productivity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700">
              Get Started Free
            </button>

            <button className="rounded-xl border border-white/10 px-8 py-4 font-semibold transition hover:bg-white/10">
              Contact Sales
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}