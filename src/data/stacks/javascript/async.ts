// src/data/stacks/javascript/async.ts
import type { CheatSection } from "../../../core/cheatsheet-types";

export const jsAsyncSection: CheatSection = {
  id: "js-async",
  slug: "async",
  name: "Async JavaScript",
  shortName: "Async",
  description:
    "Promises, async/await, and the patterns for handling asynchronous operations in JavaScript.",
  items: [
    {
      id: "js-promises",
      name: "Promises",
      label: "Promise",
      summary:
        "A Promise represents a value that may be available now, in the future, or never. It's the foundation of async JS.",
      details: `## Why Promises exist
Before Promises, async operations used nested callbacks: doA(function() { doB(function() { doC(function() { ... }); }); }). This "callback hell" made code unreadable and errors hard to catch. Promises flatten this into a readable chain: doA().then(doB).then(doC).catch(handleError).

## The three states
A Promise always starts as pending. It then either fulfills (success, .then() runs) or rejects (failure, .catch() runs). Once settled, it never changes state. You can't re-run a Promise once it's done.

## Promise.all vs Promise.allSettled
Promise.all: runs all promises in parallel, resolves when ALL succeed. If any one fails, it immediately rejects with that error and you lose the other results.
Promise.allSettled: also runs all in parallel, but ALWAYS resolves after every promise settles. You get an array of {status, value/reason} objects, so you can see which ones succeeded and which failed.

## .finally()
.finally() runs regardless of success or failure. Use it for cleanup: hiding a loading spinner, closing a database connection, unlocking a UI. The key: it receives no arguments and passes through the original value/error to the next handler.`,
      level: "beginner",
      tags: ["async", "promise", "es6"],
      keyPoints: [
        "Three states: pending → fulfilled (then) or rejected (catch).",
        "Promise.then() / .catch() / .finally() chain handlers.",
        "Promise.all([p1, p2]) — resolves when all resolve, rejects on first failure.",
        "Promise.allSettled([...]) — waits for all, regardless of outcome."
      ],
      examples: [
        {
          id: "js-promises-basic",
          title: "Creating and chaining promises",
          description: "Simulate an async API call and handle success and failure.",
          language: "javascript",
          code: `function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Ehsan", role: "dev" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 600);
  });
}

function PromiseDemo() {
  const [result, setResult] = React.useState("—");

  const runSuccess = () => {
    setResult("loading...");
    fetchUser(1)
      .then(user => setResult(\`✅ Got: \${user.name} (\${user.role})\`))
      .catch(err => setResult(\`❌ \${err.message}\`));
  };

  const runError = () => {
    setResult("loading...");
    fetchUser(-1)
      .then(user => setResult(\`✅ Got: \${user.name}\`))
      .catch(err => setResult(\`❌ \${err.message}\`));
  };

  return (
    <div>
      <p style={{ fontFamily: "monospace" }}>{result}</p>
      <button onClick={runSuccess}>Fetch (success)</button>
      <button onClick={runError} style={{ marginLeft: "0.5rem" }}>Fetch (error)</button>
    </div>
  );
}

render(<PromiseDemo />);`
        },
        {
          id: "js-promise-all",
          title: "Promise.all — parallel requests",
          description: "Run multiple promises in parallel and wait for all to resolve.",
          language: "javascript",
          code: `function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

function ParallelDemo() {
  const [results, setResults] = React.useState([]);
  const [status, setStatus] = React.useState("idle");

  const run = async () => {
    setStatus("loading...");
    const [a, b, c] = await Promise.all([
      delay(400, "User data"),
      delay(300, "Post data"),
      delay(500, "Comment data"),
    ]);
    setResults([a, b, c]);
    setStatus("done");
  };

  return (
    <div>
      <button onClick={run}>Run Promise.all</button>
      <p>{status}</p>
      <ul>
        {results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}

render(<ParallelDemo />);`
        }
      ]
    },

    {
      id: "js-async-await",
      name: "async / await",
      label: "Async/Await",
      summary:
        "async/await is syntactic sugar over Promises that lets you write asynchronous code in a synchronous style.",
      details: `## It doesn't actually block
The name "await" is misleading — it looks like it pauses everything, but it only pauses the async function itself. The JavaScript event loop keeps running; other code and events continue to process. No threads are blocked.

## async functions always return a Promise
Even if you write return 42 inside an async function, the caller receives Promise.resolve(42). This means the caller can .then() or await the result. You can't call await outside of an async function (except at the top level of a module in modern environments).

## Why prefer async/await over .then()/.catch()?
Async/await handles errors with a familiar try/catch block instead of chaining .catch(). The code looks linear and sequential, matching how you'd think about the logic. Debugging is easier because stack traces point to the right line. For parallel operations, combine both: use Promise.all inside async/await.

## Forgetting await — the silent bug
If you forget await before an async function call, you get the Promise object, not the resolved value. The code doesn't crash, it just behaves wrongly. const user = fetchUser(1) gives you a Promise. const user = await fetchUser(1) gives you the user data.`,
      level: "beginner",
      tags: ["async", "await", "es2017"],
      keyPoints: [
        "async functions always return a Promise.",
        "await pauses execution inside an async function until the Promise settles.",
        "Use try/catch inside async functions for error handling.",
        "Never use await outside an async function (except in top-level module context)."
      ],
      examples: [
        {
          id: "js-async-await-basic",
          title: "async/await with try/catch",
          description: "Fetch data with async/await and handle errors gracefully.",
          language: "javascript",
          code: `async function fetchUser(id) {
  // Simulated API delay
  await new Promise(r => setTimeout(r, 500));
  if (id <= 0) throw new Error("User not found");
  return { id, name: "Ehsan", stack: ["React", "Node", "Java"] };
}

function AsyncDemo() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function load(id) {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUser(id);
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={() => load(1)}>Load user</button>
      <button onClick={() => load(-1)} style={{ marginLeft: "0.5rem" }}>Load (error)</button>

      {loading && <p>Loading...</p>}
      {error   && <p style={{ color: "red" }}>❌ {error}</p>}
      {user    && (
        <div>
          <p>👤 {user.name}</p>
          <p>Stack: {user.stack.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

render(<AsyncDemo />);`
        }
      ]
    },

    {
      id: "js-error-handling",
      name: "Error handling",
      label: "Error Handling",
      summary:
        "Robust async code always handles rejections; unhandled rejections crash Node.js processes.",
      details: `## Why unhandled rejections are critical
In Node.js, an unhandled promise rejection that reaches the top level will crash the entire process. In browsers, it logs a warning and may crash the application. Always handle rejections: either with .catch() at the end of every chain, or with try/catch around every await.

## The finally guarantee
finally runs every time — success or failure — and it runs AFTER the try or catch block completes. Use it for cleanup operations that must always happen: hide a loading indicator, release a lock, close a connection. The value returned by finally is ignored; the original value or error passes through.

## Custom Error classes
Extending Error lets you create specific error types: class NetworkError extends Error { }. This lets the catch block use instanceof to distinguish errors: if (err instanceof NetworkError) { handleNetworkIssue() } else { handleGenericError() }. Far better than checking error message strings.

## Error propagation
In async/await, an unhandled error bubbles up the call stack just like synchronous errors. If function A awaits function B which throws, and B doesn't catch it, A catches it. If A also doesn't catch it, it propagates further up. Always catch at the boundary closest to where you can meaningfully handle it.`,
      level: "intermediate",
      tags: ["error", "try-catch", "async"],
      keyPoints: [
        "Always wrap await calls in try/catch inside async functions.",
        ".catch() at the end of a Promise chain catches all upstream rejections.",
        "finally runs regardless of success or failure — useful for cleanup.",
        "Custom Error classes let callers distinguish error types."
      ],
      examples: [
        {
          id: "js-error-handling-patterns",
          title: "Error handling patterns",
          description: "try/catch/finally with async functions and custom errors.",
          language: "javascript",
          code: `class NetworkError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "NetworkError";
    this.status = status;
  }
}

async function riskyFetch(shouldFail) {
  await new Promise(r => setTimeout(r, 400));
  if (shouldFail) throw new NetworkError("503 Service unavailable", 503);
  return { data: "🎉 Success!" };
}

function ErrorDemo() {
  const [log, setLog] = React.useState([]);

  async function run(fail) {
    const ts = new Date().toLocaleTimeString();
    try {
      const result = await riskyFetch(fail);
      setLog(prev => [...prev, \`\${ts} ✅ \${result.data}\`]);
    } catch (err) {
      if (err instanceof NetworkError) {
        setLog(prev => [...prev, \`\${ts} ❌ NetworkError \${err.status}: \${err.message}\`]);
      } else {
        setLog(prev => [...prev, \`\${ts} ❌ Unknown: \${err.message}\`]);
      }
    } finally {
      setLog(prev => [...prev, \`\${ts} 🔄 finally ran\`]);
    }
  }

  return (
    <div>
      <button onClick={() => run(false)}>Succeed</button>
      <button onClick={() => run(true)} style={{ marginLeft: "0.5rem" }}>Fail</button>
      <ul style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
        {log.map((entry, i) => <li key={i}>{entry}</li>)}
      </ul>
    </div>
  );
}

render(<ErrorDemo />);`
        }
      ]
    },

    {
      id: "js-closures",
      name: "Closures",
      label: "Closures",
      summary:
        "A closure is a function that captures variables from its outer scope even after that scope has exited.",
      details: `## The backpack analogy
When a function is created inside another function, it carries a "backpack" containing all the variables from its surrounding scope. Even after the outer function has finished and returned, the inner function still has access to those variables through its backpack (closure).

## Why closures matter
Closures enable: private state (variables that can't be accessed from outside), factory functions (functions that return customized functions), memoization, and partial application. They're fundamental to how React hooks work internally.

## The stale closure pitfall in React
The most common closure bug in React: an event handler or setTimeout callback captures a variable from state at the time it was created, but by the time it runs, the state has updated. The function still holds the OLD (stale) value. Fix it with the functional update form: setState(prev => prev + 1) instead of setState(count + 1).

## Closures are not copies
The closure captures a REFERENCE to the variable, not a copy of its value at the moment of capture. If the outer variable changes, the inner function sees the updated value. This is why all loop-closure bugs happen: var in a loop is one variable that gets reassigned, and all inner functions reference the same (final) value.`,
      level: "intermediate",
      tags: ["closures", "scope", "functions"],
      keyPoints: [
        "Inner functions always have access to outer function variables.",
        "The closure holds a reference, not a copy — mutations are reflected.",
        "Classic use: factory functions, partial application, private state.",
        "Watch for the 'stale closure' pitfall in React hooks."
      ],
      examples: [
        {
          id: "js-closures-counter",
          title: "Counter factory with closure",
          description: "Each counter has its own private state via a closure.",
          language: "javascript",
          code: `function makeCounter(start = 0) {
  let count = start; // private to each counter instance

  return {
    increment() { count++; },
    decrement() { count--; },
    value()     { return count; }
  };
}

function ClosureDemo() {
  const [, forceRender] = React.useReducer(x => x + 1, 0);

  // Counters live outside React state — they hold their own closure state
  const counterA = React.useRef(makeCounter(0)).current;
  const counterB = React.useRef(makeCounter(10)).current;

  return (
    <div>
      <div>
        Counter A: {counterA.value()}
        <button onClick={() => { counterA.increment(); forceRender(); }} style={{ marginLeft: "0.5rem" }}>+</button>
        <button onClick={() => { counterA.decrement(); forceRender(); }}>−</button>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        Counter B (starts at 10): {counterB.value()}
        <button onClick={() => { counterB.increment(); forceRender(); }} style={{ marginLeft: "0.5rem" }}>+</button>
        <button onClick={() => { counterB.decrement(); forceRender(); }}>−</button>
      </div>
    </div>
  );
}

render(<ClosureDemo />);`
        }
      ]
    }
  ]
};
