// ARRAYS

var shoppingList = ['carrots', 'cereal', 'milk'];
shoppingList.push('candy');
// .push adds items to the end of an array
shoppingList.unshift('water');
// .unshift adds items to the beginning of an array
shoppingList.shift();
// .shift deletes the first item in the array

////////// ARRAY PLAYLIST

var playList = [
    ['No Tears Left to Cry', 'Ariana Grande'],
    ['Imagine', 'Pentatonix'],
    ['Respect', 'Arethra Franklin'],
    ['Pray For Me', 'The Weeknd'],
];

function print(message) {
    document.write(message);
}

function printSongs (songs) {
    var listHTML = '<ol>';
    for (var i = 0; i < songs.length; i+= 1) {
        listHTML += '<li>' + songs[i][0] + '<li>';
    }
    listHTML += '<ol>';
    print(listHTML);
}

printSongs(playList);

////////// ARRAY QUIZ

var questions = [
    ['How many states are in the United States?', 50],
    ['How many continents are there?', 7],
    ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];
var html;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    var listHTML = '<ol>';
        for (var i = 0; i < arr.length; i += 1) {
            listHTML += '<li>' + arr[i] + '</li>';
        }
        listHTML += '<ol>';
        return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][1];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
    }   else {
        wrong.push(question);
    }
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);

var questionsCombo = questions.join(',');
console.log( questionsCombo );

////////// OBJECTS
/* var objectLiteral = {
    name: "Dave",
    grades: [80, 85, 90, 95]
};
*/

var person = {
    name: 'Marquis',
    country: 'US',
    age: 35,
    treehouseStudent: true,
    skills: ['Javascript', 'HTML', 'CSS']
};

function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Kemba Walker';
message += '<p>But I wish my name was ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now ' + person.age +'</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(',') + '</p>';
print(message);

for (key in person) {
    console.log(prop, ': ', person.prop);
}

////////// ALL TOGETHER

var students =[
    {
        name: 'Dave',
        track: 'Front End',
        achievements: 158,
        points: 14730
    },
    {
        name: 'Judy',
        track: 'iOS Development with Swift',
        achievements: '175',
        points: '16375'
    },
    {
        name: 'Jordan',
        track: 'PHP Development',
        achievements: '55',
        points: '2025'
    }
];