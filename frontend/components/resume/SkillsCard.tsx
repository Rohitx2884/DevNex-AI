"use client";"use client";

import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

interface Props {
  skills?: string[];
  missingKeywords?: string[];
}

export default function SkillsCard({
  skills = [],
  missingKeywords = [],
}: Props) {
  return (
    <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Skills Analysis
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Technical Skills
          </h2>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">

          <Brain size={24} />

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-gray-50 p-5">

          <p className="text-sm text-gray-500">
            Skills Detected
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {skills.length}
          </h3>

        </div>

        <div className="rounded-2xl bg-gray-50 p-5">

          <p className="text-sm text-gray-500">
            Missing
          </p>

          <h3 className="mt-2 text-3xl font-bold text-amber-600">
            {missingKeywords.length}
          </h3>

        </div>

      </div>

      <div className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <CheckCircle2
            size={18}
            className="text-green-600"
          />

          <h3 className="font-semibold text-gray-900">
            Skills Found
          </h3>

        </div>

        <div className="flex flex-wrap gap-3">

          {skills.length === 0 ? (

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-500">
              No skills detected yet.
            </span>

          ) : (

            skills.map((skill, index) => (

              <span
                key={index}
                className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
              >
                {skill}
              </span>

            ))

          )}

        </div>

      </div>

      <div className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <AlertTriangle
            size={18}
            className="text-amber-500"
          />

          <h3 className="font-semibold text-gray-900">
            Recommended Skills
          </h3>

        </div>

        <div className="flex flex-wrap gap-3">

          {missingKeywords.length === 0 ? (

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-500">
              No missing keywords.
            </span>

          ) : (

            missingKeywords.map((skill, index) => (

              <span
                key={index}
                className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700"
              >
                + {skill}
              </span>

            ))

          )}

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5">

        <div className="flex items-start gap-3">

          <TrendingUp
            size={22}
            className="mt-0.5 text-blue-600"
          />

          <div>

            <h4 className="font-semibold text-blue-700">
              DevNex AI Insight
            </h4>

            <p className="mt-2 text-sm leading-6 text-blue-600">

              {missingKeywords.length === 0
                ? "Your resume already contains a strong technical skill set."
                : "Consider adding the recommended skills where they genuinely reflect your experience to improve ATS compatibility."}

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}