// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

var numOne = prompt('Choose a Number.');
var numTwo = prompt('Choose Another Number.');

function addNumbers (numOne, numTwo) {
    var addition = numOne + numTwo;
    console.log(numOne + ' plus ' + numTwo + ' is equal to ' + addition);
}


function subtractNumbers (numOne, numTwo) {
    var subtraction = numOne - numTwo;
    console.log(numOne + ' subracted by ' + numTwo + ' is equal to ' + subtraction);
}

function multiplyNumbers (numOne, numTwo) {
    var multiplication = numOne * numTwo;
    console.log(numOne + ' times ' + numTwo + ' is equal to ' + multiplication);
}

function divideNumbers (numOne, numTwo) {
    var division = numOne / numTwo;
    console.log(numOne + ' divided by ' + numTwo + ' is equal to ' + division);
}