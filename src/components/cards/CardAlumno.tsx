"use client";
// src/components/cards/CardAlumno.tsx
// Este es un componente de tarjeta para mostrar información 
// de un alumno. Acepta props como id, name, subject y rating.
"use client";

import RatingStars from "../feedback/RatingStars";

interface CardAlumnoProps {
  id: string;
  name: string;
  subject: string;
  rating: number;
  onClick?: () => void;
}

// Componente de tarjeta para alumno, estilo consistente con CardTutor
export default function CardAlumno({
  name,
  subject,
  rating,
  onClick,
}: CardAlumnoProps) {
  // separar las materias por comas y hacer un array para tags
  const subjectsArray = subject.split(",").map((s) => s.trim());

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-sm border border-gray-200
        p-6 transition hover:shadow-md hover:-translate-y-1
        ${onClick ? "cursor-pointer" : ""}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center font-semibold text-green-800">
          {name.charAt(0)}
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-800">{name}</h2>

          <div className="flex items-center gap-2 mt-1">
            <RatingStars value={rating} readonly />
            <span className="text-sm text-gray-500">{rating}/5</span>
          </div>
        </div>
      </div>

      {/* subjects */}
      <div className="flex flex-wrap gap-2 mt-2">
        {subjectsArray.map((subj) => (
          <span
            key={subj}
            className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full"
          >
            {subj}
          </span>
        ))}
      </div>
    </div>
  );
}