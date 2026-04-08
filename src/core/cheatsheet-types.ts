// src/core/cheatsheet-types.ts

/**
 * A single code example inside a CheatItem.
 * Set `language` to control syntax highlighting and live-preview behaviour:
 *   - "tsx" | "javascript" | undefined → rendered with react-live (interactive)
 *   - "java" | "python" | "sql" | etc. → rendered as static syntax-highlighted block
 */
export type CheatExample = {
  id: string;
  title: string;
  code: string;
  description?: string;
  language?: string; // e.g. "tsx", "javascript", "java", "python", "sql"
};

export type CheatItemLevel = "beginner" | "intermediate" | "advanced";

export type CheatItem = {
  id: string;
  name: string;     // e.g. "useState", "Array.map()", "ArrayList"
  label?: string;   // e.g. "State Hook", "Higher-Order Function"
  summary: string;
  level: CheatItemLevel;
  tags: string[];
  keyPoints: string[];
  examples: CheatExample[];
};

export type CheatSection = {
  id: string;       // e.g. "react-hooks-core", "js-async", "java-oop"
  slug: string;
  name: string;
  shortName: string;
  description?: string;
  items: CheatItem[];
};

/**
 * Top-level grouping for a whole technology / language.
 * Each stack contains one or more CheatSections.
 * Add a new stack by creating a folder under src/data/stacks/<id>/ and
 * registering it in src/data/stacks/index.ts.
 */
export type CheatStack = {
  id: string;        // e.g. "react", "javascript", "java"
  slug: string;
  name: string;      // e.g. "React", "JavaScript", "Java"
  shortName: string; // abbreviated label used in tight spaces
  description?: string;
  /** Tailwind color key used for accent styles in StackSelector */
  color: "sky" | "amber" | "orange" | "emerald" | "violet" | "rose" | "teal";
  sections: CheatSection[];
};
