// src/components/feedback/RatingStars.tsx
// Este es un componente de estrellas de calificación reutilizable.
// Acepta un valor numérico para la calificación, un valor máximo opcional,
// una función onChange para manejar cambios en la calificación, y una 
// propiedad readonly para hacer que las estrellas sean solo de lectura.

interface RatingStarsProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

// Este componente muestra una serie de estrellas que representan 
// la calificación.
export default function RatingStars({ value, max = 5, onChange, readonly = false }: RatingStarsProps) {
  const handleClick = (index: number) => {
    if (!readonly && onChange) {
      onChange(index + 1);
    }
  };
  
 return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, index) => {
        const filled = index < value;

        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(index)}
            disabled={readonly}
            className={`transition ${readonly ? "cursor-default" : "cursor-pointer hover:scale-110"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 ${filled ? "fill-yellow-400" : "fill-gray-300"}`}
            >
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/>
            </svg>
          </button>
        );
      })}
    </div>
  );
}