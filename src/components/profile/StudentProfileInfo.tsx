"use client";

import type { Student } from "@/types/student";
import Button from "../ui/Button";
import RatingStars from "../feedback/RatingStars";

interface StudentProfileInfoProps {
  student: Student;
  
}

export default function StudentProfileInfo({ student }: StudentProfileInfoProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">

        <div className="flex items-center gap-3">

          {/* avatar */}
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-semibold text-blue-800">
            {student.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {student.name}
            </h2>

            <p className="text-sm text-gray-500">
              {student.level}
            </p>
          </div>

        </div>

        <div className="flex items-center gap-2">
          <RatingStars value={student.rating ?? 0} readonly />
          <span className="text-sm font-medium text-gray-600">
            {student.rating}/5
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-6 text-gray-800">

        {/* Necesidades */}
        <div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Necesidades
            </h3>

            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2 py-1"
              onClick={() => console.log("Editar necesidades")}
            >
              Editar ✎
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">

            {student.needs.length === 0 && (
              <span className="text-xs text-gray-400">
                Sin necesidades registradas
              </span>
            )}

            {student.needs.map((need, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {need}
              </span>
            ))}

          </div>

        </div>

        {/* Intereses */}
        <div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Intereses
            </h3>

            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2 py-1"
              onClick={() => console.log("Editar intereses")}
            >
              Editar ✎
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">

            {student.interests.length === 0 && (
              <span className="text-xs text-gray-400">
                Sin intereses registrados
              </span>
            )}

            {student.interests.map((interest, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {interest}
              </span>
            ))}

          </div>

        </div>

      </div>

      {/* ID técnico discreto */}
      <div className="pt-4 border-t text-xs text-gray-400">
        ID: {student.id}
      </div>

    </div>
  );
}