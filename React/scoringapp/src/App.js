import React, { Component } from 'react';
import TotalScore from './totalscore';
import PlayersList from './players';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleScore = this.handleScore.bind(this);

    this.state = {
      totalscore: 0,
      players: [
        {name: 'Toni the MOM', score: 0},
        {name: 'Seyfat the SKIPPER', score: 0},
        {name: 'Ram the... Ram', score: 0},
        {name: 'Marquis the TRASH', score: 0}
      ]
    }
  }

  handleScore(index, action) {
    let allPlayers = this.state.players.slice();

    if (action === '+') {
      allPlayers[index].score++;
    } else if (allPlayers[index].score > 0){
      allPlayers[index].score--;
    }

    const newTotal = this.calculateTotal(allPlayers);

    this.setState({
      totalScore: newTotal,
      players: allPlayers
    });
  }

  calculateTotal(players) {
    let initialValue = 0;

    const totalScore = players.reduce(function(runningTotal, currentValue){
      return runningTotal + currentValue.score;
    }, initialValue);

    return totalScore;
  }

  render() {
    return (
      <div>
        <TotalScore totalnum= {this.state.totalScore} />
        <hr />
        <PlayersList players={this.state.players} handleScore={this.handleScore}/>
      </div>
    );
  }
}

export default App;