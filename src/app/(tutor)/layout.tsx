//src/layout/(tutor)/layout.tsx

import DashboardLayout from "@/components/layout/DashboardLayout";
import { SidebarItem } from "@/components/layout/Sidebar";

// ojito, nomas copie, pegue y edite el del estudiante.
// Aqui se define el sidebar para los el tutor OJO QUE ES UN ARREGLO, 
// con las rutas correspondientes a cada sección de la 
// aplicación para ellos. Cada objeto en el array representa 
// un item del sidebar,

const tutorSidebar: SidebarItem[] = [
  { label: "Home", href: "/home", icon: "/recursos_visuales/cosas/iconos/Home.svg" },
  { label: "Video llamada", href: "/videocall", icon: "/recursos_visuales/cosas/iconos/videollamada.svg" },
  { label: "Ingresar Archivos", href: "/files", icon: "/recursos_visuales/cosas/iconos/cosadeArchivos.svg" },
  { label: "Buscar a tus alumnos", href: "/students", icon: "/recursos_visuales/cosas/iconos/search.svg" },
  { label: "Mensajes", href: "/messaging", icon: "/recursos_visuales/cosas/iconos/burbujasTexto.svg" },
  { label: "Sobre mi", href: "/profile", icon: "/recursos_visuales/cosas/iconos/user_profile.svg" },
  { label: "Horarios Disponibles", href: "/schedule", icon: "/recursos_visuales/cosas/iconos/reloj.svg" },
  { label: "Califica alumno", href: "/rate", icon: "/recursos_visuales/cosas/iconos/estrella_sidebar.svg" }
];
// El layout para el profe, que envuelve el contenido de cada página
// con el DashboardLayout y le pasa el sidebar específico para ellos. 
// El children representa el contenido de cada página que se renderizará
// dentro del layout.
export default function TutorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardLayout sidebarItems={tutorSidebar}>
            {children}
        </DashboardLayout>
        
    );
}