import React from 'react';
import {capitalize} from "./StringUtils";

const Person = ({person}) => {
    const attributes = Object.keys(person)
        .map(attribute => (<li key={attribute}>{capitalize(attribute)}: {person[attribute]}</li>));

    return (
        <div>
            <h2>{person.name}</h2>
            <ul>
                {attributes}
            </ul>
        </div>
    )
};

export default Person