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
