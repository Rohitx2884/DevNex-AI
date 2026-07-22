"use client";

import { useRef, useState } from "react";
import axios from "axios";
import { UploadCloud } from "lucide-react";

interface Props {
  onAnalysisComplete: (data: any) => void;
}

export default function ResumeUploader({
  onAnalysisComplete,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const uploadResume = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/resume/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onAnalysisComplete(res.data);

    } catch (err) {
      console.error(err);
      alert("Resume analysis failed.");
    }

    setLoading(false);
  };

  return (
    <section className="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-12 shadow-sm">

      <div className="flex flex-col items-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">

          <UploadCloud
            size={40}
            className="text-gray-700"
          />

        </div>

        <h2 className="mt-6 text-2xl font-bold">
          Upload Your Resume
        </h2>

        <p className="mt-2 text-gray-500">
          Upload a PDF resume for AI analysis
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={uploadResume}
        />

        <button
          onClick={() => inputRef.current?.click()}
          disabled={loading}
          className="mt-8 rounded-2xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Browse Resume"}
        </button>

      </div>

    </section>
  );
}