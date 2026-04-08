// src/data/stacks/javascript/index.ts
import type { CheatStack } from "../../../core/cheatsheet-types";
import { jsAsyncSection } from "./async";
import { jsFundamentalsSection } from "./fundamentals";

export const javascriptStack: CheatStack = {
  id: "javascript",
  slug: "javascript",
  name: "JavaScript",
  shortName: "JS",
  description: "The language of the web — core syntax, async patterns, and modern ES6+ features.",
  color: "amber",
  sections: [
    jsFundamentalsSection,
    jsAsyncSection,
    // jsPrototypesSection,
    // jsTypesAndCoercionSection,
  ],
};
