"use client";

import RatingStars from "@/components/feedback/RatingStars";

interface CardStudentProps {
  id: string;
  name: string;
  subjects: string[];
  rating: number;
  onClick?: () => void;
}

export default function LastStudent({
  name,
  subjects,
  rating,
  onClick,
}: CardStudentProps) {
  const subjectsPreview = subjects.length > 0 ? subjects.join(", ") : "—";

  return (
    <div
      className={`
        bg-white border border-gray-200 rounded-xl p-4 shadow-sm
        transition hover:shadow-md hover:bg-gray-50
        ${onClick ? "cursor-pointer" : "cursor-default"}
      `}
      onClick={onClick}
    >
      {/* Nombre del estudiante */}
      <h2 className="text-gray-800 font-semibold text-lg">{name}</h2>

      {/* Materias */}
      <p className="text-sm text-gray-600 mt-2">
        <strong>Materias:</strong> {subjectsPreview}
      </p>

      {/* Rating visual con estrellas */}
      <div className="flex items-center mt-2 gap-2">
        <RatingStars value={rating} max={5} readonly />
        <span className="text-sm text-gray-600">{rating} / 5</span>
      </div>
    </div>
  );
}