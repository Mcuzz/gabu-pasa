"use client";

import { studentsMock } from "@/mocks/students.mock";
import { useState } from "react";
import Button from "@/components/ui/Button";
import CallHistory from "@/components/videocall/CallHistory";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const [selectedStudent, setSelectedStudent] = useState<string>("");

  return (
    <div className="space-y-8 px-4 md:px-8">
      {/* HEADERe */}
      <section>
        <PageHeader
                  title="LLAMADAS"
                  subtitle="Inicia clases online a traves de una videollamada."
                /> 
      </section>

      {/* SELECCIÓN DE ESTUDIANTE */}
      <section className="bg-white p-4 rounded-xl shadow text-gray-500 ">
        <select
          className="w-full p-3 border rounded-lg mb-6"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Escoge Estudiante</option>
          {studentsMock.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
        {/* BOTÓN DE VIDEOLLAMADA */}

        <Button disabled={!selectedStudent}>Iniciar videollamada</Button>
      </section>

      {/*HISTORIAL DE LLAMADAS*/}
      <section className="bg-white p-4 rounded-xl shadow text-gray-500">
        <h1 className="text-2xl font-semibold text-gray-900">
          Historial de llamadas
        </h1>
        <CallHistory />
      </section>
    </div>
  );
}
