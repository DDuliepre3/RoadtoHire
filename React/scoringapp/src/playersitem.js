import React from 'react';

function PlayersListItem(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.score}</td>
            <td colSpan="2">
            <button onClick={() => props.handleScore(props.index, '+')} >+</button> 
            <button onClick={() => props.handleScore(props.index, '-')} >-</button></td>
        </tr>
    );
}

export default PlayersListItem;