"use client";

import {
  CheckCircle2,
  Code2,
  FileText,
  MessageSquare,
} from "lucide-react";

const activities = [
  {
    title: "AI Chat",
    description: "Started a new conversation",
    icon: MessageSquare,
  },
  {
    title: "Resume Analyzer",
    description: "Resume analyzed successfully",
    icon: FileText,
  },
  {
    title: "Code Review",
    description: "Code optimized",
    icon: Code2,
  },
  {
    title: "Project Updated",
    description: "Everything synced",
    icon: CheckCircle2,
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-gray-100 p-3">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="font-semibold">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}