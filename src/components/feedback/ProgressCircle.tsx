// src/components/feedback/ProgressCircle.tsx
// Este es un componente de círculo de progreso reutilizable.
// Acepta un valor numérico para el progreso, un valor máximo, 
// y un tamaño opcional.

interface ProgressCircleProps {
  value: number;
  max: number;
  size?: number;
}

export default function ProgressCircle({ value, max, size = 120 }: ProgressCircleProps) {
  const radius = (size - 14) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = value / max;
  const offset = circumference - progress * circumference;

  const percentage = Math.round(progress * 100);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>

      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      {/* círculo base */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb"
        strokeWidth="10"
        fill="none"
      />

      {/* progreso */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#progressGradient)"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          transition: "stroke-dashoffset 0.6s ease"
        }}
      />

      {/* porcentaje */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="1.6em"
        fontWeight="bold"
        fill="#1f2937"
      >
        {percentage}%
      </text>

    </svg>
  );
}