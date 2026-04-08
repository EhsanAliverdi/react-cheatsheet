// src/data/stacks/java/core.ts
import type { CheatSection } from "../../../core/cheatsheet-types";

export const javaCoreSection: CheatSection = {
  id: "java-core",
  slug: "core",
  name: "Core Java",
  shortName: "Core",
  description:
    "Variables, primitive types, control flow, arrays, and methods — the building blocks of every Java program.",
  items: [
    {
      id: "java-variables-types",
      name: "Variables & data types",
      label: "Variables",
      summary:
        "Java is statically typed: every variable must declare its type. Use var (Java 10+) for local type inference.",
      details: `## Why is Java statically typed?
Unlike JavaScript, Java requires you to declare the type of every variable. This catches type mismatches at compile time rather than at runtime. If you try to store "hello" in an int, the code simply will not compile — the bug is found before the program ever runs.

## The eight primitive types
Java has exactly 8 built-in primitive types: int (32-bit integer), long (64-bit integer), double (64-bit float), float (32-bit float), boolean (true/false), char (single character), byte (8-bit integer), short (16-bit integer).

## Primitives vs Reference types
- Primitives: stored directly in memory, no garbage collection, very fast
- Reference types (String, Object, arrays): stored as pointers, managed by the garbage collector

## var for type inference (Java 10+)
var lets the compiler figure out the type from the initialiser. var count = 0 becomes int, var name = "Alice" becomes String. Only works for local variables — not for fields or method parameters.

## String is special
String is a class, not a primitive. Strings are immutable — every "modification" returns a new String object. For building strings in a loop, use StringBuilder to avoid creating large numbers of temporary String objects.`,
      level: "beginner",
      tags: ["variables", "types", "primitives"],
      keyPoints: [
        "Eight primitives: byte, short, int, long, float, double, boolean, char.",
        "Reference types: String, arrays, and all class/interface instances.",
        "var infers the type from the initialiser (local variables only, Java 10+).",
        "final prevents reassignment — equivalent to const in JS/TS.",
        "String is immutable; use StringBuilder for repeated concatenation."
      ],
      examples: [
        {
          id: "java-variables-basic",
          title: "Primitive and reference types",
          description: "Declaring and initialising variables in Java.",
          language: "java",
          code: `// Primitive types
int    age     = 30;
double pi      = 3.14159;
boolean active = true;
char   initial = 'E';
long   bigNum  = 10_000_000_000L; // underscore separator for readability

// Reference types
String name    = "Ehsan";
int[]  scores  = {95, 87, 92};

// Type inference (Java 10+)
var greeting = "Hello, " + name;    // inferred as String
var total    = scores[0] + scores[1]; // inferred as int

// final (constant)
final double TAX_RATE = 0.19;

System.out.println(greeting);  // Hello, Ehsan
System.out.println(total);     // 182`
        }
      ]
    },

    {
      id: "java-control-flow",
      name: "Control flow",
      label: "Control Flow",
      summary:
        "if/else, switch expressions, and loops (for, while, for-each) control program execution order.",
      details: `## if/else — the basics
if (condition) { } else if (condition) { } else { } works like most languages. The condition must evaluate to a boolean. Unlike C or JavaScript, Java does not coerce integers — if (1) {} is a compile error.

## Switch expressions (Java 14+) — the modern way
The old switch statement had fall-through bugs. The new switch EXPRESSION uses -> arrows, has no fall-through, and can return a value you assign to a variable. Prefer it for multi-branch logic.

## The three loop types
- for loop: when you know the number of iterations in advance
- while loop: when you don't know the count but know the stopping condition
- for-each loop: always use this for iterating over collections — cleaner and less error-prone

## break and continue
- break: exits the current loop entirely
- continue: skips to the start of the next iteration
- Labelled break (break outer;): exits a specifically named outer loop — useful for nested loops

## Pattern matching in switch (Java 21+)
Modern Java supports pattern matching in switch cases, letting you match on types and conditions together: case Integer i when i > 0 -> ...`,
      level: "beginner",
      tags: ["control-flow", "if", "switch", "loops"],
      keyPoints: [
        "switch expression (Java 14+) uses -> arrows and is an expression, not a statement.",
        "for-each (enhanced for) is the idiomatic way to iterate collections.",
        "break with a label exits nested loops.",
        "Prefer switch expressions over chains of if/else for multi-branch logic."
      ],
      examples: [
        {
          id: "java-control-flow-basic",
          title: "if, switch expression, for-each",
          description: "Modern control-flow syntax in Java 14+.",
          language: "java",
          code: `int score = 85;

// Traditional if-else
String grade;
if      (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else                  grade = "F";

// Switch expression (Java 14+)
String label = switch (grade) {
    case "A" -> "Excellent";
    case "B" -> "Good";
    case "C" -> "Average";
    default  -> "Needs improvement";
};

System.out.println(grade + " — " + label); // B — Good

// for loop (traditional)
for (int i = 0; i < 3; i++) {
    System.out.println("i = " + i);
}

// for-each loop
String[] langs = {"Java", "JavaScript", "TypeScript"};
for (String lang : langs) {
    System.out.println("» " + lang);
}

// while loop
int n = 0;
while (n < 3) {
    System.out.println("n = " + n++);
}`
        }
      ]
    },

    {
      id: "java-arrays-collections",
      name: "Arrays & Collections",
      label: "Arrays",
      summary:
        "Java arrays have a fixed size. Use ArrayList for a dynamic list or HashMap for key-value pairs.",
      details: `## Arrays: simple but rigid
Java arrays are fixed-size — you declare the size at creation and cannot change it. int[] scores = new int[5] creates exactly 5 slots. Arrays are ideal for performance-critical code where the size is known upfront.

## ArrayList: the everyday dynamic list
ArrayList is a resizable array under the hood. It doubles its internal capacity automatically when full. Use it for most "list of things" needs. Declare it as List<String> not ArrayList<String> — programming to interfaces makes code easier to change later.

## HashMap: lightning-fast lookups
HashMap stores key to value pairs with O(1) average lookup time. Perfect for caches, counters by category, and grouping data by a key. Keys must implement equals() and hashCode() correctly.

## The Collections hierarchy to know
- List (ordered, allows duplicates): ArrayList, LinkedList
- Set (no duplicates): HashSet, LinkedHashSet, TreeSet (sorted)
- Map (key to value): HashMap, LinkedHashMap, TreeMap (sorted by key)

## Streams — the modern way to process data
Java 8 Streams let you chain filter, map, sorted, and collect operations in a clean pipeline. They do not modify the original collection and can be easily parallelised with parallelStream().`,
      level: "beginner",
      tags: ["arrays", "arraylist", "collections"],
      keyPoints: [
        "Arrays: fixed-size, zero-indexed, declared with type[].",
        "ArrayList<T>: resizable list backed by an array.",
        "HashMap<K,V>: unordered key → value map.",
        "Use List.of() / Map.of() for immutable collections (Java 9+).",
        "Streams (Java 8+) provide functional-style operations on collections."
      ],
      examples: [
        {
          id: "java-arrays-collections-basic",
          title: "Array, ArrayList, and Streams",
          description: "Fixed array, dynamic list, and stream pipeline.",
          language: "java",
          code: `import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

// Fixed-size array
String[] languages = {"Java", "Python", "TypeScript"};
System.out.println(languages[0]);      // Java
System.out.println(languages.length);  // 3

// Dynamic list
List<String> stacks = new ArrayList<>();
stacks.add("React");
stacks.add("Spring Boot");
stacks.add("PostgreSQL");
stacks.remove("React");

System.out.println(stacks); // [Spring Boot, PostgreSQL]

// Streams (Java 8+)
List<String> allStacks = List.of("React", "Angular", "Vue", "Svelte");

List<String> filtered = allStacks.stream()
    .filter(s -> s.startsWith("A") || s.startsWith("V"))
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());

System.out.println(filtered); // [ANGULAR, VUE]`
        }
      ]
    },

    {
      id: "java-methods",
      name: "Methods",
      label: "Methods",
      summary:
        "Methods encapsulate reusable logic. Java supports overloading, varargs, and from Java 8 default interface methods.",
      details: `## What is a method?
A method is a named block of code that does one specific thing. It can accept inputs (parameters) and return an output (return type). Good methods are small, do exactly one thing, and have a descriptive verb-based name.

## Access modifiers
- public: any code in any class can call it
- private: only this class can call it
- protected: this class and its subclasses can call it
- static: belongs to the class itself, not a specific instance — call it as ClassName.method()

## Method overloading
Java lets you define multiple methods with the same name as long as their parameter lists differ (different types or different number of parameters). The compiler picks the right one based on the arguments you pass at the call site.

## Varargs — flexible argument count
void log(String... messages) accepts zero or more String arguments. Inside the method, messages is treated as a String[] array. Useful for utility methods like log formatters and builders.

## Return types
- void: method returns nothing
- Specific type: method must return that type in every code path
- From Java 8 onward, consider returning Optional<T> instead of null to force callers to handle the absent-value case explicitly.`,
      level: "beginner",
      tags: ["methods", "overloading", "varargs"],
      keyPoints: [
        "Method signature: <modifiers> <returnType> <name>(<params>).",
        "Overloading: same method name, different parameter types/counts.",
        "Varargs: void log(String... messages) — treated as an array inside.",
        "static methods belong to the class, not an instance.",
        "void means the method returns nothing."
      ],
      examples: [
        {
          id: "java-methods-basic",
          title: "Overloading, varargs, and static",
          description: "Different forms of method definition in one class.",
          language: "java",
          code: `public class MathUtils {

    // Instance method
    public int add(int a, int b) {
        return a + b;
    }

    // Overloaded: same name, different types
    public double add(double a, double b) {
        return a + b;
    }

    // Varargs
    public int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) total += n;
        return total;
    }

    // Static utility method
    public static int square(int n) {
        return n * n;
    }
}

// Usage:
MathUtils m = new MathUtils();
System.out.println(m.add(3, 4));        // 7
System.out.println(m.add(1.5, 2.5));    // 4.0
System.out.println(m.sum(1, 2, 3, 4));  // 10
System.out.println(MathUtils.square(5)); // 25`
        }
      ]
    },

    {
      id: "java-string-api",
      name: "String API",
      label: "Strings",
      summary:
        "String is immutable in Java. Use the rich String API for common operations and StringBuilder for concatenation-heavy code.",
      details: `## String immutability
Every time you "modify" a String in Java, you are actually creating a new String object. The original is unchanged. This is safe and thread-friendly but means repeated concatenation in a loop creates many temporary objects.

## Common String methods to know
- length(): returns number of characters
- charAt(i): character at index i
- substring(start, end): extracts a portion
- contains(), startsWith(), endsWith(): boolean checks
- trim() / strip(): removes leading/trailing whitespace (strip() is Unicode-aware)
- split(regex): splits into a String array
- replace(old, new): replaces all occurrences
- toUpperCase() / toLowerCase()

## String comparison
Never use == to compare String values. == checks reference equality (are they the same object in memory). Use .equals() for content equality and .equalsIgnoreCase() for case-insensitive comparison.

## StringBuilder for efficient concatenation
For building strings in a loop or with many concatenations, use StringBuilder instead. It is mutable and avoids creating intermediate String objects:
new StringBuilder().append("Hello").append(" ").append(name).toString()

## Text blocks (Java 15+)
Text blocks use triple quotes and preserve multi-line formatting, ideal for SQL, JSON, and HTML templates embedded in Java code.`,
      level: "beginner",
      tags: ["strings", "api", "immutable"],
      keyPoints: [
        "String is immutable — every operation returns a new String.",
        "Common methods: length(), charAt(), substring(), split(), trim(), toUpperCase().",
        "String.format(\"%s is %d\", name, age) — traditional formatting.",
        "Text blocks (Java 15+) for multi-line strings without \\n.",
        "StringBuilder is mutable and efficient for loops with concatenation."
      ],
      examples: [
        {
          id: "java-string-api-basic",
          title: "Common String methods",
          description: "Core String API methods used in everyday Java.",
          language: "java",
          code: `String s = "  Hello, World!  ";

System.out.println(s.trim());                // "Hello, World!"
System.out.println(s.trim().toLowerCase());  // "hello, world!"
System.out.println(s.contains("World"));     // true
System.out.println(s.replace("World", "Java")); // "  Hello, Java!  "
System.out.println(s.trim().split(", ").length); // 2

// String.format
String name = "Ehsan";
int age = 30;
String info = String.format("%s is %d years old.", name, age);
System.out.println(info); // Ehsan is 30 years old.

// Text block (Java 15+)
String json = """
    {
      "name": "Ehsan",
      "role": "dev"
    }
    """;
System.out.println(json);

// StringBuilder for efficient concatenation
StringBuilder sb = new StringBuilder();
for (int i = 1; i <= 5; i++) {
    sb.append("item").append(i).append(", ");
}
System.out.println(sb.toString()); // item1, item2, item3, item4, item5,`
        }
      ]
    }
  ]
};
