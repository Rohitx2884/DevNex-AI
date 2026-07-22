export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-sm">

        <h1 className="text-3xl font-bold">
          Documents
        </h1>

        <p className="mt-3 text-gray-500">
          Upload, organize, and chat with your documents.
        </p>

        <div className="mt-8 rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center">

          <h2 className="text-xl font-semibold">
            No Documents Yet
          </h2>

          <p className="mt-3 text-gray-500">
            Upload PDF, DOCX, or TXT files to get started.
          </p>

          <button className="mt-6 rounded-xl bg-black px-6 py-3 font-medium text-white hover:bg-gray-800">
            Upload Document
          </button>

        </div>

      </div>
    </main>
  );
}