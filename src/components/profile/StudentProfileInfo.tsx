"use client";
import type { Student } from "@/types/student";
import Button from "../ui/Button";

interface StudentProfileInfoProps {
  student: Student;
}

export default function StudentProfileInfo({
  student,
}: StudentProfileInfoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {student.name}
          </h2>
          <p className="text-sm text-gray-500">{student.level}</p>
        </div>

        <div className="flex items-center gap-1 text-yellow-500 font-semibold">
          <span className="text-lg">★</span>
          <span>{student.rating}/5</span>
        </div>
      </div>

      {/* Content */}
      <div className=" text-gray-800 grid grid-cols-2 gap-6">
        {/* Necesidades */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Necesidades
            </h3>

            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2 py-1"
              onClick={() => console.log("Agregar necesidad")}
            >
              Editar ✎
            </Button>
          </div>

          <ul className="space-y-2">
            {student.needs.map((need, index) => (
              <li
                key={index}
                className="bg-gray-100 text-sm px-3 py-2 rounded-lg"
              >
                {need}
              </li>
            ))}
          </ul>
        </div>

        {/* Intereses */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Intereses
            </h3>

            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2 py-1"
              onClick={() => console.log("Agregar necesidad")}
            >
              Editar ✎
            </Button>
          </div>
          <ul className="space-y-2">
            {student.interests.map((interest, index) => (
              <li
                key={index}
                className="bg-gray-100 text-sm px-3 py-2 rounded-lg"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ID técnico discreto */}
      <div className="pt-4 border-t text-xs text-gray-400">
        ID: {student.id}
      </div>
    </div>
  );
}
