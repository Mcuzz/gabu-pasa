// src/components/cards/LastTutor.tsx
// Este es un componente de tarjeta para mostrar información
// de un tutor. Acepta props como id, name

import RatingStars from "../feedback/RatingStars";

interface CardTutorProps {
  id: string;
  name: string;
  subjects: string[];
  rating: number;
  onClick?: () => void;
}

export default function LastTutor({
  name,
  subjects,
  rating,
  onClick,
}: CardTutorProps) {

  const subject = subjects?.[0];

  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-4
        bg-white border border-gray-200 rounded-lg
        p-4 shadow-sm
        transition hover:shadow-md hover:-translate-y-0.5
        ${onClick ? "cursor-pointer" : ""}
      `}
    >

      {/* avatar */}
      <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-semibold">
        {name.charAt(0)}
      </div>

      {/* info */}
      <div className="flex-1">

        <p className="font-medium text-gray-800">
          {name}
        </p>

        <p className="text-xs text-gray-500">
          {subject}
        </p>

        <div className="flex items-center gap-2 mt-1">
          <RatingStars value={rating} readonly />
          <span className="text-xs text-gray-500">
            {rating}/5
          </span>
        </div>

      </div>

    </div>
  );
}