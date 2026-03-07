"use client";

import { useState } from "react";
import { filesMock } from "@/mocks/files.mock";
import { tutorsMock } from "@/mocks/tutors.mock";

import FilesFilter from "@/components/filters/FilesFilter";
import FilesGrid from "@/components/filters/FilesGrid";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="space-y-8 px-4 md:px-8">
      <section>
        <PageHeader
          title="TUS ARCHIVOS"
          subtitle="Encuentra los archivos otorgados por tus asesores a lo largo de todo tu aprendizaje."
        />
      </section>

      <FilesFilter
        selectedTutor={selectedTutor}
        selectedType={selectedType}
        setSelectedTutor={setSelectedTutor}
        setSelectedType={setSelectedType}
        tutors={tutorsMock}
      />

      <FilesGrid files={filesMock} tutors={tutorsMock} />
    </div>
  );
}
