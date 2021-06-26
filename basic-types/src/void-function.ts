/**
 * Learn about:
 * - Function type
 * - Void return type
 */

console.log("");
console.log("============== Function - void type ==============");

// 'void' return type
// 'void' doesn't force we return anything if we don't want
// besides, we can return value if we want with 'void'
function printResult(result: number): void {
  console.log("Print result", result);
}

const result = printResult(258154);
console.log("Result of void", result); // undefined, when assign void to variable, the value is undefined

// 'function' type
// idea of 'function' type is to define type of parameters and return value
type HandlerType = (a: string, b: string) => void;

let handlerFunction: HandlerType;
handlerFunction = (arg1: string, arg2: string) => {
  console.log(arg1 + arg2);
};
handlerFunction("handler1-arg1", "handler1-arg2");

handlerFunction = function (arg1: string, arg2: string) {
  console.log(arg1 + arg2);
  return true;
};
const handlerResult = handlerFunction("handler2-arg1", "handler2-arg2");
console.log("Handler void with return", handlerResult);

// ERROR, wrong parameter type
handlerFunction = function (arg1: number, arg2: string) {
  console.log(arg1 + arg2);
};

let addFunction: (a: number, b: number) => number;
// ERROR, wrong return type
addFunction = function (arg1: number, arg2: number) {
  console.log(arg1 + arg2);
};

addFunction = function (arg1: number, arg2: number) {
  console.log(arg1 + arg2);
  return arg1 + arg2;
};

// 'function' type for parameter
function addAndHandler(n1: number, n2: number, callback: (n: number) => void) {
  const result = n1 + n2;
  callback(result);
  return result;
}

addAndHandler(10, 15, (result) => {
  console.log("Callback without return", result);
});

addAndHandler(258, 154, (result) => {
  console.log("Callback with return", result);
});
