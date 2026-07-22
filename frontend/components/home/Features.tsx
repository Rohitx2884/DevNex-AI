"use client";

import { motion } from "framer-motion";
import {
  Bot,
  FileText,
  Code2,
  ShieldCheck,
  Sparkles,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chat",
    description:
      "Ask questions, generate ideas, and solve problems with an intelligent AI assistant.",
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description:
      "Upload PDFs and receive summaries, explanations, and key insights instantly.",
  },
  {
    icon: Code2,
    title: "Code Assistant",
    description:
      "Generate, debug, optimize, and understand code across multiple languages.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    description:
      "JWT authentication and secure APIs built with FastAPI best practices.",
  },
  {
    icon: Sparkles,
    title: "Modern Experience",
    description:
      "Smooth animations, clean typography, and responsive layouts for every device.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track AI usage, document analysis history, and productivity insights.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Features
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            Everything you need.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A complete AI productivity platform designed for developers,
            students and professionals.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
