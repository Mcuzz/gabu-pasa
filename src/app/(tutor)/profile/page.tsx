"use client";

import ProfileAvatar from "@/components/shared/ProfileAvatar";
import { tutorsMock } from "@/mocks/tutors.mock";

import TutorProfileInfo from "@/components/profile/TutorProfileInfo";
import TutorData from "@/components/profile/TutorData";

import { personalDataMocks } from "@/mocks/personal_data.mock";
import PageHeader from "@/components/shared/PageHeader";

export default function ProfileTutor() {
  const tutor = tutorsMock[0]; // simulando tutor logueado
  const personalData = personalDataMocks.find((p) => p.id === tutor.id);

  if (!tutor) {
    return <div>No se encontró el tutor.</div>;
  }

  return (
    <div className="space-y-6 px-4 md:px-8">
      {/* HEADER */}
      <section>
        <PageHeader
                  title="MI PERFIL"
                  subtitle="Verifica y actualiza tu informacion personal y academica."
                />
      </section>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-3 gap-6">

        {/* PERFIL 1/3 */}
        <section className="col-span-1 space-y-6">
          <ProfileAvatar id={tutor.id} name={tutor.name} />

          {personalData && (
            <TutorData data={personalData} />
          )}
        </section>

        {/* INFO DEL TUTOR 2/3 */}
        <section className="col-span-2 space-y-6">
          <TutorProfileInfo tutor={tutor} />
        </section>

      </div>
    </div>
  );
}