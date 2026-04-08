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
      details: `## What is useState?
It's how you give a function component its own memory. Without useState, a component would forget everything every re-render — counters reset to zero, form inputs clear, everything restarts.

## The two parts
useState returns a pair: the current value and a function to update it.
const [count, setCount] = useState(0) — the names are up to you, "count" and "setCount" are just a convention.

## Why you need the setter, not direct mutation
React does not watch your variables for changes. It only knows to re-render when you call the setter. If you do count = 5, nothing happens. If you do setCount(5), React re-renders the component.

## Functional updates
When new state depends on old state, use setCount(prev => prev + 1) instead of setCount(count + 1). This is safer in async scenarios where count could be stale.

## Objects and arrays
useState works with any value including objects and arrays. Always create a new object or array when updating: setUser({ ...user, name: "new" }). Never mutate the existing one directly.`,
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
      details: `## What is useEffect for?
Effects are code that reaches outside React — fetching data, setting subscriptions, starting timers, directly manipulating the DOM. React cannot safely do these things during render, so you defer them to effects that run after.

## The dependency array is the most important part
- No array at all: runs after every single render (usually a bug)
- []: runs once after the first render only (on mount)
- [dep1, dep2]: runs after any render where dep1 or dep2 changed

## The cleanup function
Return a function from your effect to clean up when the component unmounts or before the next run. Forgetting cleanup causes memory leaks — a timer that keeps running after the component is gone.

## The most common mistake
Using useEffect to sync one piece of state with another. If a value can be derived from existing state or props, compute it during render instead. useEffect is for side effects, not state synchronisation.

## React 18 Strict Mode double-fire
In development, effects run twice on mount. This is intentional — it verifies your cleanup function works correctly. If your app breaks on double mount, your cleanup is missing.`,
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
      details: `## What problem does useCallback solve?
Every time a component renders, any function defined inside it creates a brand-new function reference. Child components that receive that function as a prop will always see it as "changed" and re-render, even if nothing meaningful changed.

## How useCallback helps
useCallback returns the SAME function reference between renders, as long as its dependencies have not changed. This prevents unnecessary child re-renders.

## When it actually matters
useCallback only makes a measurable difference when both are true:
- The function is passed as a prop to a child wrapped in React.memo
- That child is genuinely expensive to re-render

## Do not add it to everything
useCallback has a cost — React must store the function and compare dependencies on every render. Adding it to every function rarely makes your app faster and often makes it slightly slower.

## Mental model
Think of useCallback as a cache for function references. A cache only helps when the original operation is expensive. For most inline functions, recreation is trivially cheap.`,
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
      details: `## What is useReducer?
It's like useState but for complex state. Instead of calling setState directly, you dispatch action objects that describe what happened, and a pure reducer function decides how the state should change.

## useState vs useReducer in plain English
- useState: setCount(5) — just set the value directly
- useReducer: dispatch({ type: 'increment' }) — describe the event, let the reducer decide the new state

## When to reach for useReducer
- Multiple state values that change together
- Next state depends on the previous in complex ways
- State transitions have meaningful names (submit, cancel, validate, reset)
- You want to test your state logic in isolation (it's a pure function)

## The reducer rules
The reducer must be pure: same input always gives same output, no side effects. Never fetch data, start timers, or mutate objects inside a reducer.

## The Redux connection
useReducer is the same pattern as Redux — without the library. If you understand useReducer, you already understand the core concept behind Redux.`,
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
      details: `## What is useRef?
It's a box that holds a value across renders. Unlike state, changing .current does not trigger a re-render. It gives you a mutable value that lives "outside" the normal render cycle.

## Two main uses
- DOM access: attach a ref to a JSX element to imperatively interact with it (focus, measure, animate, control video playback)
- Mutable storage: store interval IDs, animation frame handles, previous render values, or any data the UI does not need to reflect

## The key difference from state
State: updating triggers a re-render, new value appears in the UI
Ref: updating does NOT trigger a re-render, value is immediately readable at any time

## When to use it for DOM access
Form field focus after submission, integrating third-party libraries, measuring element dimensions with getBoundingClientRect(), managing media playback.

## Common mistake
Using a ref when you should use state. If the UI needs to display or react to the value, it belongs in state. Refs are for values the UI does not need to know about.`,
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
      details: `## What is useMemo?
It caches the result of an expensive calculation. Instead of recomputing on every render, useMemo runs the function only when its dependencies change and returns the cached result in between.

## Mental model
Imagine a slow function that searches 10,000 records. Without useMemo, it re-runs on every render — even when you toggle a completely unrelated checkbox. With useMemo, it only runs when the data or the search query actually changes.

## useMemo vs useCallback
- useMemo: caches a VALUE (the result of running the function)
- useCallback: caches a FUNCTION (the function reference itself)
useMemo(() => computeTotal(items), [items]) and useCallback(() => handleClick(), []) serve different purposes in the same caching pattern.

## When NOT to use it
Do not memoize simple arithmetic or array operations on small data sets. The cost of dependency comparison and cache lookup often exceeds the cost of just recomputing. Only reach for useMemo when you've measured an actual performance problem.`,
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
