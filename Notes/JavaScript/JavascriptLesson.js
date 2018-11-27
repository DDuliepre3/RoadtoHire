alert('hi');
    // Pops up on the page

console.log('hi');
    // Sends the targeted information to the console

// car .drive();
//     .drive('fast');
//     .park();
//     .brake();
//     // Actions of a Car - This is called a METHOD
//     .color
//     .model
//     .engine .rev();
//     .door .open();
//     .window
//     // Looks of a Car

function revEngine () {
    console.log('vrrrrrmmmmmmmmmmm');
}
revEngine();

// function addNumbers () {
//     console.log(6+6);
// }
// addNumbers();

// Two strings together is a CANCATANATION

var numOne = 8;
var numTwo = 7;

function addNumbers (numOne, numTwo) {
    var total = numOne + numTwo;
    return total;
}
var mytotal = addNumbers(8,9);
console.log(mytotal);

function addNumbers (numOne, numTwo) {
    var total = numOne + numTwo;
    if(total > 10) {
        return 'greater than 10';
    } else if(total < 0) {
        return 'less than 0'
    } else {
        return 'less than 10 greater than 0';
    }
}

if (a < b || a > c || (z < 4 && r > 6)) {
    
}

// LOOPING



var myNumbers = [0,1,2,3,4,5,6,7,8,9];
function findMyTotal(someArray) {
    for(var i = 0; i<someArray.length; i++) {
        total = total + someArray[i];
    }
    return total;
}

console.log(findMyTotal(myNumbers));
// One time through a cycle is an ITERATION


var
const
let