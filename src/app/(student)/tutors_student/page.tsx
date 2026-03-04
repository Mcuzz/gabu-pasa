"use client";

import { useState } from "react";
import { tutorsMock } from "@/mocks/tutors.mock";
import CardTutor from "@/components/cards/CardTutor";
import FilterPanel from "@/components/filters/FilterPanel";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { subjectsMock } from "@/mocks/subjects.mock";

export default function Student_Tutors() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [query, setQuery] = useState("");

  const filteredTutors = tutorsMock.filter((tutor) => {
    const matchesSubject = selectedSubject
      ? tutor.subjects.includes(selectedSubject)
      : true;

    const matchesQuery = query
      ? tutor.name.toLowerCase().includes(query.toLowerCase()) ||
        tutor.subjects.some((s) =>
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
    <div className="space-y-8">
      {/*HEADER*/}
      <section>
        <h1 className="text-2x1 text-gray-900 font-semibold">
          Tus tutores
        </h1>
      </section>
      {/*BUSCADOR Y FILTROS*/}
      <section className="col-span-2 space-y-6">
        {/* Filtros + Buscador */}
        <div className="text-gray-800 p-4 rounded-xl shadow space-y-4">
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
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Resultados</h2>
          <div className=" text-gray-800 grid grid-cols-2 space-y-4 rounded-xl">
            {filteredTutors.length > 0 ? (
              filteredTutors.map((tutor) => (
                <CardTutor key={tutor.id} {...tutor} />
              ))
            ) : (
              <div className="bg-white p-6 rounded-xl shadow text-gray-800">
                No se encontraron tutores con esos criterios.
              </div>
            )}
          </div>
        </div>
      </section>

      {/*CUADRICULA DE TUTORES :D*/}
      <section className="grid grid-cols-2 gap6"></section>
    </div>
  );
}
