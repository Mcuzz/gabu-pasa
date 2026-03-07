import { AvailabilityDay } from "@/mocks/tutorAvailability.mock";

interface Props {
  day: number;
  data?: AvailabilityDay;
}

export default function CalendarDayCell({ day, data }: Props) {
  const colorMap = {
    morning: "bg-blue-400",
    evening: "bg-yellow-400",
    any: "bg-lime-400",
  };

  const color = data?.preference ? colorMap[data.preference] : "";

  return (
    <div className="bg-gray-400 rounded-lg h-24 p-2 relative text-gray-800">
      <span className="text-xs text-gray-800">{day}</span>

      {data && (
        <div
          className={`text-gray-800 absolute bottom-4 left-4 right-4 h-3 rounded ${color}`}
        />
      )}
    </div>
  );
}
