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
