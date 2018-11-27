// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form.
// Example output: "3 + 4 = 7"

// ask for a number from the user
var firstNum = prompt("Type in a number.");

// ask for an operation from the user
var whatOperation = prompt('Type in the operation you want to use. Ex.: +, -, *, /');

// ask for another number form the user
var secondNum = prompt('Type in another number');

// function for calculating the value
function addNumbers (numOne, numTwo) {
    var addition = numOne + numTwo;
}

function subtractNumbers (numOne, numTwo) {
    var subtraction = numOne - numTwo;
}

function multiplyNumbers (numOne, numTwo) {
    var multiplication = numOne * numTwo;
}

function divideNumbers (numOne, numTwo) {
    var division = numOne / numTwo;
}

if (whatOperation === "+") {
    return parseInt(firstNum + secondNum);
}
if (whatOperation === "-") {
    return parseInt(firstNum - secondNum);
}
if (whatOperation === "*") {
    return parseInt(firstNum * secondNum);
}
if (whatOperation === "/") {
    return parseInt(firstNum / secondNum);
}
console.log(firstNum + " " + whatOperation + " " + secondNum + " is equal to " + answer)