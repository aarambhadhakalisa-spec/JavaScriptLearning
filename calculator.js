// to make the calculator work, you need to implement the logic for the operations (addition, subtraction, multiplication, and division) based on the user's input. Here's a simple example of how you can do that:

// Get the user's input using switch  and break statement

const readlineSync = require("readline-sync");
const number1 = parseFloat(readlineSync.question("Enter the first number:"));
const number2 = parseFloat(readlineSync.question("Enter the second number:"));
const operation = readlineSync.question("Enter the operation (+, -, *, /):");
let result; 
switch (operation) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        console.log("Invalid operation");
        break;
}
console.log("Result: " + result);   