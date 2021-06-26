/**
 * Learn about:
 * - How to declare class inheritance
 * - Protected modifier
 * - Method override
 * - Abstract class
 */

console.log("");
console.log("============== Inheritance ==============");

// declare abstract class with abstract keyword
abstract class Shape {
  // protected modifier
  constructor(protected name: string, protected color: string) {}

  // abstract method with abstract keyword
  abstract draw(this: Shape): void;
}

class Circle extends Shape {
  constructor(color: string, private radius: number) {
    // call super class constructor
    super("Circle", color);
  }

  // override draw from super class
  draw(this: Circle) {
    console.log(
      `Draw circle with color ${this.color} and radius ${this.radius}`
    );
  }

  // other method in sub-class
  printInfo(this: Circle) {
    console.log("A circle with radius " + this.radius);
  }
}

class UnknownShape extends Shape {
  constructor() {
    super("Unknow", "no-color");
  }

  // override draw from super class
  draw(this: UnknownShape) {
    console.log(`Unknow shape to draw`);
  }

  changeToAnotherShape(newShapeName: string) {
    // can override protected field
    this.name = newShapeName;
  }
}

// const aShape = new Shape("Hexagon", "white");, ERROR, cannot instantiate abstract class

const circle = new Circle("black", 20);
circle.draw(); // Draw circle with color black and radius 20
circle.printInfo(); // A circle with radius 20

const unknowShape = new UnknownShape();
unknowShape.draw(); // Unknow shape to draw
unknowShape.changeToAnotherShape("Elipse");
