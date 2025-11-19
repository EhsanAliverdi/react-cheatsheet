// src/core/cheatsheet-types.ts

export type CheatExample = {
  id: string;
  title: string;
  code: string;
  description?: string;
};

export type CheatItemLevel = "beginner" | "intermediate" | "advanced";

export type CheatItem = {
  id: string;
  name: string;         // e.g. "useState", "useEffect", "<Component />"
  label?: string;       // e.g. "State Hook", "Function Component"
  summary: string;
  level: CheatItemLevel;
  tags: string[];
  keyPoints: string[];
  examples: CheatExample[];
};

export type CheatSection = {
  id: string;           // e.g. "react-hooks-core"
  slug: string;         // e.g. "hooks-core"
  name: string;         // e.g. "Hooks · Core"
  shortName: string;    // e.g. "Hooks"
  description?: string;
  items: CheatItem[];
};
