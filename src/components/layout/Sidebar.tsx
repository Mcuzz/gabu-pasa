"use client";
// Sidebar.tsx
// Esta clase se encarga de renderizar la barra lateral
// del dashboard, mostrando los enlaces de navegación
// para el estudiante.

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Definimos la interfaz para los elementos de la barra lateral
export interface SidebarItem {
  label: string;
  href: string;
  icon: string;
}

// Componente Sidebar que recibe una lista de elementos y los renderiza
export default function Sidebar({ items }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <aside
      className={`
        h-screen text-white p-4
        transition-all duration-300
        bg-blue-800
        ${expanded ? "w-64" : "w-20"}
      `}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center mb-20 p-2 rounded bg-gray-800 hover:bg-gray-700"
      >
        ☰
      </button>
      

      <nav className="space-y-2">
        {items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 p-2 rounded transition
                ${isActive ? "bg-amber-300 font-semibold" : "hover:bg-green-200"}
              `}
            >
              <Image src={item.icon} alt={item.label} width={30} height={30} />

              {expanded && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

// Interfaz para las props del componente Sidebar
interface SidebarProps {
  items: SidebarItem[];
}
