"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", value: 18 },
  { day: "Tue", value: 26 },
  { day: "Wed", value: 22 },
  { day: "Thu", value: 35 },
  { day: "Fri", value: 42 },
  { day: "Sat", value: 31 },
  { day: "Sun", value: 48 },
];

export default function ActivityChart() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Weekly AI Activity
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="day" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#111827"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}