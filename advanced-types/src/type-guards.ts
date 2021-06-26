/**
 * Learn about: type guards of
 * - primitive types
 * - object types
 * - object of class
 */

console.log("============== Type guard ==============");

// use 'typeof' to check primitive type

function addNumberOrString(arg1: number | string, arg2: number | string) {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    return arg1 + arg2;
  } else {
    return arg1.toString() + arg2.toString();
  }
}

//========================================================
// use <key> in <object> to check type of object

type Pizza = {
  topping: string[];
  price: number;
};

type Humberger = {
  ingredients: string[];
  price: number;
};

type FastFood = Pizza | Humberger;

function orderFastFood(food: FastFood) {
  if ("topping" in food) {
    console.log("Ordering pizza");
  } else if ("ingredients" in food) {
    console.log("Ordering humberger");
  }
}

const aPizza: Pizza = {
  topping: ["sea food"],
  price: 20,
};
orderFastFood(aPizza); // Ordering pizza

const aHumberger: Humberger = {
  ingredients: ["meet"],
  price: 5,
};
orderFastFood(aHumberger); // Ordering humberger

//========================================================
// use 'instanceof' to check type of a class (not interface)

class Truck {
  drive() {
    console.log("Truck drives");
  }

  loadCargo() {
    console.log("Loading cargo");
  }
}

class Car {
  drive() {
    console.log("Car drives");
  }
}

type Vehicle = Truck | Car;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1); // Car drives
useVehicle(v2); // Truck drives, Loading cargo
