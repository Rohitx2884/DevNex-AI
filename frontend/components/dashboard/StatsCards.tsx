"use client";

import {
  MessageSquare,
  FileText,
  Code2,
  FolderOpen,
  TrendingUp,
} from "lucide-react";
import StatCard from "./StatCard";

export default function StatsCards() {
  return (
    <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="AI Chats"
        value="156"
        change="+18%"
        icon={<MessageSquare size={22} />}
      />

      <StatCard
        title="Resume Analysis"
        value="48"
        change="+12%"
        icon={<FileText size={22} />}
      />

      <StatCard
        title="Code Reviews"
        value="89"
        change="+25%"
        icon={<Code2 size={22} />}
      />

      <StatCard
        title="Documents"
        value="27"
        change="+9%"
        icon={<FolderOpen size={22} />}
      />

      <div className="col-span-full mt-2 flex items-center gap-2 text-sm text-emerald-600">

        <TrendingUp size={18} />

        <span>
          Your AI productivity increased by
          <strong> 22%</strong> this month.
        </span>

      </div>

    </section>
  );
}