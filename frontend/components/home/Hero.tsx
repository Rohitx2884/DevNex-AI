"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-5 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-600"
      >
        AI Workspace
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl text-6xl font-bold tracking-tight text-gray-900 md:text-8xl"
      >
        Build Smarter.
        <br />
        Ship Faster.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 max-w-2xl text-lg leading-8 text-gray-600"
      >
        The modern AI workspace for developers and students.
        Chat, analyze documents, generate code, review resumes,
        and deploy projects from one elegant platform.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 flex gap-5"
      >
        <button
          onClick={() => router.push("/dashboard")}
          className="rounded-xl bg-black px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900"
        >
          Get Started
        </button>

        <button
          onClick={() => router.push("/dashboard")}
          className="rounded-xl border border-gray-300 bg-white px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
        >
          Live Demo
        </button>
      </motion.div>

    </section>
  );
}