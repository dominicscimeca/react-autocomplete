import React, {Component} from 'react';
import Autocomplete from "../../lib/AutocompleteComponent"
import Person from "./PersonComponent";
import peopleSearchBuilder from './PeopleSearchBuilder'

class PeopleSearchComponent extends Component {

    renderPeople(peopleData) {
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
            <Autocomplete fetchFromInputBuilder={ peopleSearchBuilder.withDebounce(0) } >
                {(peopleData) => (
                    <div>
                        <div>People Search: <Autocomplete.INPUT/></div>
                        { this.renderPeople(peopleData) }
                    </div>
                )}
            </Autocomplete>
        );
    }
}

export default PeopleSearchComponent
