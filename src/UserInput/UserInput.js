// UserInput.js
// Input component with two-way data binding.
// Placeholder added for when user deletes value.
//

import React from 'react';

const Userinput = (props) => {
    // Component Structure
    return (
        <div className="col-6">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">{props.name}</span>
                </div>
                <input type="text" placeholder="Enter A Name" value={props.name} onChange={props.change} className="form-control" />
            </div>
        </div>
    );
}

export default Userinput;
