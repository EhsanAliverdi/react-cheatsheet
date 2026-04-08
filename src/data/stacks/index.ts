// src/data/stacks/index.ts
// ─────────────────────────────────────────────────────────────────────────────
// Registry of all tech stacks.
// To add a new stack:
//   1. Create a folder: src/data/stacks/<id>/
//   2. Add section data files inside it.
//   3. Create an index.ts that exports a `CheatStack` object.
//   4. Import and add it to `allStacks` below.
// ─────────────────────────────────────────────────────────────────────────────
import type { CheatStack } from "../../core/cheatsheet-types";
import { javascriptStack } from "./javascript";
import { javaStack } from "./java";
import { reactStack } from "./react";

export const allStacks: CheatStack[] = [
  reactStack,
  javascriptStack,
  javaStack,
  // typescriptStack,
  // nodeStack,
  // pythonStack,
  // sqlStack,
  // dockerStack,
  // gitStack,
];
