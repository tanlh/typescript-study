/**
 * Learn about:
 * - Union type
 * - Literal type
 * - Type alias
 */

console.log("");
console.log("============== Union type ==============");

// 'union' type, union multiple types
function combine(arg1: number | string, arg2: number | string) {
  //   return arg1 + arg2; ERROR, operator '+' cannot apply to number | string
  let result: string | number;
  // for union type, have to do type check before do something
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    result = arg1 + arg2;
  } else {
    result = arg1.toString() + arg2.toString();
  }

  return result;
}

const numberCombine = combine(1, 2);
console.log(numberCombine); // 3

const stringCombine = combine("Tan", "Trang");
console.log(stringCombine); // 'TanTrang'

console.log("");
console.log("============== Literal type ==============");

// 'literal' type, the union of some certain strings
function printResult(
  result: number | string,
  printType: "as-number" | "as-string"
) {
  if (printType === "as-number") {
    console.log(+result);
  } else {
    console.log(result.toString());
  }
}

printResult(20, "as-string");
printResult("124124", "as-number");
printResult("Tan", "as-text"); // ERROR, wrong type

console.log("");
console.log("============== Type alias ==============");

// type alias
type UserRole = "admin" | "guest";

type User = {
  name: string;
  age: number;
  hobbies: string[];
  role: UserRole;
  code: string | number;
};

function greeting(user: User) {
  console.log("Hello: " + user.name);
}

greeting({
  name: "Tan",
  age: 27,
  hobbies: ["Study"],
  role: "admin",
  code: "NTA",
});
