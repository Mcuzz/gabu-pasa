// src/components/filters/FilterPanel.tsx

interface FilterOption {
  label: string;
  value: string;
}

interface FilterPanelProps {
  filters: {
    title: string;
    options: FilterOption[];
  }[];
  onChange: (filterKey: string, value: string) => void;
}

export default function FilterPanel({ filters, onChange }: FilterPanelProps) {
  return (
    <div className="flex flex-col gap-4">
      {filters.map((filter) => (
        <div key={filter.title} className="flex flex-col gap-1">

          <label className="text-sm font-medium text-gray-700">
            {filter.title}
          </label>

          <select
            onChange={(e) => onChange(filter.title, e.target.value)}
            className="
              w-full
              rounded-lg
              border border-gray-300
              bg-white
              px-3 py-2
              text-sm
              text-gray-700
              shadow-sm
              transition
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
            "
          >
            <option value="">Selecciona una opción</option>

            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}

          </select>

        </div>
      ))}
    </div>
  );
}