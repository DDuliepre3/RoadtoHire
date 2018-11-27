// alert('Wassup');
// // Pops up on the website

document.write('<h1>Wassup</h1>');
// Appears in the actual HTML website

console.log('Wassup');
// Appears in your console

// var message = "Wassup";
// // Stores, tracks, and uses information in a program
// // Vars cant start with numbers
// alert(message);

// var visitorName = prompt('What is your name?');
// // Prompt captures visitor input from a dialog box and gives it back to the program
// alert(visitorName);
// console.log(visitorName);

var visitor = prompt("What is your nickname?");
var messageTwo = 'Hello ' + visitor + ". Welcome to this Website!!! ";
messageTwo += "I am glad that you came to my very own website, "
messageTwo += visitor;
messageTwo += ". Please come back anytime!!!";
document.write(messageTwo);
console.log(messageTwo);

var passphrase = 'Open Sesame';
console.log(passphrase.length);
// 'length' property returns the number of characters inside a string
console.log(passphrase.toLowerCase());
// 'toLowerCase' property returns a copy of a string with all lowercase letters
console.log(passphrase.toUpperCase());
// 'toUpperCase' property returns a copy of a string with all uppercase letters



////////////////////////////////////////////////////////////////
                            Numbers
////////////////////////////////////////////////////////////////

var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day');

var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;
var salesTotal = retailPrice * quantity;
var profit = salesTotal - (wholesalePrice * quantity);
var profitPerUnit = profit / quantity;

var input = prompt('Please type a number.');
var topNumber = parseInt(input);
// parseInt() converts the input to an integer
var randomNumber = Math.floor(Math.random() * topNumber) + 1;
// Math.random() creates a random number