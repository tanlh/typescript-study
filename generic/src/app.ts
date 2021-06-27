//========================================================
// Introduction about generic

const names: Array<string> = []; // equals string[]

const promise: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("String");
  }, 1000);
});
promise.then((data) => data.split(" "));

//========================================================
// Generic function

// no constraint
function merge1<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj1 = merge1({ name: "Tan" }, { age: 26 });
console.log(mergeObj1); // {name: 'Tan', age: 26}
console.log(mergeObj1.name); // Tan

const mergeObj2 = merge1({ name: "Trang" }, 26);
console.log(mergeObj2); // {name: 'Trang'}

// with constraint
// T, U must be object
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj3 = merge2({ name: "Trang" }, { age: 25 });
console.log(mergeObj3); // {name: 'Trang', age: 25}

// const mergeObj4 = merge2({ name: "Trang cute" }, 20); ERROR, 20 is not an object

// constraint with 'keyof'
// U is type of keys of T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

extractAndConvert({ name: "Tan", age: 26, 0: "Ahihi" }, "name");
extractAndConvert({ name: "Tan", age: 26, 0: "Ahihi" }, 0);

//========================================================
// Generic class

class DataStorage<T> {
  constructor(private data: T[] = []) {}

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Tan");
textStorage.addItem("Trang");
console.log(textStorage.getItems()); // ["Tan", "Trang"]
textStorage.removeItem("Tan");
console.log(textStorage.getItems()); // ["Trang"]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(258);
numberStorage.addItem(154);
console.log(numberStorage.getItems()); // [258, 154]
numberStorage.removeItem(154);
console.log(numberStorage.getItems()); // [258]
