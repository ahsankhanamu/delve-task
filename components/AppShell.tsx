"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_SHELL_MENU } from "@/lib/data";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";

const SidebarIcon = (props: any) => {
  const { isOpen, ...rest } = props;
  if (isOpen) {
    return <GoSidebarCollapse {...rest} />;
  }
  return <GoSidebarExpand {...rest} />;
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Ensure the component is only using the router after mounting on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatically close sidebar on mobile screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!mounted) {
    // Return null or a loading state until the component is mounted
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <nav
        className={`fixed z-20 h-screen transform bg-slate-800 p-4 pt-8 text-white transition-transform duration-300 md:relative ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } w-64`}
      >
        <ul className="space-y-4">
          {APP_SHELL_MENU.map(({ title, slug }, index) => {
            const isActive = pathname === slug;
            return (
              <li key={`title-${index}`}>
                <Link
                  href={slug}
                  className={`block rounded p-2 transition duration-300 ${
                    isActive
                      ? "bg-slate-700 text-white"
                      : "text-gray-400 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                  }`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Toggle Button */}
      <button
        className={`absolute left-0 top-0 z-20 m-4 block rounded bg-slate-700 p-2 text-white transition-all duration-300 focus:outline-none md:hidden ${isSidebarOpen ? "left-60" : ""}`}
        onClick={toggleSidebar}
      >
        <SidebarIcon isOpen={isSidebarOpen} />
      </button>

      {/* Main Content Area */}
      <main className="relative flex-1 overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-white">
        {children}
      </main>
    </div>
  );
}
