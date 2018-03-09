import React from 'react';

const person = (props) => {

    return (
        <div className="Person">
            <p>My name is {props.name} and I am {Math.floor(Math.random() * 42)}</p>
            {props.children}
        </div>
    );
    
}

export default person;