// src/data/stacks/react/hooks-core.ts
import type { CheatSection } from "../../../core/cheatsheet-types";

export const reactHooksCoreSection: CheatSection = {
  id: "react-hooks-core",
  slug: "hooks-core",
  name: "Hooks · Core",
  shortName: "Hooks",
  description: "Essential React hooks you use in almost every application.",
  items: [
    {
      id: "useState",
      name: "useState",
      label: "State Hook",
      summary:
        "Add reactive state to function components; updates trigger a re-render.",
      level: "beginner",
      tags: ["state", "core", "beginner"],
      keyPoints: [
        "Returns [state, setState] — destructure directly.",
        "Calling setState triggers a re-render of the component.",
        "Can store any value: string, number, object, array, etc.",
        "Pass a function to setState for safe state-based updates."
      ],
      examples: [
        {
          id: "useState-basic-counter",
          title: "Basic counter",
          description: "Simple numeric state updated via a button click.",
          code: `function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <span>Count: {count}</span>
      <button onClick={() => setCount(prev => prev + 1)}>+ Increment</button>
    </div>
  );
}

render(<Counter />);`
        },
        {
          id: "useState-greeting",
          title: "Text input bound to state",
          description: "Controlled input: value driven by state.",
          code: `function Greeting() {
  const [name, setName] = React.useState("Developer");

  return (
    <div>
      <p>Hey {name}, welcome!</p>
      <button onClick={() => setName("React Ninja")}>
        Change name
      </button>
    </div>
  );
}

render(<Greeting />);`
        }
      ]
    },

    {
      id: "useEffect",
      name: "useEffect",
      label: "Effect Hook",
      summary:
        "Run side effects (API calls, subscriptions, timers) after the component renders.",
      level: "beginner",
      tags: ["lifecycle", "effects"],
      keyPoints: [
        "Runs after the render is committed to the DOM.",
        "[] → run once on mount only.",
        "[dep1, dep2] → run when any listed dependency changes.",
        "Return a cleanup function to stop timers, unsubscribe, etc."
      ],
      examples: [
        {
          id: "useEffect-once",
          title: "Run once on mount",
          description: "Empty dependency array → executes exactly once after mount.",
          code: `function WelcomeEffect() {
  const [message, setMessage] = React.useState("Loading...");

  React.useEffect(() => {
    const id = setTimeout(() => setMessage("Hello from useEffect!"), 800);
    return () => clearTimeout(id);
  }, []);

  return <p>{message}</p>;
}

render(<WelcomeEffect />);`
        },
        {
          id: "useEffect-dependency",
          title: "Re-run on dependency change",
          description: "Effect fires every time 'name' is updated.",
          code: `function NameLogger() {
  const [name, setName] = React.useState("Ehsan");
  const [log, setLog] = React.useState([]);

  React.useEffect(() => {
    setLog(prev => [...prev, \`name changed → \${name}\`]);
  }, [name]);

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Type a name..."
      />
      <ul style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
        {log.map((entry, i) => <li key={i}>{entry}</li>)}
      </ul>
    </div>
  );
}

render(<NameLogger />);`
        }
      ]
    },

    {
      id: "useCallback",
      name: "useCallback",
      label: "Memoized Callback",
      summary:
        "Memoize a function reference so it stays stable across renders.",
      level: "intermediate",
      tags: ["performance", "memoization"],
      keyPoints: [
        "Returns a memoized version of the callback.",
        "Useful when passing callbacks to React.memo-wrapped children.",
        "Dependency array controls when a new function reference is created.",
        "Only optimises — don't add it everywhere by default."
      ],
      examples: [
        {
          id: "useCallback-click",
          title: "Stable click handler",
          description: "Handler reference only changes when dependencies change.",
          code: `function MemoizedClick() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

render(<MemoizedClick />);`
        }
      ]
    },

    {
      id: "useReducer",
      name: "useReducer",
      label: "Reducer Hook",
      summary:
        "Manage complex state transitions with a reducer function and explicit actions.",
      level: "intermediate",
      tags: ["state", "advanced"],
      keyPoints: [
        "Alternative to useState for complex or inter-related state.",
        "Signature: useReducer(reducer, initialState, initFn?).",
        "Returns [state, dispatch].",
        "dispatch({ type, payload }) is the only way to trigger state changes."
      ],
      examples: [
        {
          id: "useReducer-counter",
          title: "Counter with reducer",
          description: "Increment, decrement, and reset via dispatched actions.",
          code: `function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset":     return init(action.payload);
    default: throw new Error("Unknown action: " + action.type);
  }
}

function CounterWithReducer({ initialCount = 0 }) {
  const [state, dispatch] = React.useReducer(reducer, initialCount, init);

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>−</button>
      <span style={{ margin: "0 0.75rem" }}>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button
        style={{ marginLeft: "0.5rem" }}
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
    </div>
  );
}

render(<CounterWithReducer initialCount={0} />);`
        }
      ]
    },

    {
      id: "useRef",
      name: "useRef",
      label: "Ref Hook",
      summary:
        "Hold a mutable value that persists across renders without triggering a re-render.",
      level: "beginner",
      tags: ["dom", "refs"],
      keyPoints: [
        "Returns { current: value }.",
        "Updating ref.current does NOT cause a re-render.",
        "Commonly used to access DOM nodes imperatively.",
        "Also useful for storing previous values or timer IDs."
      ],
      examples: [
        {
          id: "useRef-focus",
          title: "Focus a DOM element",
          description: "Access a textarea directly via ref and call focus().",
          code: `function FocusTextarea() {
  const textareaRef = React.useRef(null);

  return (
    <div>
      <textarea
        ref={textareaRef}
        rows={3}
        placeholder="Click the button to focus me..."
        style={{ display: "block", width: "100%", marginBottom: "0.5rem" }}
      />
      <button onClick={() => textareaRef.current?.focus()}>
        Focus textarea
      </button>
    </div>
  );
}

render(<FocusTextarea />);`
        }
      ]
    },

    {
      id: "useMemo",
      name: "useMemo",
      label: "Memoized Value",
      summary:
        "Cache an expensive computed value and only recompute it when its dependencies change.",
      level: "intermediate",
      tags: ["performance", "memoization"],
      keyPoints: [
        "Returns a memoized computed value (not a function).",
        "Only recomputes when a listed dependency changes.",
        "Don't overuse — only worthwhile for genuinely expensive calculations.",
        "Compare with useCallback: useMemo memoises a value, useCallback memoises a function."
      ],
      examples: [
        {
          id: "useMemo-filter",
          title: "Memoised list filter",
          description: "Filtered list recomputes only when the input or list changes.",
          code: `const ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  label: ["apple","banana","cherry","date","elderberry","fig"][i % 6] + " " + (i + 1),
}));

function FilteredList() {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(
    () => ITEMS.filter(item => item.label.includes(query.toLowerCase())),
    [query]
  );

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Filter items..."
      />
      <p style={{ fontSize: "0.8rem" }}>{filtered.length} results</p>
      <ul style={{ fontSize: "0.8rem" }}>
        {filtered.slice(0, 5).map(item => <li key={item.id}>{item.label}</li>)}
      </ul>
    </div>
  );
}

render(<FilteredList />);`
        }
      ]
    }
  ]
};
