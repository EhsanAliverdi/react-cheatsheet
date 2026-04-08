# Full Stack Engineer Cheat Sheet

An interactive, browser-based quick reference for full-stack developers. Browse multiple technology stacks, read concise key-point cards, and open a modal with a **live editable code playground** (React/JS) or a **syntax-highlighted static block** (Java and other compiled languages).

**Live app  [dev.react.shimmerapp.com](https://dev.react.shimmerapp.com)**

---

## Features

- **Multi-stack navigation**  switch between React, JavaScript, Java and future stacks with colour-coded tabs.
- **Section sidebar**  lists all sections within the selected stack; collapses to a horizontal scroll strip on mobile.
- **Cheat cards**  name, difficulty level (Beginner / Intermediate / Advanced), summary, bullet-point key facts, and tags.
- **Live code modal (React / JS)**  split-pane editor via `react-live`: left = live preview, right = editable source.
- **Static code modal (Java / compiled languages)**  syntax-highlighted, line-numbered block via `react-syntax-highlighter`.
- **Global search**  searches across every stack, section, and item; shows stack  section breadcrumb in results.
- **Build metadata**  version and build timestamp injected at compile time, shown in the footer.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | **React 19** |
| Language | **TypeScript 5.9** |
| Build tool | **Vite 7** |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite` plugin) |
| Live code editor | **react-live 4** (`LiveProvider`, `LiveEditor`, `LivePreview`) |
| Syntax highlighting | **react-syntax-highlighter 16** (Prism / VS Code Dark+) |
| Linting | **ESLint 9** with `react-hooks` and `react-refresh` plugins |
| Container | **Docker**  multi-stage build |
| Static server | **Nginx 1.27 Alpine** |

---

## Project Structure

```
src/
 core/
    cheatsheet-types.ts     # Shared types: CheatStack, CheatSection, CheatItem, CheatExample
    search.ts               # filterSectionsByQuery utility

 data/
    stacks/
        index.ts            #  Registry  add new stacks here
        react/
           index.ts        # Exports reactStack (CheatStack)
           core-concepts.ts
           hooks-core.ts
        javascript/
           index.ts        # Exports javascriptStack
           fundamentals.ts
           async.ts
        java/
            index.ts        # Exports javaStack
            core.ts
            oop.ts

 components/
     AppLayout.tsx           # Page shell  header, main, footer
     StackSelector.tsx       # Coloured tab strip for switching stacks
     SidebarSectionNav.tsx   # Sections for the active stack
     CheatCard.tsx           # Concept card with level, tags, key points
     CheatModal.tsx          # Live editor (JS/TS) or syntax block (Java etc.)
     GlobalSearch.tsx        # Header search across all stacks
     SearchBar.tsx           # Reusable controlled search input
     CodeRenderer.tsx        # Standalone LiveProvider wrapper
```

---

## Data Model

```ts
// One entry in the live/static code panel
CheatExample {
  id, title, code, description?,
  language?   // "tsx"|"javascript"  live editor  |  "java"|"python"|  static block
}

// One concept card
CheatItem {
  id, name, label?, summary,
  level: "beginner"|"intermediate"|"advanced",
  tags[], keyPoints[], examples[]
}

// A group of cards (e.g. "Hooks  Core")
CheatSection { id, slug, name, shortName, description?, items[] }

// A whole technology (e.g. "React", "Java")
CheatStack {
  id, slug, name, shortName, description?,
  color: "sky"|"amber"|"orange"|"emerald"|,
  sections[]
}
```

---

## Local Development

**Prerequisites:** Node 22+

```bash
npm install          # install dependencies
npm run dev          # start dev server (HMR)  http://localhost:5173
npm run build        # TypeScript check + Vite production build
npm run preview      # serve the production build locally
npm run lint         # ESLint
```

### Build-time variables

`vite.config.ts` injects two globals at build time:

| Constant | Value |
|---|---|
| `__APP_VERSION__` | `version` from `package.json` |
| `__BUILD_TIME__` | ISO 8601 build timestamp |

Displayed in the `AppLayout` footer.

---

## Adding a New Stack

### 1  Create the stack folder

```
src/data/stacks/<id>/
  index.ts           exports a CheatStack
  <section>.ts       one file per section
```

### 2  Write a section file

```ts
// src/data/stacks/python/fundamentals.ts
import type { CheatSection } from "../../../core/cheatsheet-types";

export const pythonFundamentalsSection: CheatSection = {
  id: "python-fundamentals",
  slug: "fundamentals",
  name: "Fundamentals",
  shortName: "Basics",
  description: "Python syntax, types, and built-in functions.",
  items: [
    {
      id: "py-variables",
      name: "Variables",
      label: "Variables",
      summary: "Python is dynamically typed  no declaration keyword needed.",
      level: "beginner",
      tags: ["variables", "basics"],
      keyPoints: [
        "Assign with =  (no var/let/const).",
        "Use type hints for clarity: name: str = 'Ehsan'.",
      ],
      examples: [
        {
          id: "py-vars-basic",
          title: "Variable declarations",
          language: "python",   //  static highlighted block
          code: `name: str = "Ehsan"\nage: int = 30\nprint(f"{name} is {age}")`,
        },
      ],
    },
  ],
};
```

- Set `language: "python"` (or `"java"`, `"sql"`, etc.) on examples that should be **static** syntax-highlighted.
- Omit `language` or set it to `"tsx"` / `"javascript"` for **interactive** react-live examples.

### 3  Create the stack index

```ts
// src/data/stacks/python/index.ts
import type { CheatStack } from "../../../core/cheatsheet-types";
import { pythonFundamentalsSection } from "./fundamentals";

export const pythonStack: CheatStack = {
  id: "python",
  slug: "python",
  name: "Python",
  shortName: "Py",
  description: "Readable, versatile language for scripting, data, and backend.",
  color: "emerald",   // any of: sky | amber | orange | emerald | violet | rose | teal
  sections: [pythonFundamentalsSection],
};
```

### 4  Register in the global index

```ts
// src/data/stacks/index.ts  (add one line)
import { pythonStack } from "./python";

export const allStacks: CheatStack[] = [
  reactStack,
  javascriptStack,
  javaStack,
  pythonStack,   //  add here
];
```

That's it  StackSelector, GlobalSearch, and SidebarSectionNav update automatically.

---

## Adding a New Section to an Existing Stack

1. Create a new `.ts` file inside the stack's folder.
2. Export a `CheatSection` object.
3. Import it in the stack's `index.ts` and add it to the `sections` array.

---

## Deployment

### Docker (two-stage build)

```
Stage 1  build   (node:22-alpine)
  npm install && npm run build    /app/dist

Stage 2  runtime (nginx:1.27-alpine)
  COPY /app/dist  /usr/share/nginx/html
  EXPOSE 80
```

The production image contains only Nginx and the compiled static files.

```bash
# Build
docker build -t fse-cheatsheet .

# Run on port 8080
docker run -p 8080:80 fse-cheatsheet
```

### Live URL

The container is hosted and served at:

**[https://dev.react.shimmerapp.com](https://dev.react.shimmerapp.com)**

TLS termination and the custom subdomain are handled by the reverse proxy in front of the container.

---

## Current Content

| Stack | Color | Sections | Topics |
|---|---|---|---|
| React | sky | Core Concepts, Hooks  Core | JSX, components, props, state, lists, conditionals, fragments, StrictMode, useState, useEffect, useCallback, useReducer, useRef, useMemo |
| JavaScript | amber | Fundamentals, Async JavaScript | let/const, template literals, arrow functions, destructuring, spread/rest, optional chaining, array methods, ES modules, Promises, async/await, error handling, closures |
| Java | orange | Core Java, OOP | Variables, control flow, arrays/collections, methods, String API, classes/objects, inheritance, interfaces, generics, abstract classes |