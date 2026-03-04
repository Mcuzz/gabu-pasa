"use client";
// Sidebar.tsx
// Esta clase se encarga de renderizar la barra lateral 
// del dashboard, mostrando los enlaces de navegación 
// para el estudiante.

import Link from "next/link";
import {useState} from "react";

// Definimos la interfaz para los elementos de la barra lateral
export interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// Componente Sidebar que recibe una lista de elementos y los renderiza
export default function Sidebar({ items }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`
        h-screen bg-gray-900 text-white p-4
        transition-all duration-300
        ${expanded ? "w-64" : "w-20"}
      `}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="mb-6 p-2 rounded bg-gray-800 hover:bg-gray-700"
      >
        ☰
      </button>

      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition"
          >
            <span className="text-xl">{item.icon}</span>

            {expanded && (
              <span className="whitespace-nowrap">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

// Interfaz para las props del componente Sidebar
interface SidebarProps {
  items: SidebarItem[];
}
