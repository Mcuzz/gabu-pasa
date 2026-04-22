"use client";

export default function RecommendationPanel() {
  return (
    <div className="app-card p-6 space-y-6 max-w-full">
      <div className="flex items-center gap-6">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-[color:var(--primary)]">
          <div className="h-16 w-4 rounded bg-[color:var(--secondary)]" />
        </div>

        <p className="text-sm app-muted">
          Selecciona las horas que veas recomendables.
        </p>
      </div>

      <div className="space-y-3">
        <Legend label="Matutino" color="bg-[color:var(--primary)]" />
        <Legend label="Vespertino" color="bg-[color:var(--secondary)]" />
        <Legend label="Cualquier hora" color="bg-[color:var(--accent)]" />
      </div>
    </div>
  );
}

function Legend({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-28 text-right text-sm app-muted">{label}</span>
      <div className={`h-4 flex-1 rounded-lg ${color}`} />
    </div>
  );
}
