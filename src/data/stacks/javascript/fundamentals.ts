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
        "A Set is a collection of unique values — it automatically removes duplicates. Use it to deduplicate arrays or perform set operations.",
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
