//src/layout/(student)/layout.tsx

import DashboardLayout from "@/components/layout/DashboardLayout";
import type { SidebarItem } from "@/components/layout/Sidebar";

// Aqui se define el sidebar para los estudiantes, con 
// las rutas correspondientes a cada sección de la 
// aplicación para ellos. Cada objeto en el array representa 
// un item del sidebar,
const studentSidebar: SidebarItem[] = [
  { label: "Home", href: "/home_student", icon: "/recursos_visuales/cosas/iconos/Home.svg" },
  { label: "Buscar Tutor", href: "/search_student", icon: "/recursos_visuales/cosas/iconos/search.svg" },
  { label: "Tus Tutores", href: "/tutors_student", icon: "/recursos_visuales/cosas/iconos/profile.svg" },
  { label: "Califica a tu Tutor", href: "/rate_student", icon: "/recursos_visuales/cosas/iconos/estrella_sidebar.svg" },
  { label: "Mensajes", href: "/messaging_student", icon: "/recursos_visuales/cosas/iconos/burbujasTexto.svg" },
  { label: "Sobre mi", href: "/profile_student", icon: "/recursos_visuales/cosas/iconos/user_profile.svg" },
  { label: "Archivos", href: "/files_student", icon: "/recursos_visuales/cosas/iconos/files.svg" },
];

// El layout para los estudiantes, que envuelve el contenido de cada página
// con el DashboardLayout y le pasa el sidebar específico para ellos. 
// El children representa el contenido de cada página que se renderizará
// dentro del layout.
export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout sidebarItems={studentSidebar}>
      {children}
    </DashboardLayout>
  );
}