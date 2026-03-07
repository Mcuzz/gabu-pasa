"use client";

import ProfileAvatar from "@/components/shared/ProfileAvatar";
import StudentProfileInfo from "@/components/profile/StudentProfileInfo";
import StudentData from "@/components/profile/StudentData";
import PageHeader from "@/components/shared/PageHeader";

import { studentsMock } from "@/mocks/students.mock";
import { personalDataMocks } from "@/mocks/personal_data.mock";


export default function ProfileStudent() {

  const student = studentsMock[0] ?? null;

  if (!student) {
    return <div>No se encontró el estudiante.</div>;
  }

  const personalData = personalDataMocks.find(
    (p) => p.id === student.id
  );

  return (
    <div className="space-y-6 px-4 md:px-8">

      <section>
        <PageHeader
                  title="MI PERFIL"
                  subtitle="Mi informacion personal y academica"
                />
      </section>

      <div className="grid grid-cols-3 gap-6">

        <aside className="col-span-1 space-y-6">
          <ProfileAvatar id={student.id} name={student.name} />
          {personalData && <StudentData data={personalData} />}
        </aside>

        <main className="col-span-2 space-y-6">
          <StudentProfileInfo student={student} />
        </main>

      </div>

    </div>
  );
}
