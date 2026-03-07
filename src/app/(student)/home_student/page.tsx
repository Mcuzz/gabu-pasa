"use client";

import StatsSection from "@/components/dashboard/StatsSection";
import ChatSection from "@/components/dashboard/ChatSection";
import RecentTutors from "@/components/dashboard/RecentTutors";
import UpcomingSessions from "@/components/dashboard/UpcomingSessions";
import PageHeader from "@/components/shared/PageHeader";

export default function HomeStudent() {
  return (
    <div className="space-y-8">
      <section>
        <PageHeader
          title="DASHBOARD"
          subtitle="Resumen general de tus tutorías y actividades recientes."
        />
      </section>

      <section className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <StatsSection />
          <ChatSection />
        </div>

        <div className="col-span-1 space-y-6">
          <RecentTutors />

          <div className="max-h-80 overflow-y-auto">
            <UpcomingSessions />
          </div>
        </div>
      </section>
    </div>
  );
}
