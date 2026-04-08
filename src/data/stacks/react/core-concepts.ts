// src/data/stacks/react/core-concepts.ts
import type { CheatSection } from "../../../core/cheatsheet-types";

export const reactCoreConceptsSection: CheatSection = {
  id: "react-core-concepts",
  slug: "core-concepts",
  name: "Core Concepts",
  shortName: "Core",
  description:
    "Fundamental React building blocks: JSX, components, props, state, and how React renders UI.",
  items: [
    {
      id: "jsx-syntax",
      name: "JSX syntax",
      label: "JSX",
      summary:
        "JSX lets you write HTML-like markup inside JavaScript. React turns it into element objects.",
      details: `## What is JSX?
JSX looks like HTML written inside JavaScript. Your build tool (TypeScript/Babel) compiles it into plain JavaScript function calls — React.createElement() — under the hood. It is not a new language, just a convenient shorthand.

## Key rules to remember
- Elements must be closed: <img /> not <img>
- Use className instead of class (class is a reserved JavaScript keyword)
- Wrap JavaScript expressions in curly braces: {myVariable}
- Multiple sibling elements need one parent wrapper — use a Fragment <> to avoid adding a real DOM node

## Common mistake
Putting an if statement directly inside JSX. JSX only accepts expressions, not statements. Use a ternary ({isReady ? <A /> : <B />}) or a short-circuit ({show && <A />}) instead.`,
      level: "beginner",
      tags: ["jsx", "syntax", "beginner"],
      keyPoints: [
        "JSX compiles to React.createElement calls under the hood.",
        "Use camelCase for attributes: className, onClick, htmlFor, etc.",
        "JSX expressions go inside curly braces: {value}.",
        "Multiple elements must be wrapped in a single parent (div or fragment)."
      ],
      examples: [
        {
          id: "jsx-basic",
          title: "Basic JSX element",
          description: "Simple JSX element with a dynamic expression.",
          code: `const name = "Ehsan";
const element = <h1>Hello, {name}!</h1>;

function Greeting() {
  const now = new Date().toLocaleTimeString();
  return (
    <div>
      {element}
      <p>Current time: {now}</p>
    </div>
  );
}

render(<Greeting />);`
        }
      ]
    },

    {
      id: "components-function-vs-class",
      name: "Function vs Class Components",
      label: "Components",
      summary:
        "Components are reusable UI pieces. Use function components for all new React code.",
      details: `## What is a component?
Think of a component like a custom HTML tag you invent yourself. Once defined, you can reuse it anywhere in your app: <Button />, <UserCard />, <ShoppingCart />.

## Function vs Class components
Modern React only needs function components. Class components are the old style — you'll still find them in legacy codebases, but all new code should be written as functions because they're simpler and work with Hooks.

## The one rule that always matters
Component names MUST start with a capital letter. React uses this to tell the difference between your custom component (<Button />) and a native HTML element (<button />).

## Why Hooks changed everything
Before Hooks (React 16.8), you needed class components to add state and lifecycle features. Now function components do everything classes could — and they're much easier to read and test.`,
      level: "beginner",
      tags: ["components", "function", "class"],
      keyPoints: [
        "Function components are plain JS functions that return JSX.",
        "Class components use class syntax and this — legacy in modern React.",
        "Hooks only work in function components.",
        "Component names must start with a capital letter."
      ],
      examples: [
        {
          id: "component-function",
          title: "Function component (recommended)",
          description: "The modern, hooks-friendly way to write components.",
          code: `function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}

render(<Welcome name="Ehsan" />);`
        },
        {
          id: "component-class-legacy",
          title: "Class component (legacy)",
          description:
            "Older syntax — still seen in existing codebases. Prefer function components for new code.",
          code: `class WelcomeClass extends React.Component {
  render() {
    return <h2>Welcome, {this.props.name}!</h2>;
  }
}

render(<WelcomeClass name="Ehsan" />);`
        }
      ]
    },

    {
      id: "props",
      name: "Props",
      label: "Props",
      summary:
        "Props are read-only inputs passed from parent to child components.",
      details: `## What are props?
Props are how you pass data into a component — just like HTML attributes. <UserCard name="Ehsan" age={30} /> passes two props to the UserCard component.

## The golden rule: data flows down
Data only flows from parent to child, never the other way. If a child needs to update the parent, the parent passes down a callback function as a prop.

## Props are read-only
A component must never modify its own props. If the value needs to change, it belongs in state, not props. Treat props as a snapshot in time from the parent.

## Destructuring makes code cleaner
Instead of props.name and props.age, use function UserCard({ name, age }) in the parameter list. This is the standard pattern in modern React.

## Common mistake
Forgetting that functions are valid props too. Passing onClick or onSubmit as a prop is exactly how you build reusable interactive components.`,
      level: "beginner",
      tags: ["props", "data-flow"],
      keyPoints: [
        "Props flow down the tree from parent to child.",
        "Props are immutable: components must not modify their own props.",
        "Destructure props for cleaner component signatures.",
        "Functions can be passed as props for callbacks."
      ],
      examples: [
        {
          id: "props-basic",
          title: "Passing & destructuring props",
          description: "Parent passes data to child via JSX attributes.",
          code: `function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return <UserCard name="Ehsan" age={30} />;
}

render(<App />);`
        }
      ]
    },

    {
      id: "state-concept",
      name: "State",
      label: "State (concept)",
      summary:
        "State holds data that changes over time and triggers re-renders when updated.",
      details: `## What is state?
State is data that can change over time inside a component. When state changes, React automatically re-renders the component to show the updated UI. Without state, your UI would be static.

## Props vs State
- Props: data passed IN from outside — read-only, owned by the parent
- State: data created and owned INSIDE the component — can be changed by the component itself

## The cardinal rule
Never modify state directly (state.count = 5). Always call the setter (setCount(5)). React only knows to re-render when you call the setter function — direct mutation is invisible to React.

## Keep state minimal
Don't put everything in state. If a value can be calculated from existing state or props, just compute it during render. Less state means simpler components.

## Where to put state
Put state in the lowest component that needs it. If two sibling components need the same data, lift the state up to their shared parent and pass it down as props.`,
      level: "beginner",
      tags: ["state", "concept"],
      keyPoints: [
        "State is local, mutable data owned by a component.",
        "When state changes React re-renders only the affected component subtree.",
        "Manage state with useState / useReducer hooks in modern React.",
        "Keep state minimal — derive computed values where possible."
      ],
      examples: [
        {
          id: "state-concept-basic",
          title: "State via useState",
          description:
            "A simple counter that increments on button click.",
          code: `function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

render(<Counter />);`
        }
      ]
    },

    {
      id: "rendering-lists",
      name: "Rendering lists",
      label: "Lists",
      summary:
        "Render arrays of data by mapping them to arrays of JSX elements.",
      details: `## How list rendering works
In React, you turn an array of data into an array of JSX elements using .map(). React renders all of them. It's the same idea as a for loop, but written as an expression so it fits inside JSX.

## What is the key prop and why does it matter?
React uses keys to efficiently update the DOM when a list changes. When items are added, removed, or reordered, React compares the old and new lists using keys. Without keys, React would re-render every item from scratch on every change.

## What makes a good key
- A database or data ID: key={user.id}
- A unique string from the data: key={product.slug}
- NOT an array index: key={index} causes bugs when list order can change

## Common mistake
Forgetting the key prop (React shows a warning in the console) or using array indices as keys when the list can be filtered, sorted, or reordered.`,
      level: "beginner",
      tags: ["lists", "rendering"],
      keyPoints: [
        "Use Array.prototype.map to transform data into JSX.",
        "Each list item needs a stable, unique key prop.",
        "Prefer item IDs over array indices as keys.",
        "Keys help React efficiently reconcile list updates."
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

function TodoList() {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

render(<TodoList />);`
        }
      ]
    },

    {
      id: "conditional-rendering",
      name: "Conditional rendering",
      label: "Conditionals",
      summary:
        "Show or hide UI based on state, props, or other conditions.",
      details: `## How it works
JSX is just JavaScript, so you can use any JS expression to decide what to render. React simply does not render null, undefined, or false — you can exploit this.

## The three main patterns
- && short-circuit: {isLoggedIn && <Dashboard />} — renders only when the left side is true
- Ternary: {loading ? <Spinner /> : <Content />} — renders one or the other
- Early return: if (!data) return <Loading />; — keeps the happy path clean and readable

## The && gotcha
{count && <p>Items: {count}</p>} — if count is 0, it renders the number "0" to the page instead of nothing! Use {count > 0 && ...} or a ternary to be safe.

## When to extract a component
If your conditional logic is growing complex (nested ternaries, multiple conditions), extract it into a separate well-named component. Components are cheap to create and make the logic much easier to read.`,
      level: "beginner",
      tags: ["conditional", "rendering"],
      keyPoints: [
        "Use &&, ?:, or early returns to conditionally render.",
        "Return null from a component to render nothing.",
        "Keep conditions small and readable; extract components if logic grows.",
        "Avoid deeply nested ternaries — they hurt readability."
      ],
      examples: [
        {
          id: "conditional-basic",
          title: "Toggle with &&",
          description: "Show or hide a section based on boolean state.",
          code: `function SecretToggle() {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShow(s => !s)}>
        {show ? "Hide" : "Show"} secret
      </button>
      {show && <p>🤫 This is a secret message!</p>}
    </div>
  );
}

render(<SecretToggle />);`
        }
      ]
    },

    {
      id: "fragments",
      name: "Fragments",
      label: "Fragments",
      summary:
        "Fragments let you group multiple elements without adding an extra DOM node.",
      details: `## Why do Fragments exist?
JSX requires every component to return a single root element. Before Fragments, developers wrapped everything in <div> tags, creating unnecessary DOM nodes — sometimes called "div soup".

## Short syntax vs long syntax
- <> </> — short and clean, but does not support the key attribute
- <React.Fragment key="..."> — use this inside a .map() when you need a key prop

## When it really matters
Fragments are critical when working with HTML tables. If a TableRow component returns multiple <td> elements, wrapping them in a <div> would break the HTML structure (divs are not valid table children). A Fragment solves this perfectly.

## CSS implications
Fewer real DOM nodes means cleaner CSS. Flexbox and Grid relationships are based on the actual DOM tree, so extra wrapper divs can unexpectedly break your layouts in subtle ways.`,
      level: "beginner",
      tags: ["fragments", "jsx"],
      keyPoints: [
        "Short syntax: <> ... </> — no attributes.",
        "Long syntax: <React.Fragment key=\"...\"> for keyed lists.",
        "Avoid unnecessary <div> wrappers ('div soup').",
        "Fragments have no DOM representation."
      ],
      examples: [
        {
          id: "fragment-basic",
          title: "Using fragments",
          description: "Return multiple siblings without a wrapper div.",
          code: `function UserInfo() {
  return (
    <>
      <h2>User Info</h2>
      <p>Name: Ehsan</p>
      <p>Role: Developer</p>
    </>
  );
}

render(<UserInfo />);`
        }
      ]
    },

    {
      id: "strict-mode",
      name: "Strict Mode",
      label: "StrictMode",
      summary:
        "A development-only tool that helps catch potential problems early.",
      details: `## What does Strict Mode actually do?
In development, React intentionally calls certain things twice — renders, state initialisers, effect setup/teardown — to help you catch bugs before they reach production. It has zero effect in production builds.

## Why double-invocation helps
If your render function has a side effect (e.g., modifying a global variable, writing to a database), calling it twice makes the bug immediately obvious. Pure functions return the same result no matter how many times they are called.

## What Strict Mode catches
- Side effects inside the render phase (impure components)
- Deprecated or legacy lifecycle methods
- State that does not survive a component being unmounted and remounted
- Effects that are missing proper cleanup

## Where to enable it
Typically in main.tsx, wrapping your entire app: <React.StrictMode><App /></React.StrictMode>. You can also wrap just one subtree for incremental adoption in a large codebase.`,
      level: "intermediate",
      tags: ["strict-mode", "debugging"],
      keyPoints: [
        "Enable with <React.StrictMode> at the root (usually in main.tsx).",
        "Intentionally double-invokes certain functions to expose side-effect bugs.",
        "Has zero effect in production builds.",
        "Helps detect unsafe lifecycles, legacy APIs, and render side effects."
      ],
      examples: [
        {
          id: "strict-mode-root",
          title: "Enabling Strict Mode (demo)",
          description:
            "In a real app, wrap your root in main.tsx. This demo shows the JSX structure.",
          code: `function StrictModeDemo() {
  return (
    <React.StrictMode>
      <div>StrictMode is enabled around this subtree.</div>
    </React.StrictMode>
  );
}

render(<StrictModeDemo />);`
        }
      ]
    }
  ]
};
