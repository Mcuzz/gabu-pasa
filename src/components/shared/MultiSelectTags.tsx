interface Props {
  label: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}

export default function MultiSelectTags({
  label,
  options,
  selected,
  onChange,
}: Props) {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(o => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="mb-6">
      <p className="font-semibold mb-2">{label}</p>

      <div className="flex flex-wrap gap-2">
        {options.map(option => {
          const isActive = selected.includes(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleOption(option)}
              className={`px-3 py-1 rounded-full border transition ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}