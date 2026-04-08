// src/data/stacks/java/oop.ts
import type { CheatSection } from "../../../core/cheatsheet-types";

export const javaOopSection: CheatSection = {
  id: "java-oop",
  slug: "oop",
  name: "OOP",
  shortName: "OOP",
  description:
    "Object-Oriented Programming in Java: classes, inheritance, interfaces, and generics.",
  items: [
    {
      id: "java-classes-objects",
      name: "Classes & Objects",
      label: "Classes",
      summary:
        "A class is a blueprint for objects. It bundles state (fields) and behaviour (methods) together.",
      level: "beginner",
      tags: ["class", "object", "constructor", "encapsulation"],
      keyPoints: [
        "Fields hold state; methods define behaviour.",
        "Use private fields with public getters/setters to enforce encapsulation.",
        "The constructor initialises an object — use this.field = param to assign.",
        "@Override toString() for readable debug output.",
        "Record (Java 16+) is a compact, immutable class for data carriers."
      ],
      examples: [
        {
          id: "java-classes-basic",
          title: "Class definition and instantiation",
          description: "A full class with constructor, getters, and toString.",
          language: "java",
          code: `public class Person {
    // Fields (private — encapsulated)
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age  = age;
    }

    // Getter
    public String getName() { return name; }
    public int    getAge()  { return age;  }

    // Setter with validation
    public void setAge(int age) {
        if (age < 0) throw new IllegalArgumentException("Age cannot be negative");
        this.age = age;
    }

    // Override toString for readable output
    @Override
    public String toString() {
        return name + " (age " + age + ")";
    }
}

// Instantiation
Person p = new Person("Ehsan", 30);
System.out.println(p);            // Ehsan (age 30)
System.out.println(p.getName());  // Ehsan

// Java 16+ Record (compact data class)
record Point(int x, int y) {}

Point pt = new Point(3, 4);
System.out.println(pt);       // Point[x=3, y=4]
System.out.println(pt.x());   // 3`
        }
      ]
    },

    {
      id: "java-inheritance",
      name: "Inheritance",
      label: "Inheritance",
      summary:
        "A subclass extends a superclass to inherit its fields and methods and can override behaviour.",
      level: "beginner",
      tags: ["inheritance", "extends", "override", "polymorphism"],
      keyPoints: [
        "Use extends to inherit from one class (Java is single-inheritance).",
        "Call super() in the constructor to invoke the parent constructor.",
        "@Override marks a method that replaces a parent implementation.",
        "Polymorphism: a parent reference can point to a child instance.",
        "final class prevents subclassing; final method prevents overriding."
      ],
      examples: [
        {
          id: "java-inheritance-basic",
          title: "Class hierarchy with polymorphism",
          description: "Animal base class extended by Dog and Cat.",
          language: "java",
          code: `public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public String speak() {
        return name + " makes a sound.";
    }

    @Override
    public String toString() { return getClass().getSimpleName() + "(" + name + ")"; }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name); // call parent constructor
    }

    @Override
    public String speak() {
        return name + " barks! 🐶";
    }
}

public class Cat extends Animal {
    public Cat(String name) { super(name); }

    @Override
    public String speak() {
        return name + " meows! 🐱";
    }
}

// Polymorphism: Animal reference, runtime type determines speak()
Animal[] animals = { new Dog("Rex"), new Cat("Whiskers"), new Dog("Buddy") };

for (Animal a : animals) {
    System.out.println(a.speak());
}
// Rex barks! 🐶
// Whiskers meows! 🐱
// Buddy barks! 🐶`
        }
      ]
    },

    {
      id: "java-interfaces",
      name: "Interfaces",
      label: "Interfaces",
      summary:
        "Interfaces define a contract of methods that implementing classes must fulfil. A class can implement multiple interfaces.",
      level: "intermediate",
      tags: ["interface", "implements", "contract", "abstraction"],
      keyPoints: [
        "All methods in an interface are implicitly public and abstract (unless default/static).",
        "A class can implement multiple interfaces — Java's answer to multiple inheritance.",
        "default methods (Java 8+) provide optional implementations in the interface.",
        "Functional interface: exactly one abstract method — used with lambdas.",
        "Use interfaces to depend on abstractions, not concrete classes."
      ],
      examples: [
        {
          id: "java-interfaces-basic",
          title: "Interface, default method, and lambda",
          description: "Defining a contract and implementing it in multiple classes.",
          language: "java",
          code: `// Interface (contract)
public interface Describable {
    String describe(); // abstract — must be implemented

    // Default method — optional override
    default void print() {
        System.out.println(describe());
    }
}

// Functional interface (one abstract method → usable as lambda)
@FunctionalInterface
public interface Transformer<T> {
    T transform(T input);
}

// Implementing class
public class Product implements Describable {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name  = name;
        this.price = price;
    }

    @Override
    public String describe() {
        return name + " @ €" + price;
    }
}

// Usage
Product p = new Product("Laptop", 999.0);
p.print();  // Laptop @ €999.0

// Lambda satisfies functional interface
Transformer<String> upper = s -> s.toUpperCase();
System.out.println(upper.transform("hello")); // HELLO

// Method reference
Transformer<String> trim = String::trim;
System.out.println(trim.transform("  spaces  ")); // "spaces"`
        }
      ]
    },

    {
      id: "java-generics",
      name: "Generics",
      label: "Generics",
      summary:
        "Generics let you write type-safe reusable classes and methods that work with any type.",
      level: "intermediate",
      tags: ["generics", "type-safety", "collections"],
      keyPoints: [
        "Generic class: class Box<T> { T value; }",
        "Generic method: <T extends Comparable<T>> T max(T a, T b).",
        "Bounded wildcards: List<? extends Number> (covariant, read-only).",
        "Type erasure: generic type info is removed at compile time.",
        "Generics prevent ClassCastException that raw types would allow."
      ],
      examples: [
        {
          id: "java-generics-basic",
          title: "Generic class and bounded method",
          description: "Type-safe box, generic max utility, and bounded wildcard sum.",
          language: "java",
          code: `import java.util.List;

// Generic class
public class Box<T> {
    private T value;

    public Box(T value)  { this.value = value; }
    public T get()       { return value; }

    @Override
    public String toString() { return "Box[" + value + "]"; }
}

// Generic method with bound
public static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

// Bounded wildcard — works for any Number subtype (read-only)
public static double sum(List<? extends Number> list) {
    return list.stream().mapToDouble(Number::doubleValue).sum();
}

// Usage
Box<String>  strBox = new Box<>("Hello");
Box<Integer> intBox = new Box<>(42);

System.out.println(strBox); // Box[Hello]
System.out.println(intBox); // Box[42]

System.out.println(max(3, 7));            // 7
System.out.println(max("apple", "fig"));  // fig

List<Integer> ints    = List.of(1, 2, 3, 4);
List<Double>  doubles = List.of(1.5, 2.5);
System.out.println(sum(ints));    // 10.0
System.out.println(sum(doubles)); // 4.0`
        }
      ]
    },

    {
      id: "java-abstract-classes",
      name: "Abstract classes",
      label: "Abstract",
      summary:
        "Abstract classes can provide partial implementations. They sit between concrete classes and pure interfaces.",
      level: "intermediate",
      tags: ["abstract", "template-method", "inheritance"],
      keyPoints: [
        "Declare with abstract class; cannot be instantiated directly.",
        "Can have both abstract (no body) and concrete (with body) methods.",
        "Can hold state (fields), unlike interfaces.",
        "Template Method pattern: define algorithm skeleton, let subclasses fill in steps.",
        "Use when sharing code between related classes, not just defining a contract."
      ],
      examples: [
        {
          id: "java-abstract-basic",
          title: "Abstract class — Template Method",
          description: "A shared workflow where each step can be customised.",
          language: "java",
          code: `public abstract class DataExporter {

    // Template method: final = cannot be overridden
    public final void export(List<?> data) {
        List<String> prepared = prepareData(data);
        String output = formatOutput(prepared);
        writeOutput(output);
    }

    // Abstract — subclasses must implement
    protected abstract List<String> prepareData(List<?> raw);
    protected abstract String formatOutput(List<String> rows);

    // Concrete with default implementation (overridable)
    protected void writeOutput(String output) {
        System.out.println(output);
    }
}

public class CsvExporter extends DataExporter {
    @Override
    protected List<String> prepareData(List<?> raw) {
        return raw.stream().map(Object::toString).collect(Collectors.toList());
    }

    @Override
    protected String formatOutput(List<String> rows) {
        return String.join(",", rows);
    }
}

// Usage
DataExporter exporter = new CsvExporter();
exporter.export(List.of("Alice", "Bob", "Charlie"));
// Prints: Alice,Bob,Charlie`
        }
      ]
    }
  ]
};
