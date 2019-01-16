import React, {Component} from 'react';
import Autocomplete from "../../lib/AutocompleteComponent"
import Person from "../../PersonComponent";

class AutocompleteComponent extends Component {
    starWarsPeopleSearchUrl = (searchTerm) => {
        return `https://swapi.co/api/people/?search=${searchTerm}`;
    };

    results(peopleData) {
        return 'undefined' != typeof peopleData.results && peopleData.results.length > 0 ?
            (
                <div>
                    <div>Results:</div>
                    { peopleData.results.map(person => (<Person key={person.name} person={person}/>)) }
                </div>
            ):(
                <div/>
            );
    }

    render() {
        return (
            <Autocomplete debounce={0} urlGenerator={this.starWarsPeopleSearchUrl}>
                {({results: peopleData}) => (
                    <div>
                        <div>People Search: <Autocomplete.INPUT/></div>
                        { this.results(peopleData) }
                    </div>
                )}
            </Autocomplete>
        );
    }
}

export default AutocompleteComponent
