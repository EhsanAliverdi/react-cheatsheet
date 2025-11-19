// src/components/SidebarSectionNav.tsx
import type { CheatSection } from "../core/cheatsheet-types";

type SidebarSectionNavProps = {
  sections: CheatSection[];
  selectedSectionId: string;
  onSelectSection: (id: string) => void;
};

export function SidebarSectionNav({
  sections,
  selectedSectionId,
  onSelectSection
}: SidebarSectionNavProps) {
  return (
    <aside className="w-56 shrink-0 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm">
      <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        Sections
      </h2>
      <nav className="space-y-1">
        {sections.map((section) => {
          const isActive = section.id === selectedSectionId;
          const count = section.items.length;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelectSection(section.id)}
              className={[
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition",
                isActive
                  ? "bg-sky-50 text-sky-700 border border-sky-200"
                  : "text-slate-700 hover:bg-slate-50"
              ].join(" ")}
            >
              <span className="flex flex-col">
                <span className="font-medium">{section.name}</span>
                {section.description && (
                  <span className="text-[0.65rem] text-slate-500">
                    {section.description}
                  </span>
                )}
              </span>
              <span
                className={[
                  "ml-2 inline-flex h-5 min-w-[1.5rem] items-center justify-center rounded-full border px-1 text-[0.65rem]",
                  isActive
                    ? "border-sky-200 bg-white text-sky-700"
                    : "border-slate-200 bg-slate-50 text-slate-500"
                ].join(" ")}
              >
                {count}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
