import React from 'react';

function TotalScore(props) {
    return (
        <section>
            <h2>Total Score</h2>
            <p>Total Score: {props.totalnum}</p>
        </section>
    )
}

export default TotalScore;