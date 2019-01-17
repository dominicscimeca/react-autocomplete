import React, {Component} from 'react';
import Autocomplete from "../../lib/AutocompleteComponent"
import Person from "./PersonComponent";
import peopleSearch from './PeopleSearch'

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
            <Autocomplete fetchFromInput={ peopleSearch({debounce:0}) } >
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
