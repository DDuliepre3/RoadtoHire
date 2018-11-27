const fs = require('fs');
const express = require('express');
const bodyPacer = require('body-parser');

const test = express();

test.use(bodyPacer.json());

const people = JSON.parse(fs.readFileSync('./people.json', 'utf-8'));

// fs.readFile('./people.json/', 'utf-8', (e, data) ) {
//     if(e){
//         "do some function"
//     }else{
//         people = data;
//     }
// }
// 

// build api that adds, edits, gets, and deletes a person in the people.json file
    test.get('/people', (request, response) => {
        response.send(people);
    })

    test.get('/people/:id', (request, response) => {
        const id = parseInt(request.params.id);
        for(let i=0; i <= people.length; i++){
            if (people[i].id === id ) {
                response.send(people[i]);
            }
        }

        response.status(404).send('Psych');

        // var person = people.filter(person => person.id === id);
    });

    test.delete('/people/:id', (request, response) => {
        const id = parseInt(request.params.id);
        const filteredPeople = people.filter(person => person.id !== id);
        if (filteredPeople.length === people.length){
            return response.status(404).send('PSYCH!!!');
        }
        fs.writeFileSync('./person.json', JSON.stringify(filteredPeople));
        response.send(filteredPeople);
    })

    // adds a person
    test.post('/people/:id', (request, response) => {
        const id = parseInt(request.params.id);
        console.log(request.body.name);
        const {name, id} = request.body;
        if(name && age && id) {
            const newPerson = {
                name,
                age, 
                id 
            }
            people.push(newPerson);
            fs.writeFileSync('./person.json', JSON.stringify(filteredPeople));
            response.send(newPerson);
        }  else{
            return response.status(422).send('No sir no way');
        }
    })






test.listen(3000);