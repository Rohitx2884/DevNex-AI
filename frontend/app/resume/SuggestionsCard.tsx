"use client";

const suggestions = [
  "Add more quantified achievements.",
  "Include AWS certifications.",
  "Improve ATS keywords.",
  "Mention internship experience.",
  "Use stronger action verbs.",
];

export default function SuggestionsCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        AI Suggestions
      </h2>

      <ul className="mt-6 space-y-4">

        {suggestions.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-gray-50 p-4"
          >
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}