function checkIsFirstLetterVowel(name) {
    const letters = name.split("");
    const firstLetter = letters[0].toLowerCase();

    var isFirstLetterAVowel;
    if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
        isFirstLetterAVowel = true;
    } else {
        isFirstLetterAVowel = false;
    }
    return isFirstLetterAVowel; 
}

var myName = prompt("What is your first name?");

if (myName.length % 2 === 0) { // if name is even
    if (checkIsFirstLetterVowel(myName)) {
        console.log('Your Spirit Animal is a PLATYPUS!');
    }
    // figure out if first letter is a vowel
    // if true, give them their spirit animal
    } else { // if name is odd
        console.log('uh oh');
}

// ODD FUNCTION
const topBabyNames = [
    'Jessica', 'Matthew', 'Sarah', 'James', 'Emily',
    'Daniel', 'Stephanie', 'Joshua', 'Emma', 'Michael',
    'Rebecca', 'Thomas', 'Samantha', 'Nicholas', 'Lauren',
    'Jack', 'Laura', 'Benjamin', 'Georgia', 'Luke',
    'Chloe', 'Christopher', 'Amy', 'Jake', 'Alexandra',
    'Nathan', 'Hannah', 'Andrew', 'Olivia', 'Lachlan',
    'Rachel', 'Samuel', 'Melissa', 'Dylan','Nicole',
    'Mitchell', 'Kate', 'Alexander', 'Natalie', 'Ryan'
];
if (myName != topBabyNames) {

}