import CardTutor from "@/components/cards/CardTutor";

interface Props {
  tutors: any[];
}

export default function TutorResults({ tutors }: Props) {
  return (
    <div className="space-y-4">

      <h2 className="text-lg font-semibold text-gray-800">
        Resultados
      </h2>

      {tutors.length > 0 ? (
        tutors.map((tutor) => (
          <CardTutor key={tutor.id} {...tutor} />
        ))
      ) : (
        <div className="bg-white p-6 rounded-xl shadow text-gray-500">
          No se encontraron tutores con esos criterios.
        </div>
      )}

    </div>
  );
}