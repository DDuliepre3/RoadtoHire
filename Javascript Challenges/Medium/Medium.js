// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

// use prompt to get user input
var userInput = prompt("Say anything.");

if (userInput.toLowerCase) {
    console.log('Whispering User');
}   else {
    console.log('Neutral User');
}   
if (userInput.toUpperCase) {
    console.log('Shouting User');
}   else {
    console.log('Neutral User');
}