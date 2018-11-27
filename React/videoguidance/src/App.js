import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

class App extends Component {
  state = {
    persons: [
      { id: 'wade', name: 'Dwyane', age: 36 },
      { id: 'walker', name: 'Kemba', age: 28 },
      { id: 'leo', name: 'Kawhi', age: 27 }
    ],
    showPersons: false
  }

  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePerson(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChange(event, person.id)}/>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const classes =[];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p className={classes.join(' ')}>This is working!</p>
        </header>
        <button 
          className={btnClass}
          onClick={this.togglePersons}>Toggle Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;