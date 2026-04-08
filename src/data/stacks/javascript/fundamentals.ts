// src/data/stacks/javascript/fundamentals.ts
import type { CheatSection } from "../../../core/cheatsheet-types";

export const jsFundamentalsSection: CheatSection = {
  id: "js-fundamentals",
  slug: "fundamentals",
  name: "Fundamentals",
  shortName: "Basics",
  description:
    "Core JavaScript syntax and features covering: getting started, variables, data types, arithmetic operations, and relational & logical operators.",
  items: [
    // ─────────────────────────────────────────────────────────
    // 01 Getting Started
    // ─────────────────────────────────────────────────────────
    {
      id: "js-hello-world",
      name: "Hello World",
      label: "Hello World",
      summary:
        "The simplest JavaScript program. Run it with Node.js in the terminal or with a browser console.",
      details: `## What is console.log?
console.log() is JavaScript's built-in print function. It outputs anything — numbers, text, objects — to the console so you can see what your code is doing. It's your first debugging tool.

## What is Node.js?
Node.js lets you run JavaScript outside the browser — on your computer, on a server, anywhere. Before Node.js existed, JavaScript could only run inside web pages. Now it's a general-purpose language.

## How to run your first program
- Install Node.js from nodejs.org (LTS version).
- Create a file called index.js.
- Write: console.log('Hello, World!');
- Open a terminal and run: node index.js
- You will see Hello, World! printed in the terminal.

## Common beginner mistake
Forgetting the semicolon or misspelling console (e.g. Console with a capital C). JavaScript is case-sensitive: Console.log is not a function.`,
      level: "beginner",
      tags: ["getting-started", "console", "node"],
      keyPoints: [
        "console.log() prints output to the terminal or browser console.",
        "Install Node.js from nodejs.org and run files with: node index.js",
        "Use the node -v command to verify Node.js is installed.",
        "The VS Code Code Runner extension lets you run JS directly from the editor."
      ],
      examples: [
        {
          id: "js-hello-world-basic",
          title: "Hello World",
          description: "Printing to the console — the starting point of every JavaScript project.",
          language: "javascript",
          code: `console.log('Hello, World!');`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 02 Variables
    // ─────────────────────────────────────────────────────────
    {
      id: "js-variables",
      name: "let / const / var",
      label: "Variables",
      summary:
        "JavaScript has three ways to declare variables. Prefer const, use let when reassignment is needed, avoid var in modern code.",
      details: `## The simple rule
Start with const for everything. If you get an error saying you can't reassign it, change it to let. Never use var in new code.

## Why const?
const doesn't mean the value is frozen — it means the variable name can't be pointed at a different value. This prevents accidental reassignment bugs and makes your code's intent clear: this value won't change.

## Block scope explained
A "block" is any code between two curly braces { }. Variables declared with let and const exist only inside their block. Once the block ends, they're gone. var ignores blocks entirely and leaks into the surrounding function — that's the main reason to avoid it.

## What is hoisting?
var declarations are "hoisted" — meaning JS moves them to the top of the function before running. This means you can use a var variable before the line where you declare it, but it's unsafe and confusing. let and const are NOT hoisted this way; they throw an error if used before their declaration.`,
      level: "beginner",
      tags: ["variables", "es6", "scope"],
      keyPoints: [
        "const — block-scoped, cannot be reassigned (object contents can still mutate).",
        "let — block-scoped, can be reassigned.",
        "var — function-scoped and hoisted; avoid in modern code.",
        "Use camelCase for variable names and avoid reserved keywords.",
        "Declare as const by default; switch to let only when reassignment is needed."
      ],
      examples: [
        {
          id: "js-variables-basic",
          title: "let, const, and var",
          description: "Demonstrating scope, reassignment rules, and naming best practices.",
          language: "javascript",
          code: `// const — cannot be reassigned
const country = 'USA';

// let — can be reassigned
let age = 25;
age = 30;

// var — function-scoped, avoid it
var name = 'Alice';
name = 'Bob';

// Best practice: meaningful camelCase names
let userName = 'Alice';
const maxLoginAttempts = 5;

// Practical example: calculating circle area
const pi = 3.14159;
let radius = 5;
let area = pi * radius * radius;

console.log('Area of circle:', area); // 78.53975`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 03 Data Types
    // ─────────────────────────────────────────────────────────
    {
      id: "js-data-types",
      name: "Data Types",
      label: "Data Types",
      summary:
        "JavaScript values are either primitive (string, number, boolean, null, undefined) or reference types (object, array, function).",
      details: `## Primitives vs reference types
Primitive values (string, number, boolean, null, undefined) are copied when assigned. Reference types (object, array, function) are NOT copied — you get a reference to the same data in memory. Change it in one place and both variables see the change.

## The typeof quirk you'll encounter
typeof null returns "object" — this is a decades-old bug in JavaScript. Null is not actually an object. Test for null explicitly: value === null.

## null vs undefined
- null: intentional empty value. You set it on purpose to mean "nothing here".
- undefined: a variable existed but was never given a value. JS sets this automatically.

## Why numbers are all one type
Unlike Java or C#, JavaScript has a single number type that covers both integers and decimals. Under the hood it uses a 64-bit floating-point format. This is why 0.1 + 0.2 === 0.30000000000000004 (floating-point precision issue).`,
      level: "beginner",
      tags: ["data-types", "primitives", "reference-types"],
      keyPoints: [
        "Primitives: string, number, boolean, null, undefined.",
        "Reference types: object, array, function — stored as references in memory.",
        "Strings can be wrapped in single quotes, double quotes, or backticks.",
        "null is an intentional empty value; undefined means a variable was declared but not assigned.",
        "Arrays are ordered lists; objects are unordered key-value collections."
      ],
      examples: [
        {
          id: "js-data-types-primitives",
          title: "Primitive types",
          description: "String, number, boolean, null, and undefined.",
          language: "javascript",
          code: `// String
let greeting = 'Hello, World!';
let firstName = "Alice";

// Number (integer & float)
let age = 30;
const pi = 3.14159;

// Boolean
let isLoggedIn = true;

// Null — intentional absence of value
let user = null;

// Undefined — declared but not assigned
let address;

console.log(typeof greeting);  // "string"
console.log(typeof age);       // "number"
console.log(typeof isLoggedIn);// "boolean"
console.log(typeof user);      // "object" (JS quirk)
console.log(typeof address);   // "undefined"`
        },
        {
          id: "js-data-types-reference",
          title: "Reference types",
          description: "Object, array, and function — stored by reference.",
          language: "javascript",
          code: `// Object
let person = { name: 'Alice', age: 30 };

// Array
let numbers = [1, 2, 3, 4, 5];

// Function
function greet() { console.log('Hello!'); }

console.log(typeof person);  // "object"
console.log(typeof numbers); // "object"
console.log(typeof greet);   // "function"`
        }
      ]
    },

    {
      id: "js-string-concatenation",
      name: "String Concatenation",
      label: "Concatenation",
      summary:
        "Strings can be joined with the + operator or with template literals using backticks.",
      details: `## Why template literals are better
The + approach forces you to manually add spaces and count your quotes. Template literals (backticks) let you embed values directly into the string with \${} and support multi-line strings without any escape characters.

## What can go inside \${}?
Any JavaScript expression: variables, math operations, function calls, ternary expressions. Whatever evaluates to a value can go inside the curly braces.

## Multi-line strings
With template literals you can just press Enter inside the backtick string. With regular quotes you'd need \\n escape characters. Template literals preserve all line breaks exactly as you type them.

## Common mistake
Mixing backticks and quotes: \`Hello, \${name + ' World'}\` — the expression inside \${} is regular JavaScript, so quotes inside are fine.`,
      level: "beginner",
      tags: ["strings", "concatenation", "es6"],
      keyPoints: [
        "Use + to concatenate strings: 'Hello' + ' ' + 'World'.",
        "Template literals (backticks) are preferred — cleaner and support expressions.",
        "Template literals: `Hello, ${firstName} ${lastName}!`"
      ],
      examples: [
        {
          id: "js-concatenation-basic",
          title: "Concatenation with + and template literals",
          description: "Two approaches to building strings from variables.",
          language: "javascript",
          code: `let firstName = "Alice";
let lastName = "Johnson";

// Using the + operator
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // Alice Johnson

// Using template literals (preferred)
let greeting = \`Hello, \${firstName} \${lastName}!\`;
console.log(greeting); // Hello, Alice Johnson!`
        }
      ]
    },

    {
      id: "js-type-conversion",
      name: "Type Conversion",
      label: "Type Conversion",
      summary:
        "JavaScript converts values between types either implicitly (coercion) or explicitly using built-in functions.",
      details: `## Implicit coercion — the sneaky one
JavaScript often converts types without asking. The most famous example: '5' + 10 gives '510' because + with a string means concatenation. But '5' - 10 gives -5 because - only makes sense for numbers, so JS converts the string. These surprises are why developers prefer === and explicit conversions.

## Falsy values — the complete list
Falsy means "treated as false" in a boolean context. There are exactly 6: false, 0, '' (empty string), null, undefined, and NaN. Everything else is truthy — including '0', [], and {}.

## Explicit conversion functions
- Number('42') → 42, Number(true) → 1, Number(null) → 0, Number('abc') → NaN
- String(123) → '123', String(true) → 'true'
- Boolean(0) → false, Boolean('hello') → true

## What is NaN?
NaN stands for Not a Number. It's the result of invalid math like Number('hello'). Counterintuitively, typeof NaN === 'number'. Check for it with Number.isNaN(value) — never use === NaN because NaN !== NaN.`,
      level: "beginner",
      tags: ["type-conversion", "coercion", "typeof"],
      keyPoints: [
        "Implicit coercion: JS automatically converts types — '5' + 10 produces '510'.",
        "Explicit conversion: Number(), String(), Boolean() cast values manually.",
        "Number(null) → 0, Number(undefined) → NaN, Number('42') → 42.",
        "Boolean(0), Boolean(''), Boolean(null), Boolean(undefined) → all false."
      ],
      examples: [
        {
          id: "js-type-conversion-basic",
          title: "Implicit vs explicit type conversion",
          description: "Understand how JS coerces types and how to convert explicitly.",
          language: "javascript",
          code: `// Implicit coercion
let result = '5' + 10;
console.log(result);         // '510' — number coerced to string
console.log(typeof result);  // 'string'

// Explicit: String → Number
let num = Number('42');
console.log(num);            // 42
console.log(typeof num);     // 'number'

// Explicit: Number → String
let str = String(123);
console.log(str);            // '123'
console.log(typeof str);     // 'string'

// Explicit: value → Boolean
console.log(Boolean(0));     // false
console.log(Boolean(''));    // false
console.log(Boolean(1));     // true
console.log(Boolean('hi')); // true`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 04 Arithmetic Operators
    // ─────────────────────────────────────────────────────────
    {
      id: "js-arithmetic-operators",
      name: "Arithmetic Operators",
      label: "Arithmetic",
      summary:
        "JavaScript supports all standard arithmetic operators: +, -, *, /, %, and ** (exponentiation).",
      details: `## Operator precedence
JavaScript follows standard math rules: multiplication and division happen before addition and subtraction. Use parentheses to force a different order: (2 + 3) * 4 = 20 vs 2 + 3 * 4 = 14.

## The modulus operator (%)
Modulus gives you the remainder after division. 10 % 3 = 1 because 10 / 3 = 3 remainder 1. It is incredibly useful for: checking if a number is even (n % 2 === 0), cycling through an array (index % arr.length), and creating repeating patterns.

## Exponentiation (**)
** was added in ES2016. 2 ** 10 = 1024. Before that, you had to use Math.pow(2, 10). Both work, but ** is shorter and more readable.

## Increment and decrement
Shorthand for adding or subtracting 1: count++ (post-increment) or ++count (pre-increment). In most everyday use they behave the same — the difference matters inside expressions where the order of evaluation is important.`,
      level: "beginner",
      tags: ["arithmetic", "operators", "math"],
      keyPoints: [
        "+ addition, - subtraction, * multiplication, / division.",
        "% modulus — returns the remainder of division.",
        "** exponentiation — raises a number to a power (ES2016).",
        "Use parentheses to control operator precedence in complex expressions."
      ],
      examples: [
        {
          id: "js-arithmetic-basic",
          title: "All arithmetic operators",
          description: "Addition, subtraction, multiplication, division, modulus, and exponentiation.",
          language: "javascript",
          code: `let a = 5;
let b = 3;

console.log('Addition:',       a + b);  // 8
console.log('Subtraction:',    a - b);  // 2
console.log('Multiplication:', a * b);  // 15
console.log('Division:',       a / b);  // 1.6666...
console.log('Modulus:',        a % b);  // 2
console.log('Exponentiation:', a ** b); // 125

// Parentheses control order of operations
let complex = (a + b) * (a - b);
console.log('Complex Expression:', complex); // 16`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 05 Relational & Logical Operators
    // ─────────────────────────────────────────────────────────
    {
      id: "js-relational-operators",
      name: "Relational Operators",
      label: "Relational",
      summary:
        "Relational (comparison) operators compare two values and return a boolean. Always prefer === over == to avoid unexpected coercion.",
      details: `## === vs == — why it matters
== uses type coercion: it converts both sides to the same type first, then compares. This leads to surprises: 0 == false is true, '' == false is true, null == undefined is true. === never converts — it checks type AND value. Always use ===.

## NaN is never equal to anything
NaN === NaN is false. This is by design (IEEE 754 standard). Use Number.isNaN(value) to check for it.

## Comparing strings
Strings are compared character by character by their Unicode code point. 'b' > 'a' is true. 'Z' < 'a' is true because uppercase letters have lower codes than lowercase. This matters when sorting text.

## Object comparison
Two objects are NEVER equal even if they look identical: {} === {} is false. Object comparison checks reference (same memory location), not content. To compare objects by value, compare their properties individually or use JSON.stringify — but be aware of edge cases.`,
      level: "beginner",
      tags: ["operators", "comparison", "equality"],
      keyPoints: [
        "> greater than, < less than, >= greater or equal, <= less or equal.",
        "== checks value equality with type coercion — avoid it.",
        "=== strict equality — checks both value AND type.",
        "!= loose inequality, !== strict inequality.",
        "5 == '5' is true (coercion); 5 === '5' is false (different types)."
      ],
      examples: [
        {
          id: "js-relational-basic",
          title: "Comparison operators",
          description: "Using >, <, >=, <=, ==, ===, and !==.",
          language: "javascript",
          code: `let a = 5;
let b = 3;

console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= b);  // true
console.log(a <= b);  // false
console.log(a == b);  // false

// Loose vs strict equality
console.log(5 == '5');  // true  — coercion
console.log(5 === '5'); // false — different types

console.log(a != b);   // true
console.log(a !== b);  // true`
        }
      ]
    },

    {
      id: "js-logical-operators",
      name: "Logical Operators",
      label: "Logical",
      summary:
        "Logical operators combine boolean expressions: && (AND), || (OR), and ! (NOT).",
      details: `## Short-circuit evaluation
JavaScript doesn't evaluate both sides if it doesn't need to. With &&: if the left side is falsy, the right side is never evaluated (because false AND anything is false). With ||: if the left side is truthy, the right side is never evaluated (because true OR anything is true).

## The OR trick for default values
People often write: let name = inputName || 'Guest'. If inputName is falsy (empty, null, undefined), you get 'Guest'. This works but has a flaw: 0 and '' are also falsy, so it replaces those too. Use the nullish coalescing operator ?? to only default on null/undefined: let name = inputName ?? 'Guest'.

## Truthy and falsy values
Any value can be used in a boolean context. Falsy values: false, 0, '', null, undefined, NaN. Everything else is truthy — including empty arrays [] and objects {}, which surprises beginners.

## Double negation !!
Used to explicitly convert a value to a boolean: !!value. !!1 → true, !!0 → false, !!'hello' → true. Useful when you specifically need a boolean, not a truthy/falsy value.`,
      level: "beginner",
      tags: ["operators", "logical", "boolean"],
      keyPoints: [
        "&& (AND) — true only if BOTH operands are true.",
        "|| (OR) — true if AT LEAST ONE operand is true.",
        "! (NOT) — inverts a boolean value.",
        "Short-circuit: && stops at the first false; || stops at the first true.",
        "Combine with relational operators to build conditional logic."
      ],
      examples: [
        {
          id: "js-logical-basic",
          title: "AND, OR, and NOT",
          description: "Combining boolean expressions with logical operators.",
          language: "javascript",
          code: `let x = true;
let y = false;

console.log(x && y); // false — both must be true
console.log(x || y); // true  — at least one is true
console.log(!x);     // false — inverts the value

// Practical example
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Admin dashboard");
} else if (isLoggedIn || isAdmin) {
  console.log("Partial access");
} else {
  console.log("Access denied");
}
// Output: Partial access`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 06 Conditional Operations
    // ─────────────────────────────────────────────────────────
    {
      id: "js-conditionals",
      name: "if / else / else if",
      label: "Conditionals",
      summary:
        "Conditional statements execute different blocks of code based on whether a condition is true or false.",
      details: `## How conditions are evaluated
The expression inside if() doesn't have to be a strict true/false boolean — any truthy or falsy value works. if (user) { } will run if user is not null, undefined, 0, '', or false.

## Only one branch runs
If the first condition matches, JS runs that block and skips ALL other else if and else blocks. Order matters: put the most specific or most likely condition first.

## Ternary operator — the one-liner
For simple cases, you can shorten if/else to one line: let label = isAdmin ? 'Admin' : 'User'. The syntax is: condition ? valueIfTrue : valueIfFalse. Don't nest ternaries — it becomes unreadable quickly.

## Common mistake
Using = (assignment) instead of === (comparison) inside an if condition: if (x = 5) will ALWAYS be truthy and assign 5 to x. Use === to compare.`,
      level: "beginner",
      tags: ["conditionals", "if", "else", "control-flow"],
      keyPoints: [
        "if runs a block when the condition is truthy.",
        "else runs when the if condition is falsy.",
        "else if chains additional conditions to test.",
        "Conditions use relational and logical operators to produce true/false.",
        "Only the first matching branch runs; the rest are skipped."
      ],
      examples: [
        {
          id: "js-conditionals-basic",
          title: "if, else if, and else",
          description: "Controlling program flow based on conditions.",
          language: "javascript",
          code: `// if
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back, user!");
}

// if / else
let isLoggedIn2 = false;
if (isLoggedIn2) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}

// if / else if / else
let isLoggedIn3 = false;
let isAdmin = true;
if (isLoggedIn3) {
  console.log("Welcome back, user!");
} else if (isAdmin) {
  console.log("Welcome, admin!");
} else {
  console.log("Please log in.");
}

// Practical: odd or even
let number = 10;
if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}`
        }
      ]
    },

    {
      id: "js-switch",
      name: "Switch Statement",
      label: "Switch",
      summary:
        "The switch statement is a clean alternative to chains of if/else when comparing a single value against multiple cases.",
      details: `## When to use switch vs if/else
switch is best when a single variable can be one of many specific values. if/else is better when conditions are ranges or complex expressions. switch with 5+ cases is much more readable than a long if/else chain.

## Fall-through behavior
Without a break, execution "falls through" to the next case automatically. This is sometimes used on purpose to group multiple cases that share the same code: case 'Mon': case 'Tue': — but unintentional fall-through is a common bug. Always add break unless you intend to fall through.

## Strict equality (===)
switch uses === to compare, not ==. So switch ('5') with case 5: will not match because '5' !== 5.

## The default keyword
default is optional but a best practice. It acts as a catch-all, similar to the final else in an if/else chain. Conventionally placed at the end, but it can actually appear anywhere in the switch block.`,
      level: "beginner",
      tags: ["switch", "conditionals", "control-flow"],
      keyPoints: [
        "switch(expression) compares the expression against each case using ===.",
        "break ends execution for a case — omitting it causes fall-through to the next case.",
        "default runs when no case matches (like an else).",
        "Useful when one variable can take many specific values."
      ],
      examples: [
        {
          id: "js-switch-basic",
          title: "Switch on day of week",
          description: "Matching a numeric value to named cases with a default fallback.",
          language: "javascript",
          code: `let dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day.");
}
// Output: Wednesday`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 07 String Manipulation
    // ─────────────────────────────────────────────────────────
    {
      id: "js-template-literals",
      name: "Template Literals",
      label: "Template Literals",
      summary:
        "Template literals use backticks and allow embedded expressions, multi-line strings, and a more readable syntax than concatenation.",
      details: `## The backtick character
Template literals use the backtick (\`) character — typically the key in the top-left corner of your keyboard, above Tab. Don't confuse it with a single quote (').

## Expressions inside \${}
You can put any JavaScript expression inside \${}: arithmetic, function calls, ternaries, method calls. The expression is evaluated and its result is inserted into the string.

## Multi-line strings without escape characters
With regular strings you'd need \\n to create a new line: 'Line 1\\nLine 2'. With template literals you just press Enter — the line break is part of the string. This is especially useful for HTML snippets or SQL queries.

## Real-world usage
Template literals are used constantly in JavaScript: building URLs for API requests, creating error messages, generating HTML, and formatting log output. In React, you'll use them for dynamic className strings and style values.`,
      level: "beginner",
      tags: ["strings", "es6", "template-literals"],
      keyPoints: [
        "Use backticks (`) instead of single or double quotes.",
        "Embed any expression with ${expression} — variables, math, function calls.",
        "Supports multi-line strings natively — no \\n needed.",
        "Prefer template literals over + concatenation for readability."
      ],
      examples: [
        {
          id: "js-template-literals-basic",
          title: "Interpolation and multi-line strings",
          description: "Embedding variables and expressions inside strings.",
          language: "javascript",
          code: `let firstName = 'Alice';
let greeting = \`Hello, \${firstName}!\`;
console.log(greeting); // Hello, Alice!

// Multi-line string
let multiLine = \`This is line one.
This is line two.\`;
console.log(multiLine);

// Expression inside template literal
let a = 5;
let b = 10;
let sum = \`The sum of \${a} and \${b} is \${a + b}.\`;
console.log(sum); // The sum of 5 and 10 is 15.`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 08 Loops
    // ─────────────────────────────────────────────────────────
    {
      id: "js-for-loop",
      name: "for Loop",
      label: "for Loop",
      summary:
        "The for loop repeats a block of code a known number of times using an initializer, condition, and increment.",
      details: `## The three parts explained
for (initialization; condition; increment). Initialization runs once at the start. Condition is checked before each iteration — if false, the loop stops. Increment runs after each iteration. All three parts are optional, but omitting the condition creates an infinite loop.

## Why i starts at 0
In programming, arrays are zero-indexed: the first item is at index 0. For loops are designed to work with arrays, so starting the counter at 0 aligns perfectly with array indexing. i < arr.length makes sure you never go past the last element.

## Nested loops
You can put a for loop inside another for loop. The inner loop runs completely for each iteration of the outer loop. This is how you work with grids, matrices, and two-dimensional data. Use different variable names: i for outer, j for inner.

## Infinite loop warning
If your condition never becomes false (e.g. you forgot to increment i), the loop runs forever and crashes the browser tab or terminal. Always double-check your condition and increment.`,
      level: "beginner",
      tags: ["loops", "for", "iteration", "control-flow"],
      keyPoints: [
        "Syntax: for (initialization; condition; increment) { }",
        "Initialization runs once before the loop starts.",
        "Condition is checked before each iteration — loop stops when false.",
        "Increment runs after each iteration.",
        "Use i as the conventional loop counter variable."
      ],
      examples: [
        {
          id: "js-for-loop-basic",
          title: "for loop",
          description: "Printing numbers 1–5 with a classic for loop.",
          language: "javascript",
          code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5`
        }
      ]
    },

    {
      id: "js-while-loop",
      name: "while / do...while",
      label: "while Loop",
      summary:
        "The while loop repeats as long as a condition is true. The do...while variant always executes the body at least once.",
      details: `## When to use while instead of for
Use while when you don't know in advance how many iterations you'll need. Examples: reading input until the user types 'quit', retrying a network request until it succeeds, processing data from a queue until it's empty. Use for when you know the count ahead of time.

## The guaranteed execution of do...while
The key difference: do...while checks the condition at the END, after running the body. This guarantees the body executes at least one time. A classic use case: asking a user for input and validating it — you always need to ask at least once.

## Avoiding infinite loops
Make absolutely sure the condition eventually becomes false. The most common mistake: forgetting to update the variable that the condition checks. Put the update logic (i++) at the end of the loop body and verify it's reached on every iteration.

## while vs forEach
for and while are imperative (you control every step). Array methods like forEach are declarative (you describe what to do, not how to loop). For array traversal, prefer forEach/for...of. Reserve while for non-array, condition-driven loops.`,
      level: "beginner",
      tags: ["loops", "while", "do-while", "iteration"],
      keyPoints: [
        "while checks the condition BEFORE each iteration.",
        "do...while checks the condition AFTER — guarantees at least one execution.",
        "Always ensure the condition eventually becomes false to avoid infinite loops.",
        "Use while when the number of iterations is unknown in advance."
      ],
      examples: [
        {
          id: "js-while-loop-basic",
          title: "while and do...while",
          description: "Two loop variants for condition-driven repetition.",
          language: "javascript",
          code: `// while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Output: 1 2 3 4 5

// do...while — body runs at least once
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
// Output: 1 2 3 4 5`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 09 Objects
    // ─────────────────────────────────────────────────────────
    {
      id: "js-objects",
      name: "Objects",
      label: "Objects",
      summary:
        "Objects store collections of key-value pairs. They are reference types, meaning variables hold a reference to the object in memory, not the value itself.",
      details: `## Objects are like named containers
An object groups related data under one name. Instead of five separate variables (firstName, lastName, age, email, role), you have one person object with all five as properties. This is how most real-world data is structured: API responses, database rows, config settings.

## Dot vs bracket notation
Use dot notation (obj.name) for known property names. Use bracket notation (obj['name']) when the property name is dynamic (stored in a variable) or when it contains special characters or spaces.

## Reference type — the key concept
When you do let b = a where a is an object, b doesn't get a copy — it gets a reference to the SAME object. Changing b.name also changes a.name. This trips up most beginners. To copy an object, use the spread operator: let b = { ...a }.

## Objects vs arrays
Use an object when data has named properties (person.age, user.email). Use an array when data is a list of similar items and order matters. In practice, you'll have arrays of objects constantly: users.map(u => u.name).`,
      level: "beginner",
      tags: ["objects", "reference-types", "key-value"],
      keyPoints: [
        "Create objects with object literal syntax: { key: value }.",
        "Access properties with dot notation (obj.key) or bracket notation (obj['key']).",
        "Both notations are equivalent; use bracket notation for dynamic keys.",
        "Objects are reference types — assigning copies the reference, not the data."
      ],
      examples: [
        {
          id: "js-objects-basic",
          title: "Creating and accessing objects",
          description: "Object literal syntax with dot and bracket notation.",
          language: "javascript",
          code: `let person = {
  name: 'Alice',
  age: 30,
  sex: 'female'
};

// Dot notation
console.log(person.name); // Alice
console.log(person.age);  // 30

// Bracket notation
console.log(person['name']); // Alice`
        }
      ]
    },

    {
      id: "js-working-with-objects",
      name: "Working with Objects",
      label: "Object Methods",
      summary:
        "Objects can be modified after creation — add, update, or delete properties. Use for...in, Object.keys(), Object.values(), and Object.entries() to inspect them.",
      details: `## Adding and updating properties
Objects are mutable by default. You can always add new properties (obj.newProp = value) or update existing ones. The only way to make properties truly immutable is Object.freeze(), which prevents any modifications.

## The delete operator
delete obj.key removes a property entirely — the key no longer exists, and 'key' in obj returns false. Setting a property to null or undefined is different: the key still exists, it just has an empty value.

## Object.keys / values / entries
These are your most useful tools for working with objects:
- Object.keys(obj) → array of property names
- Object.values(obj) → array of property values
- Object.entries(obj) → array of [key, value] pairs

They only return "own" properties (not inherited ones from the prototype chain).

## Destructuring (bonus)
Instead of let name = person.name; let age = person.age; — use destructuring: let { name, age } = person. Much more concise and very common in modern JavaScript and React.`,
      level: "beginner",
      tags: ["objects", "object-methods", "for-in"],
      keyPoints: [
        "Update a property: obj.key = newValue.",
        "Add a new property: obj.newKey = value.",
        "Delete a property: delete obj.key.",
        "Check existence: 'key' in obj.",
        "Object.keys(obj), Object.values(obj), Object.entries(obj) return arrays.",
        "Objects can be nested — properties can hold other objects."
      ],
      examples: [
        {
          id: "js-working-objects-basic",
          title: "Modify, delete, iterate",
          description: "CRUD-style operations on an object plus iteration helpers.",
          language: "javascript",
          code: `let car = { make: 'Toyota', model: 'Camry', year: 2020 };

// Update
car.year = 2021;

// Add new property
car.color = 'red';

// Delete property
delete car.model;

// Check existence
console.log('make' in car);  // true
console.log('model' in car); // false

// Iterate with for...in
for (let key in car) {
  console.log(\`\${key}: \${car[key]}\`);
}

// Object helper methods
console.log(Object.keys(car));    // ['make', 'year', 'color']
console.log(Object.values(car));  // ['Toyota', 2021, 'red']
console.log(Object.entries(car)); // [['make','Toyota'],...]

// Nested object
car.owner = { name: 'John', age: 35 };
console.log(car.owner.name); // John`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 10 Functions
    // ─────────────────────────────────────────────────────────
    {
      id: "js-function-basics",
      name: "Function Basics",
      label: "Functions",
      summary:
        "Functions are reusable blocks of code. They can accept parameters, return values, and have default parameter values.",
      details: `## Why functions?
Without functions you'd copy-paste the same code everywhere. Functions let you write logic once and reuse it anywhere. They also give that logic a name, making your code readable: calculateTax() tells you instantly what it does.

## Hoisting — declarations vs expressions
Function declarations (function name() { }) are hoisted to the top of their scope. You can call them before they appear in the code. This is NOT true for function expressions (let fn = function() { }) or arrow functions (let fn = () => { }).

## Return value
Without a return statement, a function returns undefined. This is a common source of bugs: you calculate a value but forget to return it, and the caller gets undefined. Always check that your function returns what the caller expects.

## Default parameters (ES6)
Default values let functions work without every argument being supplied. function greet(name = 'Guest') handles calls with no argument. Defaults are only used when the argument is undefined — not null.`,
      level: "beginner",
      tags: ["functions", "parameters", "return", "defaults"],
      keyPoints: [
        "Declare with the function keyword: function name(params) { }",
        "Call a function by its name followed by parentheses: name(args).",
        "return sends a value back to the caller.",
        "Parameters can have default values: function greet(name = 'Guest') { }",
        "Functions without a return statement return undefined."
      ],
      examples: [
        {
          id: "js-functions-basic",
          title: "Declaring and calling functions",
          description: "Basic function, returning a value, and default parameters.",
          language: "javascript",
          code: `// No parameters, no return value
function greet() {
  console.log('Hello, World!');
}
greet(); // Hello, World!

// Parameters and return value
function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log('Result:', result); // 8

// Default parameter value
function greetUser(name = 'Guest') {
  console.log(\`Hello, \${name}!\`);
}
greetUser();          // Hello, Guest!
greetUser('Alice');   // Hello, Alice!`
        }
      ]
    },

    {
      id: "js-function-expressions",
      name: "Function Expressions",
      label: "Func Expressions",
      summary:
        "A function expression assigns a function to a variable. It can be anonymous or named and is not hoisted like function declarations.",
      details: `## What's the practical difference?
The only day-to-day difference is when you can use them: function declarations can be called before they appear in the code (hoisting). Function expressions CANNOT — use them before their line and you get a ReferenceError.

## Functions as values (first-class functions)
In JavaScript, functions are values just like numbers and strings. You can store them in variables, put them in arrays, use them as object properties, and pass them to other functions as arguments. This is the foundation of callbacks and event handlers.

## Named vs anonymous
Anonymous functions (function() { }) don't have a name. This makes stack traces harder to read when debugging because the error shows as "anonymous function" instead of a useful name. Naming your function expressions (let handler = function handleClick() { }) helps.

## When to use which
Function declarations for standalone, reusable utilities. Function expressions when you need the function as a value — storing, passing, or returning it.`,
      level: "beginner",
      tags: ["functions", "function-expression", "anonymous"],
      keyPoints: [
        "Assign a function to a variable: let fn = function(a, b) { ... }",
        "Function expressions are NOT hoisted — they must be defined before use.",
        "Anonymous function expressions have no name after the function keyword.",
        "A variable holding a function can be passed around like any value."
      ],
      examples: [
        {
          id: "js-function-expression-basic",
          title: "Anonymous function expression",
          description: "Assigning functions to variables and passing them around.",
          language: "javascript",
          code: `// Anonymous function expression
let divide = function(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
};
console.log(divide(10, 2)); // 5

// Assigning a declared function to a variable
function multiply(a, b) {
  return a * b;
}
let calc = multiply;
console.log(calc(4, 6)); // 24`
        }
      ]
    },

    {
      id: "js-scope",
      name: "Local vs Global Variables",
      label: "Scope",
      summary:
        "Local variables exist only inside the function they are declared in. Global variables are accessible anywhere in the script.",
      details: `## The scope chain
When JavaScript looks up a variable, it first checks the current block, then the outer block, then the outer-outer block, all the way to the global scope. This chain of lookups is the "scope chain". Inner scopes can see outer variables, but not vice versa.

## Why avoid global variables?
Global variables can be read and modified from anywhere in your code. That makes it hard to trace where something changed. In a large codebase with many contributors, globals become a source of subtle bugs. Prefer passing values as function arguments.

## Block scope with let and const
let and const are block-scoped: they live only inside the nearest set of curly braces { }. A variable declared inside an if block doesn't exist outside it. This is much more predictable than var, which ignores blocks and lives in the entire function.

## The best mental model
Think of each function as a room. Variables declared inside the room stay in the room. The room can see into the hallway (outer scope), but hallway can't see inside the room.`,
      level: "beginner",
      tags: ["scope", "local", "global", "variables"],
      keyPoints: [
        "Variables declared with let/const inside a function are local (block-scoped).",
        "Local variables cannot be accessed outside the function — ReferenceError.",
        "Global variables are declared outside all functions and accessible everywhere.",
        "Avoid polluting the global scope; prefer local variables."
      ],
      examples: [
        {
          id: "js-scope-basic",
          title: "Local and global scope",
          description: "Where variables live and where they can be accessed.",
          language: "javascript",
          code: `// Local variable — only accessible inside the function
function localExample() {
  let localVar = 'I am local';
  console.log(localVar); // I am local
}
localExample();
// console.log(localVar); // ❌ ReferenceError

// Global variable — accessible anywhere
let globalVar = 'I am global';
function globalExample() {
  console.log(globalVar); // I am global
}
globalExample();
console.log(globalVar); // I am global`
        }
      ]
    },

    {
      id: "js-arrow-functions",
      name: "Arrow Functions",
      label: "Arrow Functions",
      summary:
        "Arrow functions are a concise ES6 syntax for writing functions. They do not bind their own this.",
      details: `## Concise syntax breakdown
(params) => expression is the shortest form — it has an implicit return. (params) => { statements; return value; } is the block body form needed for multiple statements. Both are equivalent, just different levels of brevity.

## The this difference — the most important one
Regular functions create their own this context. Arrow functions inherit this from wherever they were defined (lexical this). This matters inside objects and React components: if you assign an event handler as an arrow function, this will correctly refer to the outer context. This is why arrow functions are so popular in React.

## When NOT to use arrow functions
- As constructor functions: new (() => {}) throws an error.
- As object methods when you need this to refer to the object.
- When you need the arguments object (arrow functions don't have one).

## Arrow functions in React
You'll write arrow functions constantly in React: event handlers (onClick={() => setCount(c + 1)}), map callbacks (items.map(item => <Item key={item.id} />)), and hooks.`,
      level: "beginner",
      tags: ["functions", "es6", "arrow"],
      keyPoints: [
        "Syntax: (params) => expression or (params) => { block; return value; }",
        "Single expression body: implicit return — no return keyword needed.",
        "Single parameter: parentheses are optional.",
        "No own this — they inherit this from the surrounding scope.",
        "Cannot be used as constructors."
      ],
      examples: [
        {
          id: "js-arrow-basic",
          title: "Arrow function syntax variants",
          description: "Single param, multi-param, block body, and implicit return.",
          language: "javascript",
          code: `// Multi-param, block body
let add = (a, b) => {
  return a + b;
};
console.log(add(5, 3)); // 8

// Single expression — implicit return
let multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // 24

// Single param — parens optional
let double = x => x * 2;
console.log(double(7)); // 14`
        }
      ]
    },

    {
      id: "js-methods",
      name: "Object Methods",
      label: "Methods",
      summary:
        "A method is a function stored as a property of an object. Use the this keyword inside methods to access the object's own properties.",
      details: `## What is this?
this inside a method refers to the object the method belongs to. When you call rectangle.getArea(), this === rectangle inside that function. This lets methods access and use the object's own data without needing it passed as an argument.

## The this trap with arrow functions
Arrow functions don't have their own this — they inherit it from the surrounding scope. If you define a method as an arrow function inside an object literal, this won't refer to the object. Use regular function syntax for object methods that need this.

## Method shorthand (ES6)
Instead of getArea: function() { }, you can write getArea() { } (no function keyword). Both are equivalent, but the shorthand is cleaner and is what you'll see in all modern code.

## Methods in practice
Methods encapsulate behavior that belongs to an object: user.logout(), order.calculateTotal(), form.validate(). This is the foundation of object-oriented programming — grouping data (properties) and behavior (methods) together.`,
      level: "beginner",
      tags: ["functions", "methods", "this", "objects"],
      keyPoints: [
        "Define a method by setting a function as a property value.",
        "this inside a method refers to the object the method belongs to.",
        "Call a method with: object.methodName().",
        "Methods encapsulate behaviour that belongs to an object."
      ],
      examples: [
        {
          id: "js-methods-basic",
          title: "Methods and the this keyword",
          description: "Defining and calling methods that use this to access object data.",
          language: "javascript",
          code: `let rectangle = {
  width: 5,
  height: 3,
  getArea: function() {
    return this.width * this.height;
  },
  getPerimeter: function() {
    return 2 * (this.width + this.height);
  }
};

console.log(rectangle.getArea());      // 15
console.log(rectangle.getPerimeter()); // 16

// Method returning a string description
let laptop = {
  brand: 'Dell',
  model: 'XPS 13',
  getDescription: function() {
    return \`This is a \${this.brand} \${this.model}.\`;
  }
};
console.log(laptop.getDescription()); // This is a Dell XPS 13.`
        }
      ]
    },

    {
      id: "js-constructor-functions",
      name: "Constructor Functions",
      label: "Constructors",
      summary:
        "Constructor functions are templates for creating multiple objects of the same shape. Call them with the new keyword.",
      details: `## What new does behind the scenes
When you call new Person('Alice', 30), JavaScript automatically: (1) creates an empty object {}, (2) sets this to that new object inside the function, (3) runs the function body (which assigns properties), (4) returns the new object. You don't write the return — new handles it.

## Constructor functions vs ES6 classes
ES6 classes (introduced in 2015) are the modern way to do the same thing. Under the hood, classes ARE constructor functions — just with cleaner syntax. In legacy code you'll see constructor functions; in new code you'll see classes.

## The capital letter convention
Naming constructors with a capital letter is a convention to signal to other developers: "this is meant to be called with new, not a regular function". JavaScript does not enforce it, but violating it is confusing.

## Common mistake
Forgetting new and calling the constructor as a regular function: Person('Alice', 30) instead of new Person('Alice', 30). Without new, this refers to the global object and you won't get a new instance. In strict mode ('use strict'), this is undefined and you'll get an error immediately.`,
      level: "beginner",
      tags: ["functions", "constructor", "new", "objects"],
      keyPoints: [
        "Name constructors with a capital letter by convention: function Person() { }",
        "Use new to create an instance: let p = new Person('Alice', 30).",
        "this inside the constructor refers to the newly created object.",
        "Each instance gets its own copy of properties and methods.",
        "Constructors are the predecessor to ES6 classes."
      ],
      examples: [
        {
          id: "js-constructor-basic",
          title: "Constructor function",
          description: "Creating multiple object instances from a single template.",
          language: "javascript",
          code: `function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(\`Hello, I'm \${this.name} and I'm \${this.age}.\`);
  };
}

let person1 = new Person('Alice', 30);
let person2 = new Person('Bob', 25);

person1.greet(); // Hello, I'm Alice and I'm 30.
person2.greet(); // Hello, I'm Bob and I'm 25.`
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // 11 Arrays
    // ─────────────────────────────────────────────────────────
    {
      id: "js-array-basics",
      name: "Array Basics",
      label: "Arrays",
      summary:
        "Arrays are ordered collections of values. They can hold any type, are zero-indexed, and have a length property.",
      details: `## Zero-based indexing
The first element is at index 0, the second at index 1, and so on. The last element is always at arr[arr.length - 1]. This trips up beginners used to counting from 1. Nearly every programming language uses zero-based indexing.

## Arrays are reference types
Like objects, arrays are stored by reference. let b = a gives b a reference to the SAME array. Pushing to b also modifies a. To copy an array, use the spread operator: let b = [...a] (shallow copy).

## Mixed-type arrays
JavaScript arrays can hold any mix of types: numbers, strings, booleans, objects, even other arrays. In practice though, you'll almost always work with arrays of one type. TypeScript enforces this with typed arrays: string[], number[], User[].

## Mutating vs non-mutating methods
Some array methods modify the original (sort, push, pop, reverse). Others return a new array and leave the original unchanged (map, filter, slice). Knowing which is which prevents subtle bugs, especially in React where you should avoid mutating state directly.`,
      level: "beginner",
      tags: ["arrays", "index", "basics"],
      keyPoints: [
        "Create with array literal syntax: let arr = [1, 2, 3].",
        "Array indices start at 0 — first element is arr[0].",
        "Arrays can hold values of any type including objects and other arrays.",
        "arr.length returns the number of elements."
      ],
      examples: [
        {
          id: "js-array-basics-example",
          title: "Creating and accessing arrays",
          description: "Array literals, indexing, and mixed-type arrays.",
          language: "javascript",
          code: `// Array literal
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits.length); // 3

// Array constructor
let numbers = new Array(1, 2, 3);
console.log(numbers); // [1, 2, 3]

// Mixed types
let mixed = ['Hello', 42, true, null, { name: 'Alice' }, [1, 2]];
console.log(mixed); `
        }
      ]
    },

    {
      id: "js-array-iterations",
      name: "Array Iteration",
      label: "Array Iteration",
      summary:
        "JavaScript provides multiple ways to loop through arrays: the classic for loop, for...of, and the forEach() method.",
      details: `## Which iteration method to use?
- for loop: when you need the index or want to break/continue out of the loop.
- for...of: cleaner syntax when you only need the values, no index required.
- forEach: the most idiomatic for simple side effects. Doesn't return anything.
- map/filter/reduce: when you want to transform or process array data into a new result.

## forEach vs map
forEach is for side effects (logging, updating DOM, sending requests). map is for transformations (it returns a new array). Using map when you only want side effects creates a wasted array. Using forEach when you need a result means you can't chain.

## Breaking out of iteration
forEach cannot be stopped with break — it always runs through every element. If you need early termination, use a for loop or for...of (both support break and continue) or Array.some() for boolean short-circuit.

## The index parameter
forEach and map both receive (element, index, array) in their callback. Most of the time you'll only use the first two. The third (the original array) is rarely needed.`,
      level: "beginner",
      tags: ["arrays", "loops", "forEach", "for-of", "iteration"],
      keyPoints: [
        "for loop: access elements by index — useful when you need the index.",
        "for...of loop: cleaner syntax when you only need the value.",
        "forEach(callback): calls the function for each element with (value, index, array).",
        "forEach does not return a value — use map() if you need a new array."
      ],
      examples: [
        {
          id: "js-array-iteration-basic",
          title: "for, for...of, and forEach",
          description: "Three ways to iterate over an array.",
          language: "javascript",
          code: `let fruits = ['apple', 'banana', 'orange'];

// 1. Classic for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(\`Index \${i}: \${fruits[i]}\`);
}

// 2. for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// 3. forEach
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});`
        }
      ]
    },

    {
      id: "js-array-destructuring",
      name: "Array Destructuring",
      label: "Array Destructuring",
      summary:
        "Array destructuring unpacks values from an array into distinct variables in a single, readable statement.",
      details: `## Position-based matching
Array destructuring assigns variables by position. The first variable gets element 0, the second gets element 1, etc. This is different from object destructuring, which matches by property name.

## Skipping elements
A comma with no variable skips that position: const [first, , third] = [1, 2, 3]. Each comma is a placeholder for an element you don't care about.

## The swap trick
Swapping two variables without a temp: [a, b] = [b, a]. This works because the right side creates a new array first, then destructures it into the left side. A one-liner that used to require three lines.

## Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4] gives head = 1 and tail = [2, 3, 4]. The rest element (...) must always be LAST in the destructuring pattern.

## Real-world uses
Destructuring function return values (const [data, error] = await fetchData()), React useState (const [count, setCount] = useState(0)), and route params in frameworks (const [id, name] = [params.id, params.name]).`,
      level: "beginner",
      tags: ["arrays", "destructuring", "es6", "rest"],
      keyPoints: [
        "Match by position: const [a, b, c] = [1, 2, 3].",
        "Skip values with a comma: const [x, , z] = [10, 20, 30].",
        "Collect the rest with ...: const [first, ...rest] = arr.",
        "Provide default values: const [a, b = 10] = [5].",
        "Swap variables without a temp: [a, b] = [b, a]."
      ],
      examples: [
        {
          id: "js-array-destructuring-basic",
          title: "Destructuring patterns",
          description: "Basic, skip, rest, default, swap, and nested destructuring.",
          language: "javascript",
          code: `// Basic
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Skip values
let [x, , z] = [10, 20, 30];
console.log(x, z); // 10 30

// Rest operator
let [first, second, ...rest] = [100, 200, 300, 400, 500];
console.log(first, second, rest); // 100 200 [300, 400, 500]

// Default values
let [num1, num2 = 10] = [5];
console.log(num1, num2); // 5 10

// Swap variables
let p = 'John', q = 'Doe';
[p, q] = [q, p];
console.log(p, q); // Doe John

// Destructure function return value
function getCoords() { return [10, 20]; }
let [xCoord, yCoord] = getCoords();
console.log(xCoord, yCoord); // 10 20`
        }
      ]
    },

    {
      id: "js-array-filter",
      name: "filter()",
      label: "filter",
      summary:
        "filter() creates a new array containing only the elements that pass a test function. The original array is not modified.",
      details: `## Pure function behavior
filter() never modifies the original array — it always returns a brand new array. This makes it safe to use in functional programming and React state updates, where mutating the original would cause bugs.

## The predicate function
The callback passed to filter is called a predicate — a function that returns true or false. Truthy means keep this element, falsy means discard it. Elements are never modified, only included or excluded.

## Empty result
If no elements pass the test, filter returns an empty array [], not null or undefined. Always safe to: array.filter(fn).length and array.filter(fn).map(fn).

## Chaining with map and reduce
filter().map() is one of the most common patterns in JavaScript: filter down to what you want, then transform it. filter().reduce() aggregates the filtered elements. This pipeline style is more readable than nested loops.`,
      level: "beginner",
      tags: ["arrays", "filter", "functional", "higher-order"],
      keyPoints: [
        "Returns a new array — never mutates the original.",
        "The callback receives (element, index, array) and must return true or false.",
        "Elements where the callback returns true are included in the result.",
        "Chain with map() and reduce() for powerful data transformations."
      ],
      examples: [
        {
          id: "js-filter-basic",
          title: "Filtering arrays",
          description: "Filter even numbers and filter by type.",
          language: "javascript",
          code: `let numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filter by type from a mixed array
let mixed = [1, 'hello', 2, 'world', 3, 'js'];
let numbersOnly = mixed.filter(item => typeof item === 'number');
let stringsOnly  = mixed.filter(item => typeof item === 'string');

console.log(numbersOnly); // [1, 2, 3]
console.log(stringsOnly); // ['hello', 'world', 'js']`
        }
      ]
    },

    {
      id: "js-array-map",
      name: "map() & Map object",
      label: "map",
      summary:
        "map() transforms every element in an array and returns a new array of the same length. The Map object stores key-value pairs of any type in insertion order.",
      details: `## Array map()
map() is a transformation: it applies a function to every element and returns a new array of the same length. Input 5 elements, get 5 (transformed) elements out. Use it when you want to convert data: raw API objects to display strings, prices in one currency to another, usernames to uppercase.

## map() in React
In React you'll use map() ALL the time to render lists: {users.map(user => <UserCard key={user.id} user={user} />)}. The key prop is required — React needs it to track which items changed.

## Map object vs arrays
The Map object (capital M) is a separate data structure from arrays. It stores key-value pairs like a regular object, but with important differences: keys can be ANY type (not just strings), Map preserves insertion order, and Map has a built-in size property.

## Map vs Object for key-value data
Use Object when keys are strings and known upfront. Use Map when keys are dynamic, non-string, or you need to iterate in insertion order. Map also has better performance for frequent additions/deletions.`,
      level: "beginner",
      tags: ["arrays", "map", "Map", "functional", "higher-order"],
      keyPoints: [
        "arr.map(fn) — returns a new array with each element transformed by fn.",
        "Always returns the same number of elements as the original array.",
        "Map object: new Map() — keys can be any type, not just strings.",
        "Map preserves insertion order and has a built-in size property.",
        "Chain filter().map() to filter then transform in one pipeline."
      ],
      examples: [
        {
          id: "js-map-array",
          title: "map() on an array",
          description: "Transform elements and chain with filter.",
          language: "javascript",
          code: `// Double every number
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Chaining filter + map + forEach
[42, 23, 16, 15, 8, 4]
  .filter(n => n % 2 === 0)  // [42, 16, 8, 4]
  .map(n => n * 2)            // [84, 32, 16, 8]
  .forEach(n => console.log(n));`
        },
        {
          id: "js-map-object",
          title: "Map object",
          description: "Key-value store that accepts any type as a key.",
          language: "javascript",
          code: `let myMap = new Map();
myMap.set(1,      'one');
myMap.set(2,      'two');
myMap.set('three','three');

console.log(myMap.size); // 3

// Iterate
myMap.forEach((value, key) => {
  console.log(\`\${key} → \${value}\`);
});`
        }
      ]
    },

    {
      id: "js-array-reduce",
      name: "reduce()",
      label: "reduce",
      summary:
        "reduce() accumulates all elements of an array into a single value by applying a reducer function from left to right.",
      details: `## The accumulator pattern
reduce() is the most powerful and flexible array method. It "folds" the entire array into a single result: a sum, a product, a count, an object, even a new array. The accumulator is the running result, and currentValue is the element being processed.

## Always provide an initialValue
The second argument to reduce() is the starting value of the accumulator. Without it, reduce() uses the first element as the initial accumulator and starts from the second element. This works for summing numbers but causes subtle bugs with empty arrays (throws an error) or non-numeric data.

## Building objects with reduce
reduce() can accumulate into an object: arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}). This transforms an array of objects into a lookup map — common for improving performance when you need to find items by ID.

## When to use reduce
reduce() is the tool of last resort — use it when map/filter can't express what you need. Overusing it makes code hard to understand. If your reducer returns an array, consider if filter+map is more readable.`,
      level: "beginner",
      tags: ["arrays", "reduce", "functional", "accumulator"],
      keyPoints: [
        "Signature: arr.reduce((accumulator, currentValue) => ..., initialValue).",
        "The initialValue is the starting value of the accumulator.",
        "Useful for summing, multiplying, building objects, or flattening arrays.",
        "Always provide an initialValue to avoid errors on empty arrays."
      ],
      examples: [
        {
          id: "js-reduce-basic",
          title: "reduce() to sum an array",
          description: "Accumulating a total from all array elements.",
          language: "javascript",
          code: `let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum:', sum); // 15

// Chaining: sum of doubled even numbers
let result = [1, 2, 3, 4, 5, 6, 7, 8]
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log(result); // 40`
        }
      ]
    },

    {
      id: "js-array-set",
      name: "Set",
      label: "Set",
      summary:
        "A Set is a collection of unique values \u2014 it automatically removes duplicates. Use it to deduplicate arrays or perform set operations.",
      details: `## Why Set instead of an array?
Arrays allow duplicates and checking membership requires iterating every element (O(n) time). Set stores only unique values and has() checks are O(1) (instant lookup regardless of size). When you need uniqueness or fast membership testing, Set is the right tool.

## Converting between Set and Array
[...mySet] or Array.from(mySet) converts a Set to an array. new Set(myArray) converts an array to a Set (removing duplicates). This round-trip is the easiest way to deduplicate an array: [...new Set(arr)].

## Set operations
JavaScript's Set doesn't have built-in union/intersection methods (though they're coming in newer specs). The current patterns use spread and filter: union = new Set([...a, ...b]), intersection = filter + has(), difference = filter + !has().

## WeakSet
WeakSet is a related structure that only holds objects and holds them weakly — objects inside a WeakSet can still be garbage collected. Useful for tracking "seen" objects without preventing memory cleanup. Less commonly used than Set.`,
      level: "beginner",
      tags: ["arrays", "Set", "unique", "es6"],
      keyPoints: [
        "new Set([...]) creates a set of unique values from an iterable.",
        "Duplicate values are silently ignored when added.",
        "Convert back to an array with Array.from(set) or [...set].",
        "Set operations: union with spread, intersection and difference with filter + has()."
      ],
      examples: [
        {
          id: "js-set-basic",
          title: "Set — unique values and set operations",
          description: "Deduplication, union, intersection, and difference.",
          language: "javascript",
          code: `// Remove duplicates
let nums = [1, 2, 3, 2, 3];
let unique = new Set(nums);
console.log(unique); // Set {1, 2, 3}

// Convert back to array
let uniqueArr = Array.from(unique);
console.log(uniqueArr); // [1, 2, 3]

// Set operations
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

// Union
let union = new Set([...setA, ...setB]);
console.log(union); // {1, 2, 3, 4, 5, 6}

// Intersection
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // {3, 4}

// Difference (A - B)
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // {1, 2}`
        }
      ]
    }
  ]
};
