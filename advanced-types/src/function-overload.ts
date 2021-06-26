/**
 * Learn about: function overload
 */

console.log("");
console.log("============== Function overload ==============");

function concat(arg1: string, arg2: string): string;
function concat(arg1: number, arg2: number): string;
function concat(arg1: any, arg2: any): any {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    return arg1.toString() + arg2.toString();
  }
  return arg1 + arg2;
}

const numResult = concat(1, 2);
console.log(numResult); // 12

const stringResult = concat("11", "22");
console.log(stringResult); // 1122
