const fs = require('fs');
const express = require('express');
const bodyPacer = require('body-parser');

const api = express();

api.use(bodyPacer.json());

const employee = JSON.parse(fs.readFileSync('./employee.json', 'utf-8'));

api.get('/employee', (request, response) => {
    response.send(employee);
})


// GET
api.get('/employee/:employeeId', (request, response) => {
    const employeeId = parseInt(request.params.employeeId);
    for(let i=0; i < employee.length; i++){
        if (employee[i].employeeId === employeeId ) {
            response.send(employee[i]);
        }
    }

    response.status(404).send('Unable to pull up page.');
});

// DELETE
api.delete('/employee/:employeeId', (request, response) => {
    const employeeId = parseInt(request.params.employeeId);
    const filteredWorkers = employee.filter(employee => employee.employeeId !== employeeId);
    if (filteredWorkers.length === employee.length){
        return response.status(404).send('HAM');
    }
    fs.writeFileSync('./employee.json', JSON.stringify(filteredWorkers));
    response.send(filteredWorkers);

    // Mongoose Way
        // const id = (request.params.employeeId);
        // Person.findByIdAndDelete(employeeId).then(personDeleted => {
        //     if (personDeleted){
        //         response.send(personDeleted);
        //     }   else {
        //         response.status(404).send('Unable to find id');
        //     }
        // }).catch(err => response.status(400).send(err))

})

// ADDS
api.post('/employee', (request, response) => {
    // const employeeId = parseInt(request.params.employeeId);
    const {employeeName, salary, employeeId, department} = request.body;
    if(employeeName && salary && employeeId && department) {
        const newEmployee = {
            employeeName,
            salary, 
            employeeId,
            department
        };
        employee.push(newEmployee);
        fs.writeFileSync('./employee.json', JSON.stringify(employee));
        return response.send(newEmployee);
    }  else{
        return response.status(422).send('No sir, no way!');
    }

    // Mongoose Way
        // const {employeeName, salary, employeeId, department} = request.body;
        // const employee = new employee({
        //     employee,
        //     salary,
        //     employeeId,
        //     department
        // })
        // person.save().then(personAdded => response.send(personAdded)).catch(err => response.status(400).send(err));
})

// UPDATES
api.put("/employee/:id", (request, response) => {
    const employeeId = parseInt(request.params.employeeId);
    const body = request.body;
   
    let filteredWorkers = employee.filter(employee => employee.employeeId === employeeId);
    filteredWorkers = body;
   
    let updatedWorkers = employee.filter(employee => employee.employeeId !== employeeId);
    updatedWorkers.push(filteredWorkers);
   
    fs.writeFileSync("./employee.json", JSON.stringify(updatedWorkers));
   
    if (updatedWorkers.length !== filteredWorkers.length) {
      return response.status(404).send("That's what she said!");
    }
   
    response.send(updatedWorkers);

    //Mongoose Way
        // const employeeId = (request.params.employeeId);
        // const {employee, salary, employeeId, department} = request.body;
        // person.findById(employeeId).then(person => {
        //     if(person){
        //         response.status(404).send('Unable sdfo');
        //     }
        //     if (employee) {
        //         person.set({
        //             employee
        //         })
        //     }
        //     if(salary){
        //         person.set({
        //             salary
        //         })
        //     }
        // })
});

api.listen(3000);