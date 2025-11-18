// src/data/hooks-react-basic.ts

export type HookExample = {
  title: string;
  code: string;
  description?: string;
};

export type HookItem = {
  id: string;
  name: string;
  label: string;
  summary: string;
  level: "beginner" | "intermediate" | "advanced";
  keyPoints: string[];
  examples: HookExample[];
  tags: string[];
};

export const reactHooksBasics: HookItem[] = [
  {
    id: "useState",
    name: "useState",
    label: "State Hook",
    summary:
      "Add reactive state to function components and update the UI when it changes.",
    level: "beginner",
    keyPoints: [
      "Returns an array: [state, setState].",
      "setState triggers a re-render of the component.",
      "You can store any serializable value (string, number, object…).",
      "Initialize with a value or a function (lazy init).",
    ],
    tags: ["state", "core", "beginner"],
    examples: [
      {
        title: "Basic counter",
        description: "Simple numeric state updated via a button click.",
        code: `import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(prev => prev + 1);
  }

  return (
    <div className="space-y-3">
      <p className="text-lg font-semibold">Count: {count}</p>
      <button
        onClick={handleIncrement}
        className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-100 hover:bg-slate-800"
      >
        + Increment
      </button>
    </div>
  );
}`
      },
      {
        title: "Greeting with name",
        description: "Update a name value and render it in the UI.",
        code: `import { useState } from "react";

export function Greeting() {
  const [name, setName] = useState("Developer");

  return (
    <div className="space-y-3">
      <p className="text-lg">
        Hey <span className="font-semibold">{name}</span>, welcome!
      </p>
      <button
        onClick={() => setName("React Ninja")}
        className="inline-flex items-center rounded-md border border-emerald-500 bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-500"
      >
        Change name
      </button>
    </div>
  );
}`
      }
    ]
  },
  {
    id: "useEffect",
    name: "useEffect",
    label: "Side Effect Hook",
    summary:
      "Run side effects like API calls, subscriptions, and timers in function components.",
    level: "beginner",
    keyPoints: [
      "useEffect runs after the component renders.",
      "The second argument is a dependency array.",
      "[] → run once on mount.",
      "[deps] → run when dependencies change.",
      "Return a function to clean up subscriptions, timers, etc.",
    ],
    tags: ["lifecycle", "effects"],
    examples: [
      {
        title: "Run once on mount",
        description: "Effect without dependencies runs a single time after mount.",
        code: `import { useEffect, useState } from "react";

export function WelcomeEffect() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Simulate async work
    const timeoutId = setTimeout(() => {
      setMessage("Hello from useEffect!");
    }, 800);

    // Cleanup: clear the timeout if component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // empty dependency array → run once

  return <p className="text-lg">{message}</p>;
}`
      },
      {
        title: "Effect with dependency",
        description:
          "Effect is re-run whenever 'name' changes, e.g. to sync with an API.",
        code: `import { useEffect, useState } from "react";

export function NameLogger() {
  const [name, setName] = useState("Ehsan");

  useEffect(() => {
    console.log("Name changed:", name);
    // Imagine an API call here that depends on 'name'

    return () => {
      console.log("Cleanup before next run / unmount");
    };
  }, [name]);

  return (
    <div className="space-y-3">
      <input
        className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Type a name..."
      />
      <p className="text-sm text-slate-400">
        Open dev tools console to see logs when the name changes.
      </p>
    </div>
  );
}`
      }
    ]
  },
  {
    id: "useCallback",
    name: "useCallback",
    label: "Memoized Callback",
    summary:
      "Memoize a function so that its identity is stable between renders.",
    level: "intermediate",
    keyPoints: [
      "Returns a memoized version of a callback.",
      "Useful when passing callbacks to optimized children (React.memo).",
      "Dependency array controls when a new function is created.",
      "Avoids re-creating event handlers with heavy logic or subscriptions.",
    ],
    tags: ["performance", "memoization"],
    examples: [
      {
        title: "Stable click handler",
        description:
          "Handler instance changes only when count changes, not on every render.",
        code: `import { useCallback, useState } from "react";

export function MemoizedClick() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
    >
      Clicked {count} times
    </button>
  );
}`
      }
    ]
  },
  {
    id: "useReducer",
    name: "useReducer",
    label: "Reducer Hook",
    summary:
      "Manage complex state transitions with a reducer and explicit actions.",
    level: "intermediate",
    keyPoints: [
      "Alternative to useState for complex / related state.",
      "Takes reducer, initial state, and optional init function.",
      "Returns [state, dispatch].",
      "dispatch({ type, payload }) → drives state changes.",
    ],
    tags: ["state", "advanced"],
    examples: [
      {
        title: "Counter reducer",
        description: "Simple reducer with increment, decrement, and reset.",
        code: `import { useReducer } from "react";

type State = { count: number };
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number };

function init(initialCount: number): State {
  return { count: initialCount };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error("Unknown action");
  }
}

export function CounterWithReducer({ initialCount = 0 }: { initialCount?: number }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3">
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="rounded-md border border-slate-700 px-2 py-1 text-sm"
      >
        -
      </button>
      <span className="w-10 text-center font-semibold">{state.count}</span>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="rounded-md border border-slate-700 px-2 py-1 text-sm"
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
        className="ml-3 rounded-md bg-slate-800 px-3 py-1 text-xs uppercase tracking-wide"
      >
        Reset
      </button>
    </div>
  );
}`
      }
    ]
  },
  {
    id: "useRef",
    name: "useRef",
    label: "Ref Hook",
    summary:
      "Hold a mutable value that does not trigger re-renders and can reference DOM nodes.",
    level: "beginner",
    keyPoints: [
      "useRef returns an object: { current: value }.",
      "Updating ref.current does not cause a re-render.",
      "Commonly used to access DOM nodes.",
      "Useful for storing mutable values across renders.",
    ],
    tags: ["dom", "refs"],
    examples: [
      {
        title: "Focus textarea with ref",
        description:
          "Access an element directly and call focus() using ref.current.",
        code: `import { useRef } from "react";

export function FocusTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleFocus = () => {
    textareaRef.current?.focus();
  };

  return (
    <div className="space-y-3">
      <textarea
        ref={textareaRef}
        rows={4}
        className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
        placeholder="Type something here..."
      />
      <button
        onClick={handleFocus}
        className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500"
      >
        Focus textarea
      </button>
    </div>
  );
}`
      }
    ]
  }
];
