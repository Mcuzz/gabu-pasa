"use client";

import { CallHistory } from "@/mocks/callHistory.mock";

interface Props {
  call: CallHistory;
}

export default function CallHistoryRow({ call }: Props) {

  const getIcon = () => {
    switch (call.status) {
      case "finished":
        return "📞";
      case "ongoing":
        return "⏱";
      case "missed":
        return "📹";
      default:
        return "📞";
    }
  };

  return (
    <div className="grid grid-cols-4 items-center py-6 border-b last:border-none">

      {/* Alumno */}
      <div className="text-gray-700 font-medium">
        {call.studentName}
      </div>

      {/* Participantes */}
      <div className="flex items-center gap-4 justify-center">

        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        <span className="text-xl">{getIcon()}</span>

        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

      </div>

      {/* Duración */}
      <div className="text-gray-600 text-center">
        {call.duration}
      </div>

      {/* Observaciones */}
      <div className="text-gray-600 text-sm">
        {call.observations}
      </div>

    </div>
  );
}