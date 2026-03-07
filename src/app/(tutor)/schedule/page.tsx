"use client";

import AvailabilityConfigPanel from "@/components/availability/AvailabilityConfigPanel";
import RecommendationPanel from "@/components/availability/RecommendationPanel"
import AvailabilityCalendar from "@/components/availability/AvailabilityCalendar";
import PageHeader from "@/components/shared/PageHeader";
export default function TutorAvailabilityPage() {

  return (
    <div className="space-y-6 text-gray-800 px-4 md:px-8">
      <section>
        <PageHeader
                  title="HORARIOS"
                  subtitle="Establece los horarios en los cuales los estudiantes podrian solicitar una asesoria contigo"
                />
      </section>

      <div className="grid grid-cols-2 gap-6 text-gray-800">

        <AvailabilityConfigPanel />
        <RecommendationPanel />

      </div>

      <AvailabilityCalendar />

    </div>
  );
}