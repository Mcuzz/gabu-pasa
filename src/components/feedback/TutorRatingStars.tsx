"use client";

import { useState } from "react";
import RatingStars from "@/components/feedback/RatingStars";

type Metric = {
  id: string;
  name: string;
  rating: number;
  image: string;
  description: string;
};

const metrics: Metric[] = [
  {
    id: "clarity",
    name: "Claridad al explicar",
    rating: 4,
    image: "/images/metrics/clarity.jpg",
    description: "El alumnado propuso esta calificación para su desempeño en la claridad con la que explica los temas.",
  },
  {
    id: "patience",
    name: "Paciencia",
    rating: 5,
    image: "/images/metrics/patience.jpg",
    description: "El alumnado propuso esta calificación para su desempeño en la paciencia al resolver dudas.",
  },
  {
    id: "knowledge",
    name: "Dominio del tema",
    rating: 4,
    image: "/images/metrics/knowledge.jpg",
    description: "El alumnado propuso esta calificación para su desempeño en el dominio del contenido académico.",
  },
  {
    id: "helpfulness",
    name: "Utilidad de la sesión",
    rating: 5,
    image: "/images/metrics/helpfulness.jpg",
    description: "El alumnado propuso esta calificación para la utilidad general de sus sesiones de tutoría.",
  },
];

export default function TutorRatingStars() {
  const [activeMetric, setActiveMetric] = useState(metrics[0]);

  return (
    <div className="flex gap-4">

      {/* CARD */}
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow overflow-hidden">

        {/* Imagen mitad superior */}
        <div
          className="h-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${activeMetric.image})` }}
        />

        {/* Contenido */}
        <div className="p-6 space-y-3">

          <h3 className="text-lg font-semibold text-gray-800">
            {activeMetric.name}
          </h3>

          <RatingStars value={activeMetric.rating} readonly />

          <p className="text-sm text-gray-500 leading-relaxed">
            {activeMetric.description}
          </p>

        </div>
      </div>

      {/* BOTONES */}
      <div className="flex flex-col gap-2">

        {metrics.map((metric) => {
          const active = metric.id === activeMetric.id;

          return (
            <button
              key={metric.id}
              onClick={() => setActiveMetric(metric)}
              className={`
                w-10 h-10 rounded-lg font-semibold
                transition
                ${
                  active
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }
              `}
            >
              ★
            </button>
          );
        })}

      </div>

    </div>
  );
}