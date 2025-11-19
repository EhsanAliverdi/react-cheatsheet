// src/components/AppLayout.tsx
import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
  headerSearch?: ReactNode;
};

export function AppLayout({ children, headerSearch }: AppLayoutProps) {
  const version =
    typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "0.0.0";
  const buildTimeIso =
    typeof __BUILD_TIME__ !== "undefined"
      ? __BUILD_TIME__
      : new Date().toISOString();

  const buildDate = new Date(buildTimeIso);
  const buildLabel = buildDate.toLocaleString();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo + title */}
          <div className="flex items-start gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
              R
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-wide text-slate-900">
                React Cheat Sheet
              </h1>
              <p className="text-[11px] text-slate-500">
                A compact reference for React hooks, components, routing & more.
              </p>
            </div>
          </div>

          {/* Tech pill + search */}
          <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end">
            <span className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-600 sm:inline">
              React · TypeScript
            </span>
            {headerSearch && (
              <div className="w-full sm:w-80">{headerSearch}</div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-6 lg:py-8">{children}</div>
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>React Cheat Sheet</span>
          <span>
            v{version} · Build {buildLabel}
          </span>
        </div>
      </footer>
    </div>
  );
}
