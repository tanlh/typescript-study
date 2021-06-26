/**
 * Learn about:
 * - Any type
 * - Unknown type
 * - Undefined type
 */

console.log("");
console.log("============== Any - unknown - undefined type ==============");

// 'any' type
// can assign any value to variable with 'any' type
// can assign 'any' type variable to other type as well
let testAny: any;
testAny = "A String";
testAny = 3;
testAny = {
  name: "Tan",
};
testAny = ["String", 1, {}];

const aString: string = testAny;

// 'unknown' type
// can assign any value to variable with 'unknow' type
// but, can only assign 'unknown' type variable to other type when we do the type check
let testUnknown: unknown;
testUnknown = "A String";
testUnknown = 3;

const aNumber: number = testUnknown; // ERROR, cannot assign

let anotherNumber: number;
if (typeof testUnknown === "number") {
  anotherNumber = testUnknown;
}

// 'undefined' type
let testUndefined: undefined;
testUndefined = 1; // ERROR, wrong type assignment
