"use client";

import { useState } from "react";

import FileCard from "@/components/cards/FileCard";
import Input from "@/components/ui/Input"; // usamos el Input refinado
import NoteCardHorizontal from "@/components/cards/NoteCardHorizontal";

import { filesMock } from "@/mocks/files.mock";
import { tutorsMock } from "@/mocks/tutors.mock";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredFiles = filesMock.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  const pdfFiles = filesMock.filter((file) => file.type === "pdf");

  return (
    <div className="space-y-8 px-4 md:px-8">

      {/* HEADER */}
      <section>
        <PageHeader
                  title="ARCHIVOS COMPARTIDOS"
                  subtitle="Material que has enviado a tus alumnos y notas academicas."
                />
      </section>

      {/* GRID PRINCIPAL RESPONSIVE */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* COLUMNA PRINCIPAL (Lado izquierdo, 3/5) */}
        <div className="lg:col-span-3 space-y-6">

          {/* BUSCADOR */}
          <Input
            placeholder="Buscar archivo por título..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* CUADRICULA DE ARCHIVOS */}
          {filteredFiles.length === 0 ? (
            <p className="text-gray-400 text-sm">No se encontraron archivos.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredFiles.map((file) => (
                <FileCard key={file.id} file={file} tutors={tutorsMock} />
              ))}
            </div>
          )}

        </div>

        {/* COLUMNA SECUNDARIA (Lado derecho, 2/5) */}
        <div className="lg:col-span-2 space-y-4">

          <h2 className="text-lg font-semibold text-gray-800">Apuntes</h2>

          {pdfFiles.length === 0 ? (
            <p className="text-gray-400 text-sm">No hay apuntes disponibles.</p>
          ) : (
            pdfFiles.map((file) => (
              <NoteCardHorizontal
                key={file.id}
                file={file}
                onEdit={() => console.log("Editar apunte", file.id)}
              />
            ))
          )}

        </div>
      </section>
    </div>
  );
}