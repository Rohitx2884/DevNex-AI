"use client";

import { motion } from "framer-motion";
import {
  Bot,
  FileText,
  Code2,
  BarChart3,
  Search,
  Bell,
} from "lucide-react";

export default function WorkspaceShowcase() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Workspace
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
            Your AI Dashboard
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Everything you need to chat, analyze documents,
            write code and manage your AI workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,.08)]"
        >

          {/* Top Bar */}

          <div className="flex items-center justify-between border-b border-gray-200 px-8 py-5">

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>

            </div>

            <div className="flex items-center gap-4">

              <Search size={18} />

              <Bell size={18} />

            </div>

          </div>

          <div className="grid lg:grid-cols-4">

            {/* Sidebar */}

            <aside className="border-r border-gray-200 bg-gray-50 p-6">

              <h3 className="mb-8 text-xl font-bold">
                DevNex AI
              </h3>

              <nav className="space-y-5 text-gray-600">

                <div className="flex items-center gap-3">
                  <Bot size={18} />
                  AI Chat
                </div>

                <div className="flex items-center gap-3">
                  <FileText size={18} />
                  Documents
                </div>

                <div className="flex items-center gap-3">
                  <Code2 size={18} />
                  Code
                </div>

                <div className="flex items-center gap-3">
                  <BarChart3 size={18} />
                  Analytics
                </div>

              </nav>

            </aside>

            {/* Main Area */}

            <div className="col-span-3 p-8">

              <div className="grid gap-6 md:grid-cols-3">

                <Card title="AI Chats" value="1,248" />

                <Card title="Documents" value="245" />

                <Card title="Projects" value="58" />

              </div>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">

                <p className="text-gray-500">
                  AI Assistant
                </p>

                <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">

                  <p className="text-gray-700">
                    👋 Hello Rohit!
                  </p>

                  <p className="mt-4 text-gray-500">
                    Ready to build something amazing today?
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">

      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold">
        {value}
      </h3>

    </div>
  );
}