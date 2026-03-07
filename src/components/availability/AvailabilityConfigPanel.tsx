"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function AvailabilityConfigPanel() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6 max-w-lg">
      
      <h2 className="text-xl font-semibold text-gray-800">
        Horarios disponibles
      </h2>

      <div className="space-y-6">

        {/* Horario escolar */}
        <div className="space-y-2">
          <label className="text-sm text-gray-600 font-medium">
            Ingresa tu horario escolar
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition">
              Compartir
            </Button>
            <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-sm transition">
              Ver
            </Button>
            <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-sm transition">
              Descargar
            </Button>
          </div>
        </div>

        {/* Tiempo máximo por sesión */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-medium">
            Tiempo máximo por sesión
          </label>
          <Input type="number" placeholder="Minutos" className="w-full" />
        </div>

        {/* Tiempo mínimo por sesión */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-medium">
            Tiempo mínimo por sesión
          </label>
          <Input type="number" placeholder="Minutos" className="w-full" />
        </div>

      </div>
    </div>
  );
}