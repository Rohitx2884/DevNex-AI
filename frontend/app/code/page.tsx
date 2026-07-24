"use client";

import { useState } from "react";
import axios from "axios";
import {
  Code2,
  Sparkles,
  Play,
  ShieldCheck,
  CheckCircle2,
  Bug,
  Cpu,
  Copy,
} from "lucide-react";

export default function CodePage() {
  const [code, setCode] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeCode = async () => {
    if (!code.trim()) {
      alert("Please enter some code.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/code/review`,
        {
          code,
        }
      );

      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze code.");
    } finally {
      setLoading(false);
    }
  };

  const copyAnalysis = async () => {
    if (!analysis) return;
    await navigator.clipboard.writeText(analysis);
  };

  return (
    <main className="min-h-screen bg-[#F6F7FB]">
      <div className="mx-auto max-w-7xl px-10 py-10">

        {/* Header */}

        <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <Sparkles size={16} />
              <span className="text-sm font-semibold">
                AI Developer Workspace
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight">
              Code Review
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
              Paste your code and receive AI-powered feedback on quality,
              bugs, readability, performance, and best practices.
            </p>

          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <ShieldCheck className="mb-3 text-green-600" />
              <h3 className="text-3xl font-bold">AI</h3>
              <p className="text-sm text-gray-500">
                Secure Review
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <Bug className="mb-3 text-red-500" />
              <h3 className="text-3xl font-bold">Bug</h3>
              <p className="text-sm text-gray-500">
                Detection
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <Cpu className="mb-3 text-blue-600" />
              <h3 className="text-3xl font-bold">AI</h3>
              <p className="text-sm text-gray-500">
                Optimization
              </p>
            </div>

          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-12">
                    {/* Code Editor */}

          <div className="lg:col-span-7">

            <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm">

              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">

                <div className="flex items-center gap-3">
                  <Code2 />
                  <h2 className="text-xl font-bold">
                    Code Editor
                  </h2>
                </div>

                <button
                  onClick={analyzeCode}
                  disabled={loading}
                  className="flex items-center gap-2 rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-50"
                >
                  <Play size={18} />
                  {loading ? "Analyzing..." : "Review Code"}
                </button>

              </div>

              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="// Paste your code here..."
                className="h-[650px] w-full resize-none bg-[#0D1117] p-8 font-mono text-[15px] leading-7 text-green-400 outline-none"
              />

            </div>

          </div>

          {/* AI Review Panel */}

          <div className="space-y-6 lg:col-span-5">

            <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

              <div className="mb-8 flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <Sparkles />
                  <h2 className="text-2xl font-bold">
                    AI Review
                  </h2>
                </div>

                {analysis && (
                  <button
                    onClick={copyAnalysis}
                    className="rounded-xl border border-gray-200 p-3 transition hover:bg-gray-100"
                  >
                    <Copy size={18} />
                  </button>
                )}

              </div>

              {analysis ? (

                <pre className="whitespace-pre-wrap font-sans leading-8 text-gray-700">
                  {analysis}
                </pre>

              ) : (

                <div className="py-24 text-center">

                  <Sparkles
                    size={50}
                    className="mx-auto mb-6 text-gray-300"
                  />

                  <h3 className="text-2xl font-bold">
                    Ready for Review
                  </h3>

                  <p className="mt-3 text-gray-500">
                    Paste your code and click Review Code.
                  </p>

                </div>

              )}

            </div>
                        <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

              <h3 className="mb-6 text-xl font-bold">
                AI Checklist
              </h3>

              <div className="space-y-4">

                {[
                  "Code Quality",
                  "Performance",
                  "Security",
                  "Best Practices",
                  "Readability",
                  "Optimization",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}