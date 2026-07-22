export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm">

        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-3 text-gray-500">
          Manage your DevNex AI preferences.
        </p>

        <div className="mt-8 space-y-6">

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold">
              Appearance
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Dark mode and theme options coming soon.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold">
              AI Preferences
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Configure AI behavior and response settings.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold">
              Account
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Account management features will be available here.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}