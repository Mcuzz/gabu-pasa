// src/components/cards/CardTutor.tsx

import Button from "../ui/Button";
import RatingStars from "../feedback/RatingStars";

interface CardTutorProps {
  id: string;
  name: string;
  description: string;
  subjects: string[];
  rating: number;
  onClick?: () => void;
}

export default function CardTutor({
  name,
  description,
  subjects,
  rating,
  onClick,
}: CardTutorProps) {
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

        {/* avatar */}
        <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center font-semibold text-blue-800">
          {name.charAt(0)}
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-800">{name}</h2>

          <div className="flex items-center gap-2">
            <RatingStars value={rating} readonly />
            <span className="text-sm text-gray-500">{rating}/5</span>
          </div>
        </div>
      </div>

      {/* description */}
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      {/* subjects */}
      <div className="flex flex-wrap gap-2 mb-6">
        {subjects.map((subject) => (
          <span
            key={subject}
            className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
          >
            {subject}
          </span>
        ))}
      </div>

      {/* button */}
      <div className="pt-4 border-t flex justify-center">
        <Button
          variant="primary"
          size="sm"
          className="shadow-sm"
          onClick={() => console.log("Enviar Solicitud")}
        >
          Enviar solicitud
        </Button>
      </div>
    </div>
  );
}