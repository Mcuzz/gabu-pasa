"use client";

import Button from "@/components/ui/Button";
import ProgressCircle from "./ProgressCircle";

interface SolicitudesTutorProps {
  count: number;
  onManage?: () => void;
}

export default function SolicitudesTutor({
  count,
  onManage,
}: SolicitudesTutorProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-gray-800 grid grid-cols-2">

      {/* Mitad izquierda */}
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <h2 className="text-sm text-gray-500 font-semibold">
          Solicitudes pendientes de alumnado
        </h2>

        <span className="text-5xl font-bold">{count}</span>

        <Button
          onClick={onManage}
          className="text-sm px-3 py-1"
        >
          Administrar solicitudes
        </Button>
      </div>

      {/* Mitad derecha */}
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <p className="text-sm text-gray-500 font-semibold">
          Puntos para recompensa
        </p>

        <ProgressCircle value={7} max={10} />
      </div>

    </div>
  );
}
