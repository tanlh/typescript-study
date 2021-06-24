// 'object' type assignment
const person1: { name: string; age: number; hobbies: string[] } = {
  name: "Tan",
  age: 27,
  hobbies: ["Study", "Film"],
};

person1.hobbies = [1, 2, 3]; // ERROR, wrong type assignment

// 'object' type inference
const person2 = {
  name: "Trang",
  age: 26,
  hobbies: ["Sleep", "Lazy"],
};

console.log(person2.city); // ERROR, missing key

// 'array' type
let testArray: string[] = ["First string", "Second string"];
testArray.push("Third string");

for (const item of testArray) {
  console.log(item);
}

// 'tuple' type, fixed size array (2)
let testTuple: [number, string] = [1, "right"];
testTuple = [2, "right2", "right2Update"]; // ERROR, tuple has fixed size = 2

testTuple = [1, "right"];
testTuple.push("rightUpdate"); // Exceptional case: can push to tuple

console.log(testTuple); // [1, 'right', 'rightUpdate']

// 'enum' type
enum Role {
  ADMIN = "Admin",
  MOD = "Mod",
  GUEST = "Guest",
  NONE = 0,
  UNDEFINED,
}

let testRole = Role.ADMIN;
// true
if (testRole === "Admin") {
  console.log("Is Admin");
}

testRole = Role.NONE;
console.log(testRole); // 0

testRole = Role.UNDEFINED;
console.log(testRole); // 1, increasing from NONE
