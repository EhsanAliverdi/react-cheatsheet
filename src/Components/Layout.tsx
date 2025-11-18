// src/components/Layout.tsx
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-500/40">
              RH
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-wide text-slate-100">
                React Hooks Cheat Sheet
              </h1>
              <p className="text-xs text-slate-400">
                Quick reference for core hooks & patterns
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">
              React playground
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 lg:py-8">
        {children}
      </main>
    </div>
  );
}
