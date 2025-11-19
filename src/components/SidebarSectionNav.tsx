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
  onSelectSection,
}: SidebarSectionNavProps) {
  return (
    <aside className="w-full md:w-60 md:shrink-0">
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm">
        <h2 className="mb-2 px-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Sections
        </h2>

        {/* mobile: horizontal scroll · md+: vertical list */}
        <nav className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:gap-1 md:overflow-visible">
          {sections.map((section) => {
            const isActive = section.id === selectedSectionId;
            const count = section.items.length;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelectSection(section.id)}
                className={[
                  "flex min-w-[9rem] flex-1 items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition md:min-w-0",
                  isActive
                    ? "border border-sky-200 bg-sky-50 text-sky-700"
                    : "border border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                <span className="flex flex-col">
                  <span className="font-medium truncate">{section.name}</span>
                  {section.description && (
                    <span className="hidden text-[0.65rem] text-slate-500 md:inline">
                      {section.description}
                    </span>
                  )}
                </span>
                <span
                  className={[
                    "ml-2 inline-flex h-5 min-w-[1.5rem] items-center justify-center rounded-full border px-1 text-[0.65rem]",
                    isActive
                      ? "border-sky-200 bg-white text-sky-700"
                      : "border-slate-200 bg-slate-50 text-slate-500",
                  ].join(" ")}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
