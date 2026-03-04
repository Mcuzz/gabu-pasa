"use client";

import { useState } from "react";
import { tutorsMock } from "@/mocks/tutors.mock";
import CardTutor from "@/components/cards/CardTutor";
import FilterPanel from "@/components/filters/FilterPanel";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { subjectsMock } from "@/mocks/subjects.mock";

export default function SearchStudent() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [query, setQuery] = useState("");

  const filteredTutors = tutorsMock.filter((tutor) => {
    const matchesSubject = selectedSubject
      ? tutor.subjects.includes(selectedSubject)
      : true;

    const matchesQuery = query
      ? tutor.name.toLowerCase().includes(query.toLowerCase()) ||
        tutor.subjects.some((s) =>
          s.toLowerCase().includes(query.toLowerCase())
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
    <div className="space-y-6">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-gray-800">
          Buscar Tutor
        </h1>
        <p className="text-gray-500">
          Encuentra el tutor perfecto para tus necesidades académicas.
        </p>
      </section>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* 2/3 - BUSCADOR + FILTRO + RESULTADOS */}
        <section className="col-span-2 space-y-6">

          {/* Filtros + Buscador */}
          <div className="bg-white p-4 rounded-xl shadow space-y-4">
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
            <h2 className="text-lg font-semibold text-gray-800">
              Resultados
            </h2>

            {filteredTutors.length > 0 ? (
              filteredTutors.map((tutor) => (
                <CardTutor key={tutor.id} {...tutor} />
              ))
            ) : (
              <div className="bg-white p-6 rounded-xl shadow text-gray-500">
                No se encontraron tutores con esos criterios.
              </div>
            )}
          </div>
        </section>

        {/* 1/3 - MEJORES OPCIONES */}
        <aside className="col-span-1">
          <div className="bg-white p-4 rounded-xl shadow space-y-4">
            <h3 className="font-semibold text-gray-800">
              Mejores calificados
            </h3>

            {[...tutorsMock]
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 3)
              .map((tutor) => (
                <div key={tutor.id} className="space-y-2">
                  <CardTutor {...tutor} />
                  <div className="flex justify-end">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        console.log(`Solicitud enviada a ${tutor.name}`)
                      }
                    >
                      Enviar solicitud
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </aside>

      </div>
    </div>
  );
}