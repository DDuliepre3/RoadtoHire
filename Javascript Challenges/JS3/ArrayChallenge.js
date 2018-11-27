// Create an array of 3 objects, all of which containing a name property and an age property. Write a script that will generate a random number from 0-2, call the object with that index, and print “[name] is [age].”

var students =[
    {
        name: 'Dwyane Wade',
        age: '36'
    },
    {
        name: 'Kemba Walker',
        age: '28'
    },
    {
        name: 'Kawhi Leonard',
        age: '27'
    }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var solution = getRandomInt(students.length);

console.log(students[solution].name + ' is ' + students[solution].age + '.');