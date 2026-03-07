"use client";

import { useState } from "react";
import { tutorsMock } from "@/mocks/tutors.mock";
import RatingStars from "@/components/feedback/RatingStars";
import Button from "@/components/ui/Button";

export default function RateTutorForm() {

  const [selectedTutor, setSelectedTutor] = useState("");
  const [comment, setComment] = useState("");

  const [ratings, setRatings] = useState({
    puntualidad: 0,
    materiales: 0,
    conocimiento: 0,
    comunicacion: 0,
  });

  const ratingSections = [
    { key: "puntualidad", label: "Puntualidad" },
    { key: "materiales", label: "Materiales compartidos" },
    { key: "conocimiento", label: "Conocimiento" },
    { key: "comunicacion", label: "Comunicación" },
  ];

  const handleRatingChange = (key: string, value: number) => {
    setRatings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = () => {
    const allRated = Object.values(ratings).every(r => r > 0);

    if (!selectedTutor) {
      alert("Debes seleccionar un tutor.");
      return;
    }

    if (!allRated) {
      alert("Debes calificar todas las categorías.");
      return;
    }

    const payload = {
      tutorId: selectedTutor,
      ratings,
      comment,
      createdAt: new Date(),
    };

    console.log("Review enviada:", payload);
  };

  return (
    <div className="space-y-8">

      <section className="bg-white p-4 rounded-xl shadow text-gray-500">
        <select
          className="w-full p-3 border rounded-lg"
          value={selectedTutor}
          onChange={(e) => setSelectedTutor(e.target.value)}
        >
          <option value="">Escoge tutor</option>
          {tutorsMock.map((tutor) => (
            <option key={tutor.id} value={tutor.id}>
              {tutor.name}
            </option>
          ))}
        </select>
      </section>

      <section className="grid grid-cols-2 gap-6">
        {ratingSections.map(section => (
          <div
            key={section.key}
            className="bg-blue-100 p-6 rounded-xl space-y-4"
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

      <section className="space-y-2">
        <h3 className="font-semibold text-gray-800">
          Deja un comentario
        </h3>

        <textarea
          className="text-gray-600 w-full p-4 border rounded-xl resize-none"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu experiencia..."
        />
      </section>

      <div className="flex">
        <Button onClick={handleSubmit}>
          Enviar
        </Button>
      </div>

    </div>
  );
}