"use client";

import { motion } from "framer-motion";
import {
  Bot,
  FileText,
  Code2,
  BarChart3,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-white pb-28">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
      >
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              AI Workspace
            </h2>

            <p className="mt-2 text-gray-500">
              Everything you need in one place.
            </p>
          </div>

          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            ● Online
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <Card
            icon={<Bot size={28} />}
            title="AI Chat"
            desc="Ask anything instantly."
          />

          <Card
            icon={<FileText size={28} />}
            title="Document AI"
            desc="Summarize PDFs in seconds."
          />

          <Card
            icon={<Code2 size={28} />}
            title="Code Assistant"
            desc="Explain & debug code."
          />

          <Card
            icon={<BarChart3 size={28} />}
            title="Analytics"
            desc="Track AI usage."
          />

        </div>
      </motion.div>
    </section>
  );
}

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {desc}
      </p>
    </div>
  );
}