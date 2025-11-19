// src/core/search.ts
import type { CheatItem, CheatSection } from "./cheatsheet-types";

function itemMatchesQuery(item: CheatItem, q: string): boolean {
  const text = q.toLowerCase();

  const fields: string[] = [
    item.name,
    item.label ?? "",
    item.summary ?? "",
    ...(item.tags ?? []),
    ...(item.keyPoints ?? []),
  ];

  return fields.some((f) => f.toLowerCase().includes(text));
}

/**
 * Returns a new array of sections where each section contains
 * only items matching the query. Sections with no matches are removed.
 */
export function filterSectionsByQuery(
  sections: CheatSection[],
  query: string
): CheatSection[] {
  const q = query.trim().toLowerCase();
  if (!q) return sections;

  return sections
    .map((section) => {
      const filteredItems = section.items.filter((item) =>
        itemMatchesQuery(item, q)
      );

      if (filteredItems.length === 0) {
        return null;
      }

      return {
        ...section,
        items: filteredItems,
      };
    })
    .filter((s): s is CheatSection => s !== null);
}
