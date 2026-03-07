"use client";

import { callHistoryMock } from "@/mocks/callHistory.mock";
import CallHistoryRow from "./CallHistoryRow";

export default function CallHistory() {
  return (
    <div className="bg-[#b6fa96] rounded-3xl p-6 shadow-md">

      {/* Encabezado */}
      <div className="grid grid-cols-4 gap-4 font-semibold text-gray-900 border-b border-gray-300 pb-3 mb-4">
        <div>Alumno</div>
        <div className="text-center">Participantes</div>
        <div className="text-center">Duración</div>
        <div>Observaciones</div>
      </div>

      {/* Lista de llamadas */}
      <div className="max-h-64 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {callHistoryMock.map((call) => (
          <CallHistoryRow
            key={call.id}
            call={call}
          />
        ))}
      </div>

    </div>
  );
}