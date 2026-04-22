import Sidebar, { SidebarItem } from "./Sidebar";

interface DashboardLayoutProps {
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
}

export default function DashboardLayout({
  sidebarItems,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="app-shell lg:flex lg:items-stretch">
      <Sidebar items={sidebarItems} />

      <main className="app-main flex-1">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24 xl:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
