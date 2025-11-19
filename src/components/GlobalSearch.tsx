// src/components/GlobalSearch.tsx
import { useMemo, useState } from "react";
import type { CheatItem, CheatSection } from "../core/cheatsheet-types";

type GlobalSearchProps = {
  sections: CheatSection[];
  onNavigateToItem: (sectionId: string, item: CheatItem) => void;
};

type SearchEntry = {
  sectionId: string;
  sectionName: string;
  itemId: string;
  itemName: string;
  description?: string;
  searchable: string;
  item: CheatItem;
};

export function GlobalSearch({
  sections,
  onNavigateToItem,
}: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Build a simple search index: everything about a topic as one big string
  const index = useMemo<SearchEntry[]>(() => {
    return sections.flatMap((section) =>
      section.items.map((item) => {
        const raw = {
          sectionId: section.id,
          sectionName: section.name,
          sectionDescription: section.description,
          item,
        };

        return {
          sectionId: section.id,
          sectionName: section.name,
          itemId: item.id,
          itemName: item.name,
          description: item.summary ?? section.description ?? "",
          searchable: JSON.stringify(raw).toLowerCase(), // 👈 “anything inside the topic”
          item,
        };
      })
    );
  }, [sections]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index.filter((entry) => entry.searchable.includes(q)).slice(0, 10);
  }, [index, query]);

  const handleSelect = (entry: SearchEntry) => {
    setQuery("");
    onNavigateToItem(entry.sectionId, entry.item);
  };

  const showResults =
    isFocused && query.trim().length > 0 && results.length > 0;

  return (
    <div className="relative w-full min-w-[220px] sm:w-80">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          // allow click on result before closing
          setTimeout(() => setIsFocused(false), 150);
        }}
        placeholder="Search all topics…"
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 shadow-sm outline-none placeholder:text-slate-400"
      />

      {showResults && (
        <div className="absolute z-20 mt-1 max-h-80 w-full overflow-auto rounded-md border border-slate-200 bg-white text-xs shadow-lg">
          {results.map((entry) => (
            <button
              key={`${entry.sectionId}-${entry.itemId}`}
              type="button"
              onMouseDown={(e) => {
                // prevent blur from firing before select
                e.preventDefault();
                handleSelect(entry);
              }}
              className="block w-full px-3 py-2 text-left hover:bg-slate-50"
            >
              <div className="font-semibold text-slate-900">
                {entry.itemName}
              </div>
              <div className="text-[11px] text-sky-700">
                {entry.sectionName}
              </div>
              {entry.description && (
                <div className="mt-0.5 text-[11px] text-slate-500">
                  {entry.description}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
