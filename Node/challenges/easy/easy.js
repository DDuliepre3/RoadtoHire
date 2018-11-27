// EASY: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
// Text file: mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto (I still believe in you pluto)  

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const space = JSON.parse(fs.readFileSync('./planets.json', 'utf-8'));

app.get('/planets', (request, response) => {
    response.send(space);
})


// GET
app.get('/planets/:id', (request, response) => {
    const id = parseInt(request.params.id);
    for(let i=0; i < space.length; i++){
        if (space[i].id === id ) {
           return response.send(space[i]);
        }
    }

    response.status(404).send('Unable to pull up page.');
});

app.listen(3001);