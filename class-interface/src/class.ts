/**
 * Learn about:
 * - How to declare a class
 * - Public/private modifiers
 * - Shorthand intialization
 * - Readonly field
 * - Getter/setter
 * - Static field/method
 */

console.log("============== Class declaration ==============");

class Department {
  // default modifier is 'public'
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log("Department: " + this.name);
  }

  // To be more precise, adding 'this' to parameter to force type checking
  // when call this method, we can omit 'this' parameter
  printName(this: Department) {
    console.log(this.name);
  }
}

const logisticsDepartment = new Department("Logistics");
logisticsDepartment.describe(); // Department: Logistics
logisticsDepartment.printName(); // Logistics
// can access public field
logisticsDepartment.name = "New Logistics";
logisticsDepartment.printName(); // New Logistics

// copyLogisticsDepartment doesn't have 'name'
const copyLogisticsDepartment = { describe: logisticsDepartment.describe };
copyLogisticsDepartment.describe(); // Department: undefined
// copyLogisticsDepartment.printName(); ERROR, because copyLogisticsDepartment is not Department

// accountingDepartment has all properties of Department
// Typescript understands it is Department
const accountingDepartment = {
  name: "Accounting",
  describe: logisticsDepartment.describe,
  printName: logisticsDepartment.printName,
};
accountingDepartment.describe(); // Department: Accounting
accountingDepartment.printName(); // Accounting

//========================================================

class Employee {
  // static field
  static MAX_AGE: number = 50;
  //   private id: string;
  //   private name: string;

  // Shorthand declare fields in constructor
  // we can omit field declaration above, and field assignment in constructor
  // readonly field is kinda constant, cannot change
  constructor(
    private readonly id: string,
    private name: string,
    private activity: string[] = [] // default value
  ) {
    // this.id = id;
    // this.name = name;
  }

  // static method
  static createEmployee(name: string) {
    return new Employee(Math.random().toString(), name);
  }

  changeName(newName: string) {
    // this.id = "new Id"; ERROR, because id is readonly field
    this.name = newName;
  }

  printInfo() {
    console.log(`Id: ${this.id}, Name: ${this.name}`);
  }

  // getter
  get lastActivity() {
    if (this.activity.length > 0) {
      return this.activity[this.activity.length - 1];
    }

    return "No acitivty found!";
  }

  set lastActivity(activity: string) {
    if (activity.trim() === "") {
      throw new Error("Invalid activity");
    }

    this.activity.push(activity);
  }
}

const employee1 = new Employee("e1", "Tan");
employee1.changeName("Tan cute");
// employee1.name; ERROR, cannot access private field

// call getter like access a public field
console.log(employee1.lastActivity); // "No acitivty found!"

// call getter like assign a public field
// employee1.lastActivity = "    "; // ERROR thrown, due to empty activity
employee1.lastActivity = "Finish task 1";
console.log(employee1.lastActivity); // Finish task 1

// call static method from class
const employee2 = Employee.createEmployee("Trang");
employee2.printInfo(); // Id: 0.7905800725120038, Name: Trang

// call static field from class
console.log(Employee.MAX_AGE); // 50
