import CardTutor from "@/components/cards/CardTutor";
import { Tutor } from "@/types/tutor";

interface Props {
  tutors: Tutor[];
}

export default function TutorsGrid({ tutors }: Props) {
  return (
    <section>

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Resultados
      </h2>

      <div className="text-gray-800 grid grid-cols-2 gap-4">

        {tutors.length > 0 ? (
          tutors.map((tutor) => (
            <CardTutor key={tutor.id} {...tutor} />
          ))
        ) : (
          <div className="bg-white p-6 rounded-xl shadow text-gray-800">
            No se encontraron tutores con esos criterios.
          </div>
        )}

      </div>

    </section>
  );
}