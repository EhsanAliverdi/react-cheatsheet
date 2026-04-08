// src/components/GlobalSearch.tsx
import { useMemo, useState } from "react";
import type { CheatItem, CheatStack } from "../core/cheatsheet-types";

type GlobalSearchProps = {
  stacks: CheatStack[];
  onNavigateToItem: (stackId: string, sectionId: string, item: CheatItem) => void;
};

type SearchEntry = {
  stackId: string;
  stackName: string;
  sectionId: string;
  sectionName: string;
  itemId: string;
  itemName: string;
  description?: string;
  searchable: string;
  item: CheatItem;
};

export function GlobalSearch({ stacks, onNavigateToItem }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const index = useMemo<SearchEntry[]>(() => {
    return stacks.flatMap((stack) =>
      stack.sections.flatMap((section) =>
        section.items.map((item) => ({
          stackId: stack.id,
          stackName: stack.name,
          sectionId: section.id,
          sectionName: section.name,
          itemId: item.id,
          itemName: item.name,
          description: item.summary ?? "",
          searchable: JSON.stringify({ stack: stack.name, section: section.name, item }).toLowerCase(),
          item,
        }))
      )
    );
  }, [stacks]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index.filter((e) => e.searchable.includes(q)).slice(0, 12);
  }, [index, query]);

  const handleSelect = (entry: SearchEntry) => {
    setQuery("");
    onNavigateToItem(entry.stackId, entry.sectionId, entry.item);
  };

  const showResults = isFocused && query.trim().length > 0 && results.length > 0;

  return (
    <div className="relative w-full min-w-[220px] sm:w-80">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        placeholder="Search all topics"
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 shadow-sm outline-none placeholder:text-slate-400"
      />

      {showResults && (
        <div className="absolute z-20 mt-1 max-h-80 w-full overflow-auto rounded-xl border border-slate-200 bg-white text-xs shadow-lg">
          {results.map((entry) => (
            <button
              key={`${entry.stackId}-${entry.sectionId}-${entry.itemId}`}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(entry);
              }}
              className="block w-full px-3 py-2.5 text-left hover:bg-slate-50"
            >
              <div className="font-semibold text-slate-900">{entry.itemName}</div>
              <div className="mt-0.5 flex items-center gap-1.5 text-[11px]">
                <span className="font-medium text-sky-600">{entry.stackName}</span>
                <span className="text-slate-300"></span>
                <span className="text-slate-500">{entry.sectionName}</span>
              </div>
              {entry.description && (
                <div className="mt-0.5 line-clamp-1 text-[11px] text-slate-400">
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