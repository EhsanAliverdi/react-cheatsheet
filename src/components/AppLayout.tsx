// src/components/AppLayout.tsx
import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
              R
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-wide text-slate-900">
                React Cheat Sheet
              </h1>
              <p className="text-xs text-slate-500">
                A compact reference for React hooks, components, routing, and more.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600">
              React · TypeScript 
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 lg:py-8">{children}</div>
    </div>
  );
}
