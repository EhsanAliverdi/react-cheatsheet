// src/data/stacks/java/index.ts
import type { CheatStack } from "../../../core/cheatsheet-types";
import { javaCoreSection } from "./core";
import { javaOopSection } from "./oop";

export const javaStack: CheatStack = {
  id: "java",
  slug: "java",
  name: "Java",
  shortName: "Java",
  description: "Strongly typed, object-oriented language widely used in backend and enterprise systems.",
  color: "orange",
  sections: [
    javaCoreSection,
    javaOopSection,
    // javaStreamsSection,
    // javaSpringBootSection,
  ],
};
