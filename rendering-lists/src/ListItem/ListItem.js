import React from 'react';

const listItem = (props) => {
    return (
        <li className="list-group-item">{props.item}</li>
    );
}

export default listItem;