"use client";

import type { PersonalData } from "@/types/personal_data";
import Button from "../ui/Button";

interface TutorDataProps {
  data: PersonalData;
}

export default function TutorData({ data }: TutorDataProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">
        Datos Académicos y de Contacto
      </h3>

      <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
        <div className="space-y-1">
          <p className="text-gray-500">Correo</p>
          <p className="font-medium break-word">{data.correo}</p>
        </div>

        <div className="space-y-1">
          <p className="text-gray-500">Teléfono</p>
          <p className="font-medium">{data.telefono}</p>
        </div>

        <div className="space-y-1">
          <p className="text-gray-500">Semestre</p>
          <p className="font-medium">{data.semestre}</p>
        </div>

        <div className="space-y-1">
          <p className="text-gray-500">Carrera</p>
          <p className="font-medium">{data.carrera}</p>
        </div>
      </div>

      <div className="pt-4 border-t text-xs text-gray-400">
        ID interno: {data.id}
      </div>
      <div className="pt-6 border-t flex justify-end">
        <Button
          variant="primary"
          size="md"
          className="shadow-sm"
          onClick={() => console.log("Actualizar información")}
        >
          Actualizar información
        </Button>
      </div>
    </div>
  );
}
