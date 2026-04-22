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
      <div className="app-card-soft space-y-4 p-4">
        <h3 className="app-title font-semibold">Mejores calificados</h3>

        {topTutors.map((tutor) => (
          <div key={tutor.id} className="space-y-2">
            <CardTutor {...tutor} />
          </div>
        ))}
      </div>
    </aside>
  );
}
