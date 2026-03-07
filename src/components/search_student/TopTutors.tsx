import CardTutor from "@/components/cards/CardTutor";
import { Tutor } from "@/types/tutor";

interface Props {
  tutors: Tutor[];
}

export default function TopTutors({ tutors }: Props) {

  const topTutors = [...tutors]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <aside className="col-span-1">
      <div className="bg-amber-300 p-4 rounded-xl shadow space-y-4">

        <h3 className="font-semibold text-gray-800">
          Mejores calificados
        </h3>

        {topTutors.map((tutor) => (
          <div key={tutor.id} className="space-y-2">
            <CardTutor {...tutor} />
          </div>
        ))}

      </div>
    </aside>
  );
}