// src/components/calendar/CalendarWrapper.tsx
// Este es un componente de envoltura para un calendario.
// Acepta una lista de eventos, cada uno con un título, 
// fecha de inicio y fecha de fin.

// Cada evento se muestra en el calendario según sus fechas,
// y el título se muestra dentro del evento. Este componente
// puede ser utilizado para mostrar eventos como clases, 
// tutorías o cualquier otro tipo de evento programado.

// Luego mejor le ponemos React Big Calendar
// src/components/calendar/CalendarWrapper.tsx

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}

interface CalendarWrapperProps {
  events: CalendarEvent[];
}

export default function CalendarWrapper({ events }: CalendarWrapperProps) {
  return (
    <div className="bg-amber-300 border border-gray-200 rounded-xl p-6 shadow-sm">

      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Calendario
        </h2>

        <span className="text-sm text-gray-500">
          {events.length} eventos
        </span>
      </div>

      {/* lista de eventos */}
      <div className="space-y-3">

        {events.length === 0 && (
          <p className="text-sm text-gray-500">
            No hay eventos programados
          </p>
        )}

        {events.map((event, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg p-4 transition hover:shadow-sm hover:bg-gray-50 bg-white"
          >

            <p className="font-medium text-gray-800">
              {event.title}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              {event.start.toLocaleString()} — {event.end.toLocaleString()}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}