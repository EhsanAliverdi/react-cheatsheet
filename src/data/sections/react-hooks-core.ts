// src/data/sections/react-hooks-core.ts
import type { CheatSection } from "../../core/cheatsheet-types";

export const reactHooksCoreSection: CheatSection = {
  id: "react-hooks-core",
  slug: "hooks-core",
  name: "Hooks · Core",
  shortName: "Hooks",
  description: "Essential React hooks you use in almost every application.",
  items: [
    //
    // ──────────────────────────────── useState ────────────────────────────────
    //
    {
      id: "useState",
      name: "useState",
      label: "State Hook",
      summary:
        "Add reactive state to function components and update the UI when it changes.",
      level: "beginner",
      tags: ["state", "core", "beginner"],
      keyPoints: [
        "Returns an array: [state, setState].",
        "Calling setState triggers a re-render of the component.",
        "Can store any serializable value (string, number, object…).",
        "Initial value can be a value or a function (lazy init)."
      ],
      examples: [
        {
          id: "useState-basic-counter",
          title: "Basic counter",
          description: "Simple numeric state updated via a button click.",
          code: `function Counter() {
  const [count, setCount] = React.useState(0);

  function handleIncrement() {
    setCount(prev => prev + 1);
  }

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <span>Count: {count}</span>
      <button onClick={handleIncrement}>+ Increment</button>
    </div>
  );
}

render(<Counter />);`
        },
        {
          id: "useState-greeting",
          title: "Greeting with name",
          description: "Update a name value and render it in the UI.",
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

    //
    // ──────────────────────────────── useEffect ────────────────────────────────
    //
    {
      id: "useEffect",
      name: "useEffect",
      label: "Effect Hook",
      summary:
        "Run side effects like API calls, subscriptions, and timers in function components.",
      level: "beginner",
      tags: ["lifecycle", "effects"],
      keyPoints: [
        "Runs after the component renders.",
        "Second argument is the dependency array.",
        "[] → run once on mount.",
        "[deps] → run when dependencies change.",
        "Return a function to clean up subscriptions, timers, etc."
      ],
      examples: [
        {
          id: "useEffect-once",
          title: "Run once on mount",
          description: "Effect with [] runs a single time after mount.",
          code: `function WelcomeEffect() {
  const [message, setMessage] = React.useState("Loading...");

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage("Hello from useEffect!");
    }, 800);

    return () => clearTimeout(timeoutId);
  }, []);

  return <p>{message}</p>;
}

render(<WelcomeEffect />);`
        },
        {
          id: "useEffect-dependency",
          title: "Effect with dependency",
          description:
            "Effect re-runs whenever 'name' changes, e.g. to sync with an API.",
          code: `function NameLogger() {
  const [name, setName] = React.useState("Ehsan");

  React.useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Type a name..."
      />
      <p>Open dev tools console to see logs when the name changes.</p>
    </div>
  );
}

render(<NameLogger />);`
        }
      ]
    },

    //
    // ──────────────────────────────── useCallback ────────────────────────────────
    //
    {
      id: "useCallback",
      name: "useCallback",
      label: "Memoized Callback",
      summary:
        "Memoize a function so that its identity is stable between renders.",
      level: "intermediate",
      tags: ["performance", "memoization"],
      keyPoints: [
        "Returns a memoized version of a callback.",
        "Useful when passing callbacks to optimized children (React.memo).",
        "Dependency array controls when a new function is created.",
        "Avoids unnecessary re-creation of callbacks with heavy logic."
      ],
      examples: [
        {
          id: "useCallback-click",
          title: "Stable click handler",
          description:
            "Handler instance changes only when dependencies change.",
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

    //
    // ──────────────────────────────── useReducer ────────────────────────────────
    //
    {
      id: "useReducer",
      name: "useReducer",
      label: "Reducer Hook",
      summary:
        "Manage complex state transitions with a reducer and explicit actions.",
      level: "intermediate",
      tags: ["state", "advanced"],
      keyPoints: [
        "Alternative to useState for complex / related state.",
        "Takes reducer, initial state, and optional init function.",
        "Returns [state, dispatch].",
        "dispatch({ type, payload }) drives state changes."
      ],
      examples: [
        {
          id: "useReducer-counter",
          title: "Counter reducer",
          description: "Simple reducer with increment, decrement, and reset.",
          code: `function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function CounterWithReducer(props) {
  const initialCount =
    props.initialCount !== undefined && props.initialCount !== null
      ? props.initialCount
      : 0;

  const [state, dispatch] = React.useReducer(reducer, initialCount, init);

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span style={{ margin: "0 0.5rem" }}>{state.count}</span>
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

    //
    // ──────────────────────────────── useRef ────────────────────────────────
    //
    {
      id: "useRef",
      name: "useRef",
      label: "Ref Hook",
      summary:
        "Hold a mutable value that does not trigger re-renders and can reference DOM nodes.",
      level: "beginner",
      tags: ["dom", "refs"],
      keyPoints: [
        "useRef returns an object: { current: value }.",
        "Updating ref.current does not cause a re-render.",
        "Commonly used to access DOM nodes.",
        "Useful for storing mutable values across renders."
      ],
      examples: [
        {
          id: "useRef-focus",
          title: "Focus textarea with ref",
          description: "Access an element directly and call focus() using ref.",
          code: `function FocusTextarea() {
  const textareaRef = React.useRef(null);

  const handleFocus = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div>
      <textarea
        ref={textareaRef}
        rows={4}
        placeholder="Type something here..."
        style={{ display: "block", width: "100%", marginBottom: "0.5rem" }}
      />
      <button onClick={handleFocus}>
        Focus textarea
      </button>
    </div>
  );
}

render(<FocusTextarea />);`
        }
      ]
    }
  ]
};
