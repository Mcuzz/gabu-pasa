"use client";

import { useState } from "react";
import { tutorsMock } from "@/mocks/tutors.mock";
import { subjectsMock } from "@/mocks/subjects.mock";

import SearchHeader from "@/components/search_student/SearchHeader";
import SearchFilters from "@/components/search_student/SearchFilters";
import TutorResults from "@/components/search_student/TutorResults";
import TopTutors from "@/components/search_student/TopTutors";

export default function SearchStudent() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [query, setQuery] = useState("");

  const filteredTutors = tutorsMock.filter((tutor) => {
    const matchesSubject = selectedSubject
      ? tutor.subjects.includes(selectedSubject)
      : true;

    const matchesQuery = query
      ? tutor.name.toLowerCase().includes(query.toLowerCase()) ||
        tutor.subjects.some((s) =>
          s.toLowerCase().includes(query.toLowerCase())
        )
      : true;

    return matchesSubject && matchesQuery;
  });

  return (
    <div className="space-y-6 px-4 md:px-8">

      <SearchHeader />

      <div className="grid grid-cols-3 gap-6">

        <section className="col-span-2 space-y-6">
          <SearchFilters
            subjects={subjectsMock}
            query={query}
            setQuery={setQuery}
            setSelectedSubject={setSelectedSubject}
          />

          <TutorResults tutors={filteredTutors} />
        </section>

        <TopTutors tutors={tutorsMock} />

      </div>
    </div>
  );
}