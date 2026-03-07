"use client";

import Button from "@/components/ui/Button";

interface StudentRequestCardProps {
  id: string;
  studentName: string;
  subject: string;
  onAccept?: () => void;
  onReject?: () => void;
}

// Tarjeta de solicitud de alumno con estilo moderno y consistente
export default function StudentRequestCard({
  studentName,
  subject,
  onAccept,
  onReject,
}: StudentRequestCardProps) {
  const subjectsArray = subject.split(",").map((s) => s.trim());

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition hover:shadow-md hover:-translate-y-1"
    >
      {/* Header con avatar */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center font-semibold text-purple-800">
          {studentName.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{studentName}</h3>
        </div>
      </div>

      {/* Subjects como badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {subjectsArray.map((subj) => (
          <span
            key={subj}
            className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full"
          >
            {subj}
          </span>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="flex gap-2">
        <Button variant="primary" size="sm" className="flex-1" onClick={onAccept}>
          Aceptar
        </Button>
        <Button variant="secondary" size="sm" className="flex-1 " onClick={onReject}>
          Rechazar
        </Button>
      </div>
    </div>
  );
}