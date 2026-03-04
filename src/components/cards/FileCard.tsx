"use client";
// src/components/cards/FileCard.tsx
// Este es un componente de tarjeta para mostrar información
// de un archivo. Acepta props como name, type, previewUrl y 
// uploadedBy.

"use client";

import type { AcademicFile } from "@/types/file";
import type { Tutor } from "@/types/tutor";

interface FileCardProps {
  file: AcademicFile;
  tutors: Tutor[];
}

export default function FileCard({ file, tutors }: FileCardProps) {
  const tutor = tutors.find((t) => t.id === file.uploadedBy);

  const getFileIcon = () => {
    switch (file.type) {
      case "pdf":
        return "📄";
      case "doc":
        return "📝";
      default:
        return "📁";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      
      {/* Vista previa */}
      <div className="h-40 bg-gray-100 flex items-center justify-center text-5xl">
        {getFileIcon()}
      </div>

      {/* Información */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {file.name}
        </h3>

        <p className="text-xs text-gray-500">
          Subido por:{" "}
          <span className="font-medium text-gray-700">
            {tutor ? tutor.name : "Autor desconocido"}
          </span>
        </p>
      </div>
    </div>
  );
}