/**
 * Learn about:
 * - How to declare interface
 * - Use interface with class
 * - Readonly properties in interface
 * - Interface extend interface
 * - Interface as function types
 * - Optional parameters and properties
 */

console.log("");
console.log("============== Interface ==============");

interface Greetable {
  // cannot use public/private modifier on fields on interface
  readonly name: string;

  greet(phrase: string): void;
}

let user1: Greetable;
user1 = {
  name: "Tan",
  //   age: 26, ERROR, not interface Greetable
  greet(phrase: string) {
    console.log(phrase + " I'm " + this.name);
  },
};

user1.greet("Hello everyone!"); // Hello everyone! I'm Tan

//========================================================

class Person implements Greetable {
  //   name: string;

  constructor(public name: string, private age: number) {
    // this.name = name;
  }

  greet(phrase: string): void {
    console.log(`${phrase} I'm ${this.name} and I'm ${this.age} years old`);
  }
}

const user2 = new Person("Trang", 25);
user2.greet("Hello!"); // Hello! I'm Trang and I'm 25 years old
// user2 is created directly from Person, so, readonly on 'name' is not respected
user2.name = "Trang cute"; // No error
user2.greet("Hello!"); // Hello! I'm Trang cute and I'm 25 years old

let user3: Greetable;
user3 = new Person("My Duyen", 18);
// user3 is declared as Greetable, readonly on 'name' is respected
// user3.name = "Anh Tai"; // ERROR, readonly 'name' cannot be changed

//========================================================

// Syntax is the same to Java

interface WithColor {
  color: string;

  paint(): void;
}

interface Deletable {
  delete(): void;
}

interface Drawable extends WithColor, Deletable {
  shape: string;

  draw(): void;
}

class Rectangle implements Drawable {
  shape = "Rectangle";

  constructor(public color: string) {}

  draw(): void {
    console.log("Draw " + this.shape);
  }

  paint(): void {
    console.log("Paint " + this.shape + " with color " + this.color);
  }

  delete(): void {
    console.log("Delete this " + this.shape);
  }
}

const rectangle1 = new Rectangle("white");
rectangle1.draw(); // Draw Rectangle
rectangle1.paint(); // Paint Rectangle with color white
rectangle1.delete(); // Delete this Rectangle

//========================================================

// declare function type
type AddFn = (n1: number, n2: number) => number;

let add1: AddFn;
add1 = (n1: number, n2: number) => {
  const result = n1 + n2;
  console.log(result);
  return result;
};

// declare interface as function type
// same concept to FunctionalInterface in Java
interface IAddFn {
  (n1: number, n2: number): number;
}

let add2: IAddFn;
add2 = (n1: number, n2: number) => {
  const result = n1 + n2;
  console.log(result);
  return result;
};

//========================================================

interface Printable {
  // Optional field
  prefix?: string;

  print(): void;

  // Optional method
  clear?(): void;
}

class Printer implements Printable {
  prefix?: string;

  // Optional parameters
  // Can have default value, e.g: p: string = 'Empty'
  constructor(p?: string) {
    if (p) {
      this.prefix = p;
    }
  }

  print(): void {
    if (this.prefix) {
      console.log(this.prefix + " - printing something");
    } else {
      console.log("printing something");
    }
  }

  // don't have to implement optional method: clear()
}

// new instance with no prefix
const printer1 = new Printer();
printer1.print(); // printing something

const printer2 = new Printer("Printer 2");
printer2.print(); // Printer 2 - printing something
