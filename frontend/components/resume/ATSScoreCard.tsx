"use client";

import {
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface Props {
  score: number;
}

export default function ATSScoreCard({
  score,
}: Props) {
  const metrics = [
    {
      title: "ATS Score",
      score,
      color: "bg-green-500",
    },
    {
      title: "Formatting",
      score: Math.min(score + 3, 100),
      color: "bg-blue-500",
    },
    {
      title: "Readability",
      score: Math.min(score + 5, 100),
      color: "bg-purple-500",
    },
    {
      title: "Keywords",
      score: Math.max(score - 4, 0),
      color: "bg-amber-500",
    },
  ];

  const status =
    score >= 85
      ? "Excellent"
      : score >= 70
      ? "Good"
      : score >= 50
      ? "Average"
      : "Needs Improvement";

  const statusColor =
    score >= 85
      ? "bg-green-100 text-green-700"
      : score >= 70
      ? "bg-blue-100 text-blue-700"
      : score >= 50
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            ATS Score
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Resume Performance
          </h2>

        </div>

        <div
          className={`rounded-2xl px-4 py-2 text-sm font-semibold ${statusColor}`}
        >
          {status}
        </div>

      </div>

      <div className="my-10 flex justify-center">

        <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-white">

          <div className="absolute inset-3 rounded-full border-[12px] border-green-500" />

          <div className="text-center">

            <h1 className="text-6xl font-bold text-gray-900">
              {score}
            </h1>

            <p className="mt-2 text-gray-500">
              /100
            </p>

          </div>

        </div>

      </div>

      <div className="mb-8 rounded-2xl bg-green-50 p-5">

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={22}
            className="text-green-600"
          />

          <div>

            <h3 className="font-semibold text-green-700">
              {status}
            </h3>

            <p className="text-sm text-green-600">
              AI-generated ATS evaluation.
            </p>

          </div>

        </div>

      </div>

      <div className="space-y-5">

        {metrics.map((metric) => (

          <div key={metric.title}>

            <div className="mb-2 flex items-center justify-between">

              <span className="font-medium text-gray-700">
                {metric.title}
              </span>

              <span className="font-semibold text-gray-900">
                {metric.score}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-gray-100">

              <div
                className={`h-full rounded-full ${metric.color}`}
                style={{
                  width: `${metric.score}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">

        <div className="flex items-center gap-3">

          <CheckCircle2
            size={18}
            className="text-green-600"
          />

          <span className="text-sm font-medium">
            AI ATS Analysis Complete
          </span>

        </div>

        <div className="flex items-center gap-3">

          <TrendingUp
            size={18}
            className="text-blue-600"
          />

          <span className="text-sm font-medium">
            Resume evaluated using AI
          </span>

        </div>

        <div className="flex items-center gap-3">

          <AlertCircle
            size={18}
            className="text-amber-500"
          />

          <span className="text-sm font-medium">
            Review suggestions below for improvements
          </span>

        </div>

      </div>

    </section>
  );
}