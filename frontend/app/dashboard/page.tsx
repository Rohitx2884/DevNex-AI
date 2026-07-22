"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-[#F8FAFC]">

      <Sidebar />

      <section className="flex flex-1 flex-col">

        <Topbar />

        <div className="flex-1 p-8">

          <DashboardHeader />

          <StatsCards />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <QuickActions />

            <RecentActivity />

          </div>

        </div>

      </section>

    </main>
  );
}