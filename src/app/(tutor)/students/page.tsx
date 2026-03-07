"use client";

import { useState } from "react";
import { studentsMock } from "@/mocks/students.mock";
import CardAlumno from "@/components/cards/CardAlumno";
import FilterPanel from "@/components/filters/FilterPanel";
import Input from "@/components/ui/Input";
import { subjectsMock } from "@/mocks/subjects.mock";
import { studentRequestsMock } from "@/mocks/StudentRequest.mock";
import StudentRequestCard from "@/components/cards/StudentRequestCard";
import PageHeader from "@/components/shared/PageHeader";

export default function SearchStudent() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [query, setQuery] = useState("");

  const filteredStudents = studentsMock.filter((student) => {
    const matchesSubject = selectedSubject
      ? student.interests.includes(selectedSubject)
      : true;

    const matchesQuery = query
      ? student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.interests.some((s) =>
          s.toLowerCase().includes(query.toLowerCase()),
        )
      : true;

    return matchesSubject && matchesQuery;
  });

  const subjectFilter = {
    title: "Materias",
    options: subjectsMock.map((subject) => ({
      label: subject,
      value: subject,
    })),
  };

  return (
    <div className="space-y-6 px-4 md:px-8">

      {/* HEADER */}
      <section>
        <PageHeader
          title="BUSCAR ESTUDIANTES"
          subtitle="Encuentra a tus estudiantes de forma rápida y sencilla."
        />
      </section>

      {/* GRID PRINCIPAL - RESPONSIVO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 2/3 - BUSCADOR + FILTRO + RESULTADOS */}
        <section className="lg:col-span-2 space-y-6">

          {/* Filtros + Buscador */}
          <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
            <FilterPanel
              filters={[subjectFilter]}
              onChange={(_, value) => setSelectedSubject(value)}
            />
            <Input
              type="search"
              placeholder="Buscar por nombre o materia..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Resultados */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Resultados</h2>

            {filteredStudents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredStudents.map((student) => (
                  <CardAlumno
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    subject={student.interests.join(", ")}
                    rating={student.rating ?? 0}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-md text-gray-500">
                No se encontraron estudiantes con esos criterios.
              </div>
            )}
          </div>
        </section>

        {/* 1/3 - SOLICITUDES */}
        <aside className="lg:col-span-1">
          <div className="bg-white p-4 rounded-xl shadow-md space-y-4 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <h3 className="font-semibold text-gray-800">Solicitudes de alumnos</h3>

            {studentRequestsMock.map((req) => (
              <StudentRequestCard
                key={req.id}
                id={req.id}
                studentName={req.studentName}
                subject={req.subject}
                onAccept={() => console.log("Aceptar", req.id)}
                onReject={() => console.log("Rechazar", req.id)}
              />
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
}