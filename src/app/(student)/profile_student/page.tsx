"use client";
import ProfileAvatar from "@/components/shared/ProfileAvatar";
import { studentsMock } from "@/mocks/students.mock";
import StudentProfileInfo from "@/components/profile/StudentProfileInfo";
import StudentData from "@/components/profile/StudentData";
import { personalDataMocks } from "@/mocks/personal_data.mock";


export default function ProfileStudent() {
  const student = studentsMock[0]; // simulando alumno logueado
  const personalData = personalDataMocks.find((p) => p.id === student.id);

  if (!student) {
    return <div>No se encontró el estudiante.</div>;
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-gray-800">Mi perfil</h1>
      </section>

      {/*GRID PRINCIPAL*/}
      <div className="grid grid-cols-3 gap-6">
        {/* ZONA DEL PERFIL 1/3 */}
        <section className="col-span-1 space-y-6">
          <ProfileAvatar id={student.id} name={student.name} />
          {personalData && <StudentData data={personalData} />}
        </section>

        {/*Zona de necesidades 2/3*/}
        <section className="col-span-2 space-y-6">
          <StudentProfileInfo student={student} />
        </section>

        <div className="text-gray-800 col-span-2 bg-white rounded-xl shadow"></div>
      </div>
    </div>
  );
}
