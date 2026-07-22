export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Profile</h1>

        <p className="mt-3 text-gray-500">
          Manage your DevNex AI profile and account settings.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">User Information</h2>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-gray-500">Name</label>
              <p className="font-medium">Rohit</p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Role</label>
              <p className="font-medium">AI Developer</p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p className="font-medium">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}