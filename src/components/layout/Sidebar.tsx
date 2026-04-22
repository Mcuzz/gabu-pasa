"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface SidebarItem {
  label: string;
  href: string;
  icon: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <aside
        className={`
          w-full border-b border-[color:var(--border)] px-4 py-4 backdrop-blur-xl
          transition-all duration-300 lg:self-stretch lg:border-b-0 lg:border-r lg:px-5 lg:py-6
          ${expanded ? "lg:w-72" : "lg:w-24"}
        `}
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 44, 55, 0.9) 0%, rgba(34, 69, 82, 0.92) 58%, rgba(54, 93, 80, 0.94) 100%)",
        }}
      >
        <div className="flex items-center justify-between gap-3 lg:hidden">
          <Brand expanded />

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-2xl border border-white/12 bg-white/8 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/14"
            aria-label="Abrir navegacion"
          >
            Menu
          </button>
        </div>

        <div className="hidden h-full lg:flex lg:flex-col">
          <div className="mb-6 flex items-center justify-between gap-3">
            <Brand expanded={expanded} />

            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="rounded-2xl border border-white/12 bg-white/8 p-2 text-xl text-white transition hover:bg-white/14"
              aria-label={expanded ? "Colapsar sidebar" : "Expandir sidebar"}
            >
              {expanded ? "←" : "→"}
            </button>
          </div>

          {expanded && (
            <div className="mb-5 rounded-3xl border border-white/10 bg-white/8 p-4 text-sm text-white/74">
              <p className="font-semibold text-white">Navegacion principal</p>
              <p className="mt-1 leading-relaxed">
                Accede rapido a paneles, mensajes y herramientas de tutoria.
              </p>
            </div>
          )}

          <nav className="flex flex-1 flex-col space-y-2">
            {items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <SidebarLink
                  key={item.href}
                  item={item}
                  isActive={isActive}
                  expanded={expanded}
                />
              );
            })}
          </nav>
        </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-[rgba(8,18,24,0.52)] backdrop-blur-sm"
            aria-label="Cerrar navegacion"
            onClick={() => setMobileOpen(false)}
          />

          <div
            className="relative z-10 h-full w-[88%] max-w-sm px-4 py-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(20, 44, 55, 0.98) 0%, rgba(34, 69, 82, 0.98) 58%, rgba(54, 93, 80, 0.98) 100%)",
            }}
          >
            <div className="flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between gap-3">
                <Brand expanded />

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-white/12 bg-white/8 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/14"
                  aria-label="Cerrar navegacion"
                >
                  Cerrar
                </button>
              </div>

              <div className="mb-5 rounded-3xl border border-white/10 bg-white/8 p-4 text-sm text-white/74">
                <p className="font-semibold text-white">Navegacion principal</p>
                <p className="mt-1 leading-relaxed">
                  Elige una seccion para continuar con tu flujo de trabajo.
                </p>
              </div>

              <nav className="app-scrollbar flex flex-1 flex-col space-y-2 overflow-y-auto pr-1">
                {items.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <SidebarLink
                      key={item.href}
                      item={item}
                      isActive={isActive}
                      expanded
                      onNavigate={() => setMobileOpen(false)}
                    />
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Brand({ expanded }: { expanded: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${expanded ? "" : "justify-center"}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 text-lg font-bold text-white shadow-lg shadow-black/15">
        GP
      </div>

      {expanded && (
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Plataforma
          </p>
          <h2 className="text-lg font-semibold text-white">Gabu Pasa</h2>
        </div>
      )}
    </div>
  );
}

function SidebarLink({
  item,
  isActive,
  expanded,
  onNavigate,
}: {
  item: SidebarItem;
  isActive: boolean;
  expanded: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={`
        flex min-h-[72px] items-center gap-3 rounded-2xl border px-3 py-3 transition duration-200
        ${
          isActive
            ? "border-white/18 bg-white/16 text-white shadow-lg shadow-black/10"
            : "border-transparent bg-white/6 text-white hover:border-white/12 hover:bg-white/12"
        }
        ${expanded ? "" : "justify-center px-2"}
      `}
    >
      <div
        className={`
          flex h-11 w-11 items-center justify-center rounded-2xl
          ${isActive ? "bg-white/12" : "bg-white/10"}
        `}
      >
        <Image
          src={item.icon}
          alt={item.label}
          width={22}
          height={22}
          className="brightness-0 invert"
        />
      </div>

      {expanded && (
        <div className="min-w-0">
          <span className="block whitespace-nowrap text-sm font-semibold">
            {item.label}
          </span>
          <span className="block text-xs text-white/70">
            {isActive ? "Vista actual" : "Abrir seccion"}
          </span>
        </div>
      )}
    </Link>
  );
}
