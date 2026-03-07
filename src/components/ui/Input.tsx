// src/components/ui/Input.tsx
// Este es un componente de input reutilizable que acepta
// un label y un mensaje de error opcional. Se extiende de las
// propiedades estándar de un input HTML, lo que permite usar
// cualquier atributo válido de un input.


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">

      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          rounded-lg
          border
          px-3
          py-2
          text-sm
          text-gray-600
          shadow-sm
          transition
          focus:outline-none
          focus:ring-2
          bg-white
          ${error
            ? "border-red-400 focus:ring-red-400"
            : "border-gray-300 focus:ring-blue-500"}
          ${className}
        `}
      />

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}