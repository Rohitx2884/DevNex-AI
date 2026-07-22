"use client";

const skills = [
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "SQL",
  "AWS",
];

export default function SkillsCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Skills Found
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}