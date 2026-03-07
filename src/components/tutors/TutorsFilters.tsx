import FilterPanel from "@/components/filters/FilterPanel";
import Input from "@/components/ui/Input";

interface Props {
  subjects: string[];
  query: string;
  setQuery: (value: string) => void;
  setSelectedSubject: (value: string) => void;
}

export default function TutorsFilters({
  subjects,
  query,
  setQuery,
  setSelectedSubject,
}: Props) {

  const subjectFilter = {
    title: "Materias",
    options: subjects.map((subject) => ({
      label: subject,
      value: subject,
    })),
  };

  return (
    <section className="bg-amber-300 rounded space-y-6">

      <div className="text-gray-800 p-4 rounded-xl shadow space-y-4">

        <FilterPanel
          filters={[subjectFilter]}
          onChange={(_, value) => setSelectedSubject(value)}
        />

        <Input
          type="search"
          placeholder="Buscar por nombre o materia..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

      </div>

    </section>
  );
}