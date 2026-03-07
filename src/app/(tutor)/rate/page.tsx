"use client";

import { useState } from "react";
import { studentsMock } from "@/mocks/students.mock";
import RatingStars from "@/components/feedback/RatingStars";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [comment, setComment] = useState("");

  const [ratings, setRatings] = useState({
    puntualidad: 0,
    actitud: 0,
    cooperacion: 0,
    retroalimentacion: 0,
  });

  const handleRatingChange = (key: string, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const ratingSections = [
    { key: "puntualidad", label: "Puntualidad" },
    { key: "actitud", label: "Actitud" },
    { key: "cooperacion", label: "Cooperacion" },
    { key: "retroalimentacion", label: "Retroalimentacion" },
  ];

  const handleSubmit = () => {
    const allRated = Object.values(ratings).every((r) => r > 0);

    if (!selectedStudent) {
      alert("Debes seleccionar un alumno.");
      return;
    }

    if (!allRated) {
      alert("Debes calificar todas las categorías.");
      return;
    }

    const payload = {
      studentId: selectedStudent,
      ratings,
      comment,
      createdAt: new Date(),
    };

    console.log("Review enviada:", payload);
  };

  return (
    <div className="space-y-8 px-4 md:px-8">
      
      {/* HEADER */}
      <section>
        <PageHeader
                  title="CALIFICA A TU ALUMNO"
                  subtitle="Otorga una calificacion justa e imparcial al alumno con el que te ha tocado colaborar."
                />
      </section>

      {/* SELECT alumno */}
      <section className="bg-white p-4 rounded-xl shadow text-gray-500">
        <select
          className="w-full p-3 border rounded-lg"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Escoge alumno</option>
          {studentsMock.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </section>

      {/* RATING GRID */}
      <section className="grid grid-cols-2 gap-6">
        {ratingSections.map((section) => (
          <div
            key={section.key}
            className="bg-green-200 p-6 rounded-xl space-y-4"
          >
            <h3 className="font-semibold text-gray-800">
              {section.label}
            </h3>

            <RatingStars
              value={ratings[section.key as keyof typeof ratings]}
              onChange={(value) =>
                handleRatingChange(section.key, value)
              }
            />
          </div>
        ))}
      </section>

      {/* COMMENT */}
      <section className="space-y-2">
        <h3 className="font-semibold text-gray-800">
          Deja un comentario
        </h3>

        <textarea
          className=" text-gray-600 w-full p-4 border rounded-xl resize-none"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu experiencia..."
        />
      </section>

      {/* SUBMIT */}
      <div className="flex justify-start">
        <Button onClick={handleSubmit}>
          Enviar
        </Button>
      </div>
    </div>
  );
}