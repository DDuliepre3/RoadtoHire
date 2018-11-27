import React from 'react';

const hello = (props) => {
    return (
        <div>
            <h1>Hello World, {props.header}!</h1>
        </div>
    )
};

export default hello;