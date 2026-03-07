import { tutorsMock } from "@/mocks/tutors.mock";
import LastTutor from "@/components/cards/LastTutor";

export default function RecentTutors() {
  return (
    <div className="bg-amber-300 p-6 rounded-xl shadow">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">
        Últimos tutores
      </h2>

      <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
        {tutorsMock.slice(0,4).map((tutor) => (
          <LastTutor key={tutor.id} {...tutor} />
        ))}
      </div>
    </div>
  );
}