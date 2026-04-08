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
