"use client";

import { useState } from "react";

import ResumeUploader from "@/components/resume/ResumeUploader";
import ATSScoreCard from "@/components/resume/ATSScoreCard";
import SkillsCard from "@/components/resume/SkillsCard";
import SuggestionsCard from "@/components/resume/SuggestionsCard";

import {
  FileText,
  Sparkles,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

export default function ResumePage() {
  const [analysis, setAnalysis] = useState({
  score: 0,
  strengths: [] as string[],
  weaknesses: [] as string[],
  skills: [] as string[],
  missing_keywords: [] as string[],
  suggestions: [] as string[],
});

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-black">

      <div className="mx-auto max-w-7xl px-8 py-10">

        {/* Hero */}

        <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-10 text-white shadow-2xl">

          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15">

                  <FileText size={32} />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.3em] text-indigo-100">

                    DEVNEX AI

                  </p>

                  <h1 className="mt-2 text-5xl font-black">

                    Resume Analyzer

                  </h1>

                </div>

              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-indigo-100">

                Upload your resume and receive a professional ATS score,
                missing keywords, strengths, weaknesses and AI-powered
                improvement suggestions.

              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <HeroCard
                icon={<Sparkles size={24} />}
                value="98%"
                label="ATS Accuracy"
              />

              <HeroCard
                icon={<ShieldCheck size={24} />}
                value="AI"
                label="Smart Analysis"
              />

              <HeroCard
                icon={<Briefcase size={24} />}
                value="HR"
                label="Recruiter Ready"
              />

              <HeroCard
                icon={<CheckCircle size={24} />}
                value="24/7"
                label="Instant Review"
              />

            </div>

          </div>

        </section>

        {/* Upload */}

       {/* Upload */}

<div className="mt-10">

  <ResumeUploader
    onAnalysisComplete={setAnalysis}
  />

</div>

{/* Analysis */}

<div className="mt-10 grid gap-8 lg:grid-cols-3">

  <ATSScoreCard
    score={analysis.score}
  />

  <SkillsCard
    skills={analysis.skills}
    missingKeywords={analysis.missing_keywords}
  />

  <SuggestionsCard
    strengths={analysis.strengths}
    weaknesses={analysis.weaknesses}
    suggestions={analysis.suggestions}
  />

</div>

        {/* Features */}

        <div className="mt-12">

          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">

            What you'll receive

          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <FeatureCard
              emoji="📊"
              title="ATS Score"
              text="Know how your resume performs against ATS systems."
            />

            <FeatureCard
              emoji="🎯"
              title="Keyword Match"
              text="Discover missing keywords recruiters expect."
            />

            <FeatureCard
              emoji="💡"
              title="AI Suggestions"
              text="Receive actionable improvements instantly."
            />

            <FeatureCard
              emoji="🚀"
              title="Career Ready"
              text="Optimize your resume for your dream role."
            />

          </div>

        </div>

      </div>

    </main>
  );
}

function HeroCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">

        {icon}

      </div>

      <h2 className="mt-6 text-4xl font-black">

        {value}

      </h2>

      <p className="mt-2 text-sm text-indigo-100">

        {label}

      </p>

    </div>
  );
}

function FeatureCard({
  emoji,
  title,
  text,
}: {
  emoji: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-2xl text-white">

        {emoji}

      </div>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">

        {title}

      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">

        {text}

      </p>

      <div className="mt-6 flex items-center gap-2 font-semibold text-indigo-600">

        Learn More

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />

      </div>

    </div>
  );
}