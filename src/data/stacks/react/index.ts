// src/data/stacks/react/index.ts
import type { CheatStack } from "../../../core/cheatsheet-types";
import { reactCoreConceptsSection } from "./core-concepts";
import { reactHooksCoreSection } from "./hooks-core";

export const reactStack: CheatStack = {
  id: "react",
  slug: "react",
  name: "React",
  shortName: "React",
  description: "UI library for building component-based web applications.",
  color: "sky",
  sections: [
    reactCoreConceptsSection,
    reactHooksCoreSection,
    // reactPatternsSection,
    // reactRoutingSection,
    // reactContextSection,
  ],
};
