import React from 'react';

const Btn = (props) => {
    return (
        <div className="Done">
            <p onClick={props.click}>Pending...</p>
        </div>
    )
};

export default Btn; 