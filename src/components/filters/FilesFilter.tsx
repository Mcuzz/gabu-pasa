"use client";

type Props = {
  selectedTutor: string;
  selectedType: string;
  setSelectedTutor: (value: string) => void;
  setSelectedType: (value: string) => void;
  tutors: { id: string; name: string }[];
};

export default function FilesFilters({
  selectedTutor,
  selectedType,
  setSelectedTutor,
  setSelectedType,
  tutors,
}: Props) {
  return (
    <section className="bg-amber-300 p-4 rounded-xl shadow text-gray-700">
      <div className="grid grid-cols-2 gap-4">
        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={selectedTutor}
          onChange={(e) => setSelectedTutor(e.target.value)}
        >
          <option value="">Todos los tutores</option>
          {tutors.map((tutor) => (
            <option key={tutor.id} value={tutor.id}>
              {tutor.name}
            </option>
          ))}
        </select>

        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Todos los tipos</option>
          <option value="pdf">PDF</option>
          <option value="doc">Word</option>
          <option value="xls">Excel</option>
        </select>
      </div>
    </section>
  );
}