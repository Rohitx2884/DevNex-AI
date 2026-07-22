"use client";

import {
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Lightbulb,
  Award,
  Target,
} from "lucide-react";

interface Props {
  strengths?: string[];
  weaknesses?: string[];
  suggestions?: string[];
}

export default function SuggestionsCard({
  strengths = [],
  weaknesses = [],
  suggestions = [],
}: Props) {
  const improvement = Math.min(
    100,
    70 + suggestions.length * 5
  );

  return (
    <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            AI Suggestions
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Resume Improvements
          </h2>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">

          <Sparkles size={24} />

        </div>

      </div>

      <div className="mt-8 rounded-3xl bg-gradient-to-br from-black to-gray-800 p-6 text-white">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-300">
              Improvement Potential
            </p>

            <h3 className="mt-2 text-4xl font-bold">
              +{improvement - 70}%
            </h3>

          </div>

          <ArrowUpRight size={36} />

        </div>

        <p className="mt-5 text-sm leading-6 text-gray-300">
          AI-generated recommendations to improve ATS compatibility and recruiter visibility.
        </p>

      </div>

      <div className="mt-8 space-y-5">

        {suggestions.length === 0 ? (

          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">

            <p className="font-semibold text-green-700">
              Great job! No major suggestions found.
            </p>

          </div>

        ) : (

          suggestions.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:bg-white hover:shadow-md"
            >

              <div className="flex gap-3">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">

                  <Lightbulb
                    size={18}
                    className="text-blue-600"
                  />

                </div>

                <p className="text-sm leading-6 text-gray-700">
                  {item}
                </p>

              </div>

            </div>

          ))

        )}

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl bg-green-50 p-5">

          <CheckCircle2
            size={22}
            className="mb-3 text-green-600"
          />

          <h3 className="font-semibold text-green-700">
            Strengths
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-green-700">

            {strengths.length === 0 ? (
              <li>No strengths detected.</li>
            ) : (
              strengths.map((item, index) => (
                <li key={index}>• {item}</li>
              ))
            )}

          </ul>

        </div>

        <div className="rounded-2xl bg-red-50 p-5">

          <Award
            size={22}
            className="mb-3 text-red-600"
          />

          <h3 className="font-semibold text-red-700">
            Weaknesses
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-red-700">

            {weaknesses.length === 0 ? (
              <li>No weaknesses detected.</li>
            ) : (
              weaknesses.map((item, index) => (
                <li key={index}>• {item}</li>
              ))
            )}

          </ul>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">

        <div className="flex items-start gap-3">

          <Target
            size={22}
            className="mt-0.5 text-black"
          />

          <div>

            <h3 className="font-semibold text-gray-900">
              DevNex AI Insight
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              This report was generated using AI based on your uploaded resume.
              Focus on strengthening weak areas and adding relevant keywords that
              accurately reflect your experience to improve ATS performance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}