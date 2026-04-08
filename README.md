# React Cheat Sheet

An interactive, browser-based reference for React developers. Browse concepts by section, read key points and summaries on cards, then open a modal with a **live editable code playground** powered by `react-live`.

**Live app → [dev.react.shimmerapp.com](https://dev.react.shimmerapp.com)**

---

## Features

- **Sectioned navigation** — sidebar lists every topic section; on mobile it collapses to a horizontal scroll strip.
- **Cheat cards** — each concept is shown as a card with a name, difficulty level (Beginner / Intermediate / Advanced), concise summary, bullet-point key facts, and topic tags.
- **Live code modal** — clicking "View example" opens a split-pane modal: left side is a live rendered preview, right side is the editable TypeScript / JSX source. Edits immediately update the preview via `react-live`.
- **Global search** — header search box searches across all sections (name, summary, tags, key points, examples) and navigates directly to the matching item.
- **Build metadata** — version number and build timestamp are injected at compile time and displayed in the footer.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | **React 19** |
| Language | **TypeScript 5.9** |
| Build tool | **Vite 7** |
| Styling | **Tailwind CSS v4** (via `@tailwindcss/vite` plugin) |
| Live code editor | **react-live 4** (`LiveProvider`, `LiveEditor`, `LivePreview`) |
| Syntax highlighting | **react-syntax-highlighter 16** |
| Linting | **ESLint 9** with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` |
| Container runtime | **Docker** — multi-stage build |
| Static server | **Nginx 1.27 Alpine** |

---

## Project Structure

```
src/
├── core/
│   ├── cheatsheet-types.ts   # Shared TypeScript types (CheatSection, CheatItem, CheatExample)
│   └── search.ts             # filterSectionsByQuery — pure search utility
├── data/
│   └── sections/
│       ├── index.ts                  # Aggregates all sections into `allSections[]`
│       ├── react-core-concepts.ts    # Section: JSX, components, props, state, rendering
│       └── react-hooks-core.ts       # Section: useState, useEffect, and other core hooks
└── components/
    ├── AppLayout.tsx         # Page shell — header (logo + search), main, footer with version
    ├── SidebarSectionNav.tsx # Sidebar / horizontal-scroll section picker
    ├── CheatCard.tsx         # Individual concept card
    ├── CheatModal.tsx        # Full-screen modal with react-live split-pane editor
    ├── GlobalSearch.tsx      # Header search with dropdown results
    ├── SearchBar.tsx         # Reusable controlled search input with clear button
    └── CodeRenderer.tsx      # Standalone live-code block (LiveProvider wrapper)
```

### Core types (`src/core/cheatsheet-types.ts`)

```ts
CheatExample  { id, title, code, description? }
CheatItem     { id, name, label?, summary, level, tags, keyPoints, examples }
CheatSection  { id, slug, name, shortName, description?, items }
```

Adding new content means adding a new `CheatSection` data file and registering it in `src/data/sections/index.ts`. No component changes needed.

---

## Local Development

**Prerequisites:** Node 22+

```bash
# Install dependencies
npm install

# Start dev server (HMR enabled)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

The dev server starts at `http://localhost:5173` by default.

### Build-time variables

`vite.config.ts` injects two global constants at build time:

| Constant | Value |
|---|---|
| `__APP_VERSION__` | `version` field from `package.json` |
| `__BUILD_TIME__` | ISO 8601 timestamp of the build |

These are consumed in `AppLayout.tsx` and rendered in the page footer.

---

## Deployment

The app is deployed as a **Docker container** serving a pre-built static bundle through **Nginx**.

### How it builds

The `Dockerfile` uses a **two-stage build**:

```
Stage 1 — build   (node:22-alpine)
  ├── npm install
  └── npm run build  →  /app/dist

Stage 2 — runtime (nginx:1.27-alpine)
  └── COPY /app/dist → /usr/share/nginx/html
      EXPOSE 80
```

The final image contains only Nginx and the compiled static files — no Node.js runtime in production.

### Build and run locally with Docker

```bash
# Build the image
docker build -t react-cheatsheet .

# Run on port 8080
docker run -p 8080:80 react-cheatsheet
```

Open `http://localhost:8080`.

### Production

The container is hosted and served at:

**[https://dev.react.shimmerapp.com](https://dev.react.shimmerapp.com)**

Nginx serves on port 80. TLS termination and the custom subdomain (`dev.react.shimmerapp.com`) are handled by the reverse proxy / hosting layer in front of the container.

---

## Adding Content

1. Create a new file in `src/data/sections/`, e.g. `react-routing.ts`.
2. Export a `CheatSection` object — follow the existing files as a template.
3. Register it in `src/data/sections/index.ts`:

```ts
import { reactRoutingSection } from "./react-routing";

export const allSections: CheatSection[] = [
  reactCoreConceptsSection,
  reactHooksCoreSection,
  reactRoutingSection,   // 👈 add here
];
```

The sidebar, search index, and card grid all update automatically — no other code changes required.

---

## Current Sections

| Section | Short name | Topics covered |
|---|---|---|
| 1.1 Core Concepts | Core | JSX syntax, function vs class components, props, state, conditional rendering, lists & keys |
| Hooks · Core | Hooks | `useState`, `useEffect`, and other essential hooks |

More sections (routing, context, performance, patterns) are planned and can be added as additional data files.
