export const LANGUAGES_VERSION = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    // python: "3.10.0",
    java: "15.0.2",
    php: "8.2.3",
    csharp: "6.12.0",
  };
  
  export const CODE_SNIPPETS = {
    javascript: `// JavaScript Example
    function greet(name) {
      return \`Hello, \${name}!\`;
    }
    console.log(greet("World"));`,
  
    typescript: `// TypeScript Example
    function greet(name: string): string {
      return \`Hello, \${name}!\`;
    }
    console.log(greet("World"));`,
  
    python: `# Python Example
    def greet(name):
        return f"Hello, {name}!"
    print(greet("World"))`,
  
    java: `// Java Example
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }`,
  
    php: `<?php
    // PHP Example
    function greet($name) {
        return "Hello, " . $name . "!";
    }
    echo greet("World");
    ?>`,
  
    csharp: `// C# Example
    using System;
    
    class Program {
        static void Main() {
            Console.WriteLine("Hello, World!");
        }
    }`,
  };
  