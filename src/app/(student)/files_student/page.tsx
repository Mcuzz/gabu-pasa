"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import FileCard from "@/components/cards/FileCard";
import { filesMock } from "@/mocks/files.mock";

import { tutorsMock } from "@/mocks/tutors.mock";

export default function Page() {
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-gray-900">Tus archivos</h1>
      </section>

      {/* FILTROS */}
      <section className="bg-white p-4 rounded-xl shadow text-gray-700">
        <div className="grid grid-cols-2 gap-4">
          {/* SELECT TUTOR */}
          <select
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedTutor}
            onChange={(e) => setSelectedTutor(e.target.value)}
          >
            <option value="">Todos los tutores</option>
            {tutorsMock.map((tutor) => (
              <option key={tutor.id} value={tutor.id}>
                {tutor.name}
              </option>
            ))}
          </select>

          {/* SELECT TIPO DE ARCHIVO */}
          <select
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Todos los tipos</option>
            <option value="pdf">PDF</option>
            <option value="doc">Word</option>
            <option value="xls">Excel</option>
          </select>
        </div>
      </section>

       {/*CUADRICULA DE ARCHIVOS */}
       <section className="bg-white p-4 rounded-xl shadow text-gray-700">
         <div className="grid grid-cols-4 gap-4">
          {filesMock.map((file) => (
    <FileCard
      key={file.id}
      file={file}
      tutors={tutorsMock}
    />
  ))}
         </div>

       </section>


    </div>
  );
}
