"use client";

import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  change,
  icon,
}: Props) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">

          {icon}

        </div>

        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

          {change}

        </div>

      </div>

      <h3 className="mt-6 text-sm font-medium text-gray-500">
        {title}
      </h3>

      <h2 className="mt-2 text-4xl font-bold tracking-tight">
        {value}
      </h2>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-black">

        View Details

        <ArrowUpRight
          size={16}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </div>

    </div>
  );
}