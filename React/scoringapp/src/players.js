import React from 'react';
import PlayersListItem from './playersitem';

function PlayersList(props) {
    const playerlist = props.players.map((player, index) => {
        return (
            <PlayersListItem 
                key={index} 
                index={index}
                name={player.name} 
                score={player.score}
                handleScore={props.handleScore}
            />
        );
    });

    return (
        <section>
          <h2>Individual Scores</h2>
          <table>
            <thead>
              <tr><th>Name</th><th>Score</th><th colSpan="2">Controls</th></tr>
            </thead>
            <tbody>
              {playerlist}
            </tbody>
          </table>
        </section>
    );
}

export default PlayersList;