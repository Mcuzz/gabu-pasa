"use client";

import Button from "@/components/ui/Button";

export default function ProfileCard() {
  return (
    <div className="p-6 border-b">
      <div className="flex flex-col items-center gap-4">
        
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gray-300" />

        {/* Nombre */}
        <h2 className="font-semibold text-gray-800">
          Nombre del alumno
        </h2>

        {/* Botón */}
        <Button size="sm">
          Editar
        </Button>

      </div>
    </div>
  );
}