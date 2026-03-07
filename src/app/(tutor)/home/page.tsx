"use client";

import TutorRatingStars from "@/components/feedback/TutorRatingStars";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import { tutorSessionsMock } from "@/mocks/tutorSessions.mock";
import { studentsMock } from "@/mocks/students.mock";
import LastStudent from "@/components/cards/LastStudent";
import SolicitudesTutor from "@/components/feedback/SolicitudesTutor";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const recentStudents = studentsMock.slice(0, 4);

  return (
    <div className="space-y-8 px-4 md:px-8">

      {/* HEADER */}
      <section>
        <PageHeader
          title="DASHBOARD"
          subtitle="Resumen general de tus métricas, actividades recientes y solicitudes."
        /> 
      </section>

      {/* GRID PRINCIPAL RESPONSIVE */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* LADO IZQUIERDO (3/5) */}
        <div className="lg:col-span-3 space-y-6">

          {/* CALIFICACIÓN GENERAL */}
          <div className="bg-white p-6 rounded-xl shadow text-gray-800">
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              Su calificación general es: 100%
            </h2>
            <TutorRatingStars />
          </div>

          {/* CALENDARIO */}
          <div className="bg-white p-6 rounded-xl shadow text-gray-800">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tutorías Programadas
            </h2>
            {tutorSessionsMock.length === 0 ? (
              <p className="text-gray-400 text-sm">No hay tutorías programadas.</p>
            ) : (
              <CalendarWrapper events={tutorSessionsMock} />
            )}
          </div>

        </div>

        {/* LADO DERECHO (2/5) */}
        <div className="lg:col-span-2 space-y-6">

          {/* ALUMNOS RECIENTES */}
          <div className="bg-white p-6 rounded-xl shadow text-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Alumnos recientes
            </h2>

            {recentStudents.length === 0 ? (
              <p className="text-gray-400 text-sm">No hay alumnos recientes.</p>
            ) : (
              <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                {recentStudents.map((student) => (
                  <LastStudent
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    subjects={student.interests}
                    rating={student.rating ?? 0}
                  />
                ))}
              </div>
            )}
          </div>

          {/* SOLICITUDES */}
          <SolicitudesTutor
            count={5}
            onManage={() => console.log("Administrar solicitudes")}
          />

        </div>

      </section>
    </div>
  );
}