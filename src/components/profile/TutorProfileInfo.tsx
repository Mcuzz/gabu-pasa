"use client";

import type { Tutor } from "@/types/tutor";
import Button from "../ui/Button";
import RatingStars from "../feedback/RatingStars";

interface TutorProfileInfoProps {
  tutor: Tutor;
}

export default function TutorProfileInfo({ tutor }: TutorProfileInfoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-3">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{tutor.name}</h2>
          <p className="text-sm text-gray-500">{tutor.educationLevel}</p>
        </div>

        <div className="flex items-center gap-2">
          <RatingStars value={tutor.rating ?? 0} readonly />
          <span className="text-sm text-gray-500">{tutor.rating ?? 0}/5</span>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-600 text-sm">{tutor.description}</p>

      {/* Materias y habilidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">

        {/* Materias */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Materias</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2 py-1"
              onClick={() => console.log("Editar materias")}
            >
              Editar ✎
            </Button>
          </div>
          <ul className="space-y-2">
            {tutor.subjects.map((subject, index) => (
              <li key={index} className="bg-gray-100 text-sm px-3 py-2 rounded-lg">
                {subject}
              </li>
            ))}
          </ul>
        </div>

        {/* Habilidades */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Habilidades</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2 py-1"
              onClick={() => console.log("Editar habilidades")}
            >
              Editar ✎
            </Button>
          </div>
          <ul className="space-y-2">
            {tutor.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-100 text-sm px-3 py-2 rounded-lg flex justify-between"
              >
                <span>{skill.name}</span>
                <span className="text-gray-500 text-xs">{skill.level}%</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ID técnico */}
      <div className="pt-4 border-t text-xs text-gray-400">ID: {tutor.id}</div>
    </div>
  );
}