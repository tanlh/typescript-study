/**
 * Learn about: type casting
 */

// way 1
const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const value = userInput.value;

// way 2
const paragraph = document.getElementById("paragraph") as HTMLParagraphElement;
const text = paragraph.innerHTML;
