"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface Props {
  text: string;
}

export default function MessageActions({
  text,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function copyMessage() {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <div className="flex items-center gap-2">

      <button
        onClick={copyMessage}
        className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm transition hover:bg-gray-100"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )}
      </button>

    </div>
  );
}