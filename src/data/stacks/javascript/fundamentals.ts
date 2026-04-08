// src/data/stacks/javascript/fundamentals.ts
import type { CheatSection } from "../../../core/cheatsheet-types";

export const jsFundamentalsSection: CheatSection = {
  id: "js-fundamentals",
  slug: "fundamentals",
  name: "Fundamentals",
  shortName: "Basics",
  description:
    "Core JavaScript syntax and features: variables, functions, destructuring, and modern ES6+ additions.",
  items: [
    {
      id: "js-variables",
      name: "let / const / var",
      label: "Variables",
      summary:
        "JavaScript has three ways to declare variables. Prefer const, use let when reassignment is needed, avoid var.",
      level: "beginner",
      tags: ["variables", "es6", "scope"],
      keyPoints: [
        "const — block-scoped, cannot be reassigned (but object contents can mutate).",
        "let — block-scoped, can be reassigned.",
        "var — function-scoped and hoisted; avoid in modern code.",
        "Declare as const by default; switch to let only when you need to reassign."
      ],
      examples: [
        {
          id: "js-variables-basic",
          title: "let, const, and var",
          description: "Demonstrating scope and reassignment rules.",
          language: "javascript",
          code: `const PI = 3.14159;
let counter = 0;
counter = 10; // ✅ reassignment allowed

// var is function-scoped: avoid it
function demoVar() {
  if (true) {
    var x = 1;  // leaks to function scope
    let y = 2;  // stays in block
  }
  console.log(x); // 1
  // console.log(y); // ReferenceError
}

render(
  <div>
    <p>PI = {PI}</p>
    <p>counter = {counter}</p>
  </div>
);`
        }
      ]
    },

    {
      id: "js-template-literals",
      name: "Template literals",
      label: "Template Literals",
      summary:
        "Template literals use backticks and allow embedded expressions and multi-line strings.",
      level: "beginner",
      tags: ["strings", "es6", "template"],
      keyPoints: [
        "Use backticks (`) instead of quotes.",
        "Embed any expression with ${expression}.",
        "Supports multi-line strings natively — no \\n needed.",
        "Tagged templates let you process the string (e.g., styled-components)."
      ],
      examples: [
        {
          id: "js-template-literals-basic",
          title: "Interpolation & multi-line",
          description: "Embedding variables and expressions in strings.",
          language: "javascript",
          code: `const name = "Ehsan";
const age = 30;
const role = "Full Stack Engineer";

const intro = \`Hello, I'm \${name}.
I'm \${age} years old and work as a \${role}.\`;

const sum = \`3 + 4 = \${3 + 4}\`;

render(
  <div>
    <pre style={{ whiteSpace: "pre-wrap" }}>{intro}</pre>
    <p>{sum}</p>
  </div>
);`
        }
      ]
    },

    {
      id: "js-arrow-functions",
      name: "Arrow functions",
      label: "Arrow Functions",
      summary:
        "Arrow functions are a concise syntax for writing functions and do not bind their own this.",
      level: "beginner",
      tags: ["functions", "es6", "arrow"],
      keyPoints: [
        "Implicit return when body is a single expression (no curly braces).",
        "Do not have their own this, arguments, or super.",
        "Cannot be used as constructors.",
        "Ideal for callbacks and short utility functions."
      ],
      examples: [
        {
          id: "js-arrow-functions-basic",
          title: "Arrow function syntax variants",
          description: "Single param, multi-param, block body, and implicit return.",
          language: "javascript",
          code: `// Single param — parens optional
const double = x => x * 2;

// Multi param
const add = (a, b) => a + b;

// Block body with explicit return
const greet = (name) => {
  const msg = \`Hello, \${name}!\`;
  return msg;
};

// Returning an object literal — wrap in parens
const makeUser = (name) => ({ name, active: true });

render(
  <div>
    <p>double(7) = {double(7)}</p>
    <p>add(3, 4) = {add(3, 4)}</p>
    <p>{greet("Ehsan")}</p>
    <pre>{JSON.stringify(makeUser("Ehsan"), null, 2)}</pre>
  </div>
);`
        }
      ]
    },

    {
      id: "js-destructuring",
      name: "Destructuring",
      label: "Destructuring",
      summary:
        "Destructuring extracts values from arrays or objects into distinct variables.",
      level: "beginner",
      tags: ["destructuring", "es6", "arrays", "objects"],
      keyPoints: [
        "Object destructuring: const { a, b } = obj — matches by key name.",
        "Array destructuring: const [x, y] = arr — matches by position.",
        "Provide default values: const { name = 'Guest' } = user.",
        "Rename while destructuring: const { name: userName } = user."
      ],
      examples: [
        {
          id: "js-destructuring-basic",
          title: "Object & array destructuring",
          description: "Extract values into named variables with optional defaults.",
          language: "javascript",
          code: `// Object destructuring
const user = { name: "Ehsan", age: 30, role: "dev" };
const { name, age, role = "guest" } = user;

// Rename while destructuring
const { name: firstName } = user;

// Array destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];

// Nested
const { address: { city } = {} } = { address: { city: "Berlin" } };

render(
  <div style={{ fontSize: "0.85rem" }}>
    <p>{name}, {age}, {role}</p>
    <p>firstName alias: {firstName}</p>
    <p>first={first}, second={second}, rest={JSON.stringify(rest)}</p>
    <p>city: {city}</p>
  </div>
);`
        }
      ]
    },

    {
      id: "js-spread-rest",
      name: "Spread & Rest",
      label: "Spread / Rest",
      summary:
        "Spread (...) expands iterables; rest (...) collects remaining arguments or properties.",
      level: "beginner",
      tags: ["spread", "rest", "es6", "arrays", "objects"],
      keyPoints: [
        "Spread into an array: [...arr1, ...arr2] — creates a new array.",
        "Spread into an object: { ...obj1, ...obj2 } — shallow merge.",
        "Rest in params: function fn(a, b, ...rest) — collects remaining args.",
        "Order matters for object spread: later keys override earlier ones."
      ],
      examples: [
        {
          id: "js-spread-rest-basic",
          title: "Spread arrays and objects",
          description: "Clone, merge, and override using spread syntax.",
          language: "javascript",
          code: `// Array spread
const nums = [1, 2, 3];
const more = [...nums, 4, 5];

// Object spread — merge & override
const defaults = { theme: "light", lang: "en", fontSize: 14 };
const userPrefs = { lang: "de", fontSize: 16 };
const config = { ...defaults, ...userPrefs };

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

render(
  <div style={{ fontSize: "0.85rem" }}>
    <p>more: {JSON.stringify(more)}</p>
    <pre>{JSON.stringify(config, null, 2)}</pre>
    <p>sum(1,2,3,4,5) = {sum(1, 2, 3, 4, 5)}</p>
  </div>
);`
        }
      ]
    },

    {
      id: "js-optional-chaining",
      name: "Optional chaining & Nullish coalescing",
      label: "?. and ??",
      summary:
        "Safely access deeply nested properties and provide fallback values without verbose null checks.",
      level: "beginner",
      tags: ["optional-chaining", "nullish", "es2020"],
      keyPoints: [
        "?. short-circuits and returns undefined if the left side is null/undefined.",
        "Works for property access (obj?.prop), methods (obj?.fn()), and indexing (arr?.[0]).",
        "?? returns the right side when the left is null or undefined (not just falsy).",
        "?? differs from ||: '' and 0 pass through ?? but not ||."
      ],
      examples: [
        {
          id: "js-optional-chaining-basic",
          title: "Optional chaining & nullish coalescing",
          description: "Access nested data without defensive null checks.",
          language: "javascript",
          code: `const user = { profile: { name: "Ehsan", address: { city: "Berlin" } } };
const ghost = {};

const city      = user.profile?.address?.city;        // "Berlin"
const missing   = ghost.profile?.address?.city;       // undefined
const withFb    = ghost.profile?.address?.city ?? "Unknown City";

// ?? vs ||
const zero = 0 ?? "default";   // 0   (falsy but not null/undefined)
const empty = "" ?? "default"; // ""  (falsy but not null/undefined)
const nullV = null ?? "default"; // "default"

render(
  <div style={{ fontSize: "0.85rem" }}>
    <p>city: {city}</p>
    <p>missing: {String(missing)}</p>
    <p>with fallback: {withFb}</p>
    <p>0 ?? "default" → {String(zero)}</p>
    <p>null ?? "default" → {nullV}</p>
  </div>
);`
        }
      ]
    },

    {
      id: "js-array-methods",
      name: "Array methods",
      label: "Array Methods",
      summary:
        "JavaScript arrays ship with powerful higher-order methods for transforming, filtering, and reducing data.",
      level: "beginner",
      tags: ["arrays", "map", "filter", "reduce", "functional"],
      keyPoints: [
        "map() — transforms each element, returns a new array of the same length.",
        "filter() — returns a new array containing only elements that pass the test.",
        "reduce() — accumulates all elements into a single value.",
        "find() / some() / every() — search and predicate helpers."
      ],
      examples: [
        {
          id: "js-array-methods-core",
          title: "map, filter, reduce",
          description: "The three most-used array higher-order methods.",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubled  = numbers.map(n => n * 2);
const evens    = numbers.filter(n => n % 2 === 0);
const sum      = numbers.reduce((acc, n) => acc + n, 0);

// Chaining
const sumOfDoubledEvens = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);

render(
  <div style={{ fontSize: "0.85rem" }}>
    <p>doubled:  {JSON.stringify(doubled)}</p>
    <p>evens:    {JSON.stringify(evens)}</p>
    <p>sum:      {sum}</p>
    <p>sumOfDoubledEvens: {sumOfDoubledEvens}</p>
  </div>
);`
        }
      ]
    },

    {
      id: "js-modules",
      name: "ES Modules",
      label: "Modules",
      summary:
        "ES modules split code into reusable files using import and export statements.",
      level: "beginner",
      tags: ["modules", "import", "export", "es6"],
      keyPoints: [
        "Named export: export const fn = ... — import with { fn }.",
        "Default export: export default Class — import with any name.",
        "Re-export from a barrel file: export { fn } from './module'.",
        "Dynamic import: const mod = await import('./module') — lazy loading."
      ],
      examples: [
        {
          id: "js-modules-syntax",
          title: "Named and default exports",
          description: "Module export/import patterns used across the project.",
          language: "javascript",
          code: `// ── math.ts ──────────────────────────────
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export default class Calculator {
  square(n) { return n * n; }
}

// ── main.ts ──────────────────────────────
import Calculator, { PI, add, multiply } from "./math";

const calc = new Calculator();

// Note: this example shows the syntax — in this playground both files
// are combined since we can't split files at runtime.
render(
  <div style={{ fontSize: "0.85rem" }}>
    <p>PI = {PI}</p>
    <p>add(3, 4) = {add(3, 4)}</p>
    <p>multiply(3, 4) = {multiply(3, 4)}</p>
    <p>calc.square(5) = {calc.square(5)}</p>
  </div>
);`
        }
      ]
    }
  ]
};
