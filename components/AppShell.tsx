import { APP_SHELL_MENU } from "@/lib/data";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="w-64 bg-slate-800 p-4 text-white">
        <ul className="space-y-4">
          {APP_SHELL_MENU.map(({ title, slug }, index) => {
            return (
              <li key={`title-${index}`}>
                <a href={slug} className="block rounded p-2 hover:bg-slate-700">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="relative flex-1 overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
        {children}
      </main>
    </div>
  );
}
