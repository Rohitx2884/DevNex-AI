"use client";

import { Trophy } from "lucide-react";

export default function ATSScoreCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <Trophy className="text-yellow-500" />

        <h2 className="text-xl font-bold">
          ATS Score
        </h2>

      </div>

      <div className="mt-8 flex justify-center">

        <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-green-500">

          <div>

            <h1 className="text-5xl font-bold">
              91
            </h1>

            <p className="text-center text-gray-500">
              /100
            </p>

          </div>

        </div>

      </div>

      <p className="mt-6 text-center text-green-600 font-semibold">
        Excellent Resume
      </p>

    </div>
  );
}