"use client";

import React from "react";
import {
  UploadCloud,
  FileText,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  FolderOpen,
  ArrowRight,
} from "lucide-react";

interface AnalysisResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  skills: string[];
  missing_keywords: string[];
  suggestions: string[];
}

interface ResumeUploaderProps {
  onAnalysisComplete?: (analysis: AnalysisResult) => void;
}

export default function ResumeUploader({
  onAnalysisComplete,
}: ResumeUploaderProps) {
  const handleBrowse = () => {
    // Temporary demo data
    // Replace this with your backend upload + AI analysis later.
    onAnalysisComplete?.({
      score: 92,
      strengths: [
        "Strong ATS formatting",
        "Professional resume layout",
        "Excellent keyword optimization",
      ],
      weaknesses: [
        "Few quantified achievements",
        "Projects need more technical details",
      ],
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "JavaScript",
      ],
      missing_keywords: [
        "AWS",
        "Docker",
        "CI/CD",
        "REST API",
      ],
      suggestions: [
        "Add measurable achievements using numbers.",
        "Include more technical keywords for ATS.",
        "Expand project descriptions with impact.",
        "Mention certifications if available.",
      ],
    });
  };

  return (
    <section className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="border-b border-gray-200 p-10 lg:border-b-0 lg:border-r">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
            <Sparkles size={15} className="text-black" />
            <span className="text-sm font-semibold text-gray-700">
              AI Resume Scanner
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Upload Your Resume
          </h2>

          <p className="mt-5 max-w-lg text-lg leading-8 text-gray-500">
            Upload your latest resume and receive a complete ATS score,
            recruiter insights, missing keywords, strengths, weaknesses and
            personalized AI suggestions within seconds.
          </p>

          <div className="mt-10 space-y-5">
            <Feature
              icon={
                <CheckCircle2
                  size={22}
                  className="text-green-600"
                />
              }
              bg="bg-green-100"
              title="ATS Compatibility"
              text="Check recruiter-friendly formatting."
            />

            <Feature
              icon={
                <FileText
                  size={22}
                  className="text-blue-600"
                />
              }
              bg="bg-blue-100"
              title="Keyword Analysis"
              text="Discover missing ATS keywords."
            />

            <Feature
              icon={
                <ShieldCheck
                  size={22}
                  className="text-purple-600"
                />
              }
              bg="bg-purple-100"
              title="Secure Upload"
              text="Your resume is encrypted and private."
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10">
          <div className="rounded-[32px] border-2 border-dashed border-gray-300 bg-[#FAFAFA] p-10 text-center transition hover:border-black hover:bg-white">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-black text-white shadow-xl">
              <UploadCloud size={40} />
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Drag & Drop Resume
            </h3>

            <p className="mt-3 text-gray-500">
              PDF or DOCX • Maximum 10 MB
            </p>

            <button
              onClick={handleBrowse}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-[1.02]"
            >
              <FolderOpen size={18} />
              Browse Files
            </button>

            <div className="mt-8 flex justify-center gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
                PDF
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
                DOCX
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
                ATS Ready
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <InfoCard
              title="Supported Files"
              value="PDF / DOCX"
            />

            <InfoCard
              title="AI Analysis"
              value={
                <div className="flex items-center gap-2">
                  10s
                  <ArrowRight
                    size={18}
                    className="text-gray-400"
                  />
                </div>
              }
            />
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl bg-green-50 p-5">
            <ShieldCheck
              size={22}
              className="text-green-600"
            />

            <div>
              <h4 className="font-semibold text-green-700">
                Privacy Protected
              </h4>

              <p className="text-sm text-green-600">
                Your resume is securely processed and never shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  bg: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bg}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
}