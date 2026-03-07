"use client";

export default function RecommendationPanel() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-full">
      
      {/* Header */}
      <div className="flex items-center gap-6">
        <div className="w-28 h-28 rounded-full border-8 border-blue-900 flex items-center justify-center">
          <div className="w-4 h-16 bg-blue-900 rounded" />
        </div>

        <p className="text-sm text-gray-700">
          Seleccione las horas que vea recomendable
        </p>
      </div>

      {/* Leyenda */}
      <div className="space-y-3">
        <Legend label="Matutino" color="bg-blue-400" />
        <Legend label="Vespertino" color="bg-yellow-400" />
        <Legend label="Cualquier hora" color="bg-lime-400" />
      </div>
    </div>
  );
}

function Legend({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600 w-28 text-right">{label}</span>
      <div className={`h-4 flex-1 rounded-lg ${color}`} />
    </div>
  );
}