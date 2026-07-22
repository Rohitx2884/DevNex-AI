import { Bot } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">

      <div className="rounded-full bg-black p-5 text-white">
        <Bot size={40} />
      </div>

      <h2 className="mt-6 text-3xl font-bold">
        Welcome to DevNex AI
      </h2>

      <p className="mt-3 text-gray-500">
        Start a conversation with your AI assistant.
      </p>

    </div>
  );
}