// src/data/sections/react-core-concepts.ts
import type { CheatSection } from "../../core/cheatsheet-types";

export const reactCoreConceptsSection: CheatSection = {
  id: "react-core-concepts",
  slug: "core-concepts",
  name: "1.1 Core Concepts",
  shortName: "Core",
  description:
    "Fundamental React building blocks: JSX, components, props, state, and how React renders UI.",
  items: [
    // 1) JSX syntax
    {
      id: "jsx-syntax",
      name: "JSX syntax",
      label: "JSX",
      summary:
        "JSX lets you write HTML-like markup inside JavaScript. React turns it into element objects.",
      level: "beginner",
      tags: ["jsx", "syntax", "beginner"],
      keyPoints: [
        "JSX is not HTML, but very similar. It compiles to React.createElement calls.",
        "Use camelCase for attributes: className, onClick, htmlFor, etc.",
        "JSX expressions go inside curly braces: {value}.",
        "You must wrap multiple elements in a single parent (div, fragment, etc.)."
      ],
      examples: [
        {
          id: "jsx-basic",
          title: "Basic JSX element",
          description: "Simple JSX element with dynamic expression.",
          code: `const name = "Ehsan";
const element = <h1>Hello, {name}!</h1>;

// Inside a component
export function Greeting() {
  const now = new Date().toLocaleTimeString();
  return <p>Current time: {now}</p>;
}`
        }
      ]
    },

    // 2) Components (Function vs Class)
    {
      id: "components-function-vs-class",
      name: "Components (Function vs Class)",
      label: "Components",
      summary:
        "Components are reusable UI pieces. Use function components for almost everything in modern React.",
      level: "beginner",
      tags: ["components", "function", "class"],
      keyPoints: [
        "Function components are plain JS functions that return JSX.",
        "Class components use class syntax and this, but are legacy in modern React.",
        "Hooks only work in function components.",
        "Component names must start with a capital letter."
      ],
      examples: [
        {
          id: "component-function",
          title: "Function component (recommended)",
          description: "The modern, hooks-friendly way to write components.",
          code: `export function Welcome({ name }: { name: string }) {
  return <h2>Welcome, {name}!</h2>;
}`
        },
        {
          id: "component-class-legacy",
          title: "Class component (legacy style)",
          description:
            "Older syntax, still seen in existing codebases. Use functions + hooks for new code.",
          code: `import React from "react";

type Props = { name: string };

export class WelcomeClass extends React.Component<Props> {
  render() {
    return <h2>Welcome, {this.props.name}!</h2>;
  }
}`
        }
      ]
    },

    // 3) Props
    {
      id: "props",
      name: "Props",
      label: "Props",
      summary:
        "Props are read-only inputs passed from parent to child components.",
      level: "beginner",
      tags: ["props", "data-flow"],
      keyPoints: [
        "Props flow **down** the tree from parent to child.",
        "Props are read-only: components should not modify their own props.",
        "Destructure props for cleaner component signatures.",
        "You can pass functions as props (for callbacks/handlers)."
      ],
      examples: [
        {
          id: "props-basic",
          title: "Passing props",
          description: "Parent passes data to child via JSX attributes.",
          code: `function UserCard({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export function App() {
  return <UserCard name="Ehsan" age={30} />;
}`
        }
      ]
    },

    // 4) State (basic – before hooks)
    {
      id: "state-concept",
      name: "State",
      label: "State (concept)",
      summary:
        "State holds data that changes over time and triggers re-renders when updated.",
      level: "beginner",
      tags: ["state", "concept"],
      keyPoints: [
        "State is data that belongs to a component and can change over time.",
        "When state changes, React re-renders that component.",
        "In modern React, state is usually managed with useState/useReducer (hooks).",
        "Keep state minimal and derive values where possible."
      ],
      examples: [
        {
          id: "state-concept-basic",
          title: "State via useState",
          description:
            "A simple example of stateful data that updates on button click.",
          code: `import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}`
        }
      ]
    },

    // 5) Rendering lists
    {
      id: "rendering-lists",
      name: "Rendering lists",
      label: "Lists",
      summary:
        "Render arrays of data by mapping them to arrays of JSX elements.",
      level: "beginner",
      tags: ["lists", "rendering"],
      keyPoints: [
        "Use Array.prototype.map to transform data into JSX.",
        "Each list item needs a stable key prop.",
        "Keys should be unique and stable (IDs > array index).",
        "Keys help React efficiently update the list."
      ],
      examples: [
        {
          id: "list-basic",
          title: "Mapping an array to JSX",
          description: "Render a list of items with a key prop.",
          code: `const todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a cheat sheet" },
];

export function TodoList() {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}`
        }
      ]
    },

    // 6) Conditional rendering
    {
      id: "conditional-rendering",
      name: "Conditional rendering",
      label: "Conditionals",
      summary:
        "Show or hide pieces of UI based on state, props, or other conditions.",
      level: "beginner",
      tags: ["conditional", "rendering"],
      keyPoints: [
        "Use JS expressions: &&, ?:, or early returns to conditionally render.",
        "Return null from a component to render nothing.",
        "Keep conditions small and readable; extract components if logic grows.",
        "Avoid deeply nested ternaries; they hurt readability."
      ],
      examples: [
        {
          id: "conditional-basic",
          title: "Simple conditional rendering",
          description: "Toggle UI based on a boolean state.",
          code: `import { useState } from "react";

export function SecretToggle() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(s => !s)}>
        {show ? "Hide" : "Show"} secret
      </button>

      {show && <p>🤫 This is a secret message!</p>}
    </div>
  );
}`
        }
      ]
    },

    // 7) Fragment (<> </>)
    {
      id: "fragments",
      name: "Fragment (<> </>)",
      label: "Fragments",
      summary:
        "Fragments let you group multiple elements without adding an extra DOM node.",
      level: "beginner",
      tags: ["fragments", "jsx"],
      keyPoints: [
        "Components must return a single root element; fragments are a lightweight wrapper.",
        "Short syntax: <> ... </> (no attributes).",
        "Long syntax: <React.Fragment key=\"...\"> ... </React.Fragment>.",
        "Useful to avoid unnecessary <div> wrappers (a.k.a. 'div soup')."
      ],
      examples: [
        {
          id: "fragment-basic",
          title: "Using fragments",
          description: "Return multiple sibling elements using a fragment.",
          code: `export function UserInfo() {
  return (
    <>
      <h2>User Info</h2>
      <p>Name: Ehsan</p>
      <p>Role: Developer</p>
    </>
  );
}`
        }
      ]
    },

    // 8) Strict Mode
    {
      id: "strict-mode",
      name: "Strict Mode",
      label: "StrictMode",
      summary:
        "A development-only tool that helps you find potential problems in your React app.",
      level: "intermediate",
      tags: ["strict-mode", "debugging"],
      keyPoints: [
        "Enabled with <React.StrictMode> at the root (usually in main.tsx).",
        "Runs certain functions twice in development to detect side-effect issues.",
        "Does NOT run in production and does not affect production behaviour.",
        "Helps catch unsafe lifecycles, legacy APIs, and side effects in render."
      ],
      examples: [
        {
          id: "strict-mode-root",
          title: "Enabling Strict Mode",
          description:
            "Wrap your app with StrictMode in the root file. Only affects development.",
          code: `import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
        }
      ]
    }
  ]
};
