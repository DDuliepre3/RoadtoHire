// Create a guessing game app in React.
 
// When the page loads, display a header that says Start Game and underneath that have two buttons. One button should read Standard and the other should read Expert. If the user clicks Standard, randomly generate a number between 1 and 10 for the user to guess. Expert should be between 1 and 100. Once either of these buttons is clicked, the game starts.
 
// There should be an input for the user to guess a number and submit.
// There should be a place that shows how many guesses they have made.
// Once the user guesses, tell them whether their guess was too high or too low.
// Once the user wins, display a message telling them that they have won and how many guesses it took.
// Keep track of the least number of tries it takes the user to win. This is the "High Score". If the user beats their high score congratulate them.
// Keep separate track of the high score for the standard and expert levels.
// Have a reset button if the user gets tired of trying.

import React, { Component } from "react";
import "./App.css";
  
class App extends Component {
  state = { 
    number: null,
    highScore: 0,
    standard: 0,
    expert: 0,
    tries: 0,
    maxTries: 10,
  }

  handleScore = () => {
    console.log(this.state.tries); 
    let standard = Math.floor((Math.random() * 10) + 1); 
    this.setState({
      number: standard
    });
    console.log(standard);
    let guess = prompt('I am thinking of a random number between 1 and 10. What is it?');
    while (guess != standard) {
      this.setState ({
        tries: this.state.tries++
      });
      console.log(this.state.tries); 
      if (guess < standard){
        guess=prompt("Guess higher");
      } else {
        guess=prompt("Guess lower");
      }
      guess = prompt('I am thinking of a random number between 1 and 10. What is it?');
    }
      if (guess == standard){
        console.log("You Win!!");
      this.setState ({
        tries: this.state.tries++
      });
      this.setState({
        tries: 0
      });
    }
    this.state.highScore 
    if (this.state.tries < this.state.highScore || this.state.highScore == 0) {
      this.setState ({highScore: this.state.tries});
    }
  }

  handleScore2 = () => {
    console.log(this.state.tries);
    let expert = Math.floor((Math.random() * 100) + 1);
    this.setState({
      number: expert
    });
    console.log(expert);
    let guess = prompt('I am thinking of a random number between 1 and 100. What is it?');
    while (guess != expert) {
      this.setState ({
        tries: this.state.tries++
      });
      console.log(this.state.tries);
      if (guess < expert){
        console.log("Guess higher");
      } else {
        console.log("Guess lower");
      }
      guess = prompt('I am thinking of a random number between 1 and 100. What is it?');
    }

    if (guess == expert){
        console.log("Yay");
      this.setState ({
        tries: this.state.tries++
      });
      console.log(this.state.tries);
      this.setState({
        tries: 0
      });
    }
    this.state.highScore 
    if (this.state.tries < this.state.highScore || this.state.highScore == 0) {
      this.setState ({highScore: this.state.tries});
    }
  } 
    
  render() {
    return (
      <div className="App">
        <header>
          <h1>Start Game</h1>
        </header>
        <p>Highscore: {this.state.highScore}</p>
        <div>
          <button
          onClick={this.handleScore}>
            Standard
          </button>
          <button
          onClick={this.handleScore2}>
            Expert
          </button>
        </div>
        <button onClick={this.handleScore}>Reset Standard</button>  
        <button onClick={this.handleScore2}>Reset Expert</button>  
    </div>
    );
  };
}
export default App;