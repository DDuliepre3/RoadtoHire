import React from 'react';

const contact = (props) => {
    return (
        <div>
            <p>You need to contact {props.first} {props.last} at {props.cell}.</p>
            <div style={{backgroundColor:props.status, width:'40px', height:'20px', display:'inline-block', border:'2px solid grey'}}></div>
            <button onClick={ () => props.updateStatus(props.index)}>Call</button>
        </div>
    )
};

export default contact;