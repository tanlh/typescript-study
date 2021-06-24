// Primtive types: number, boolean, string

function add(
  n1: number,
  n2: number,
  printResult: boolean,
  additionalText: string
) {
  const result = n1 + n2;
  if (printResult) {
    console.log(additionalText, result);
  }

  return result;
}

const number1 = 5;
const number2 = 2.5;
const text: string = "It is a text";

let numberResult: number = add(number1, number2, true, text);
console.log(numberResult);

numberResult = "A string"; // ERROR, wrong type
