// src/data/sections/index.ts
import type { CheatSection } from "../../core/cheatsheet-types";
import { reactCoreConceptsSection } from "./react-core-concepts";
import { reactHooksCoreSection } from "./react-hooks-core";

// Later you’ll add:
// import { reactComponentsBasicsSection } from "./react-components-basics";
// import { reactRoutingSection } from "./react-routing";
// ...

export const allSections: CheatSection[] = [
  reactCoreConceptsSection,
  reactHooksCoreSection
  // , reactComponentsBasicsSection,
  // , reactRoutingSection,
  // ...
];
