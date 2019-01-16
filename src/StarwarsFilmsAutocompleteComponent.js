import React, {Component} from 'react';
import Autocomplete from "./lib/AutocompleteComponent"

class StarwarsFilmsAutocompleteComponent extends Component {
    starWarsFilmsSearchUrl = (searchTerm) => {
        return `https://swapi.co/api/films/?search=${searchTerm}`;
    };

    results(filmData) {
       return 'undefined' != typeof filmData.results && filmData.results.length > 0 ?
        (
            <div>
                <div>Results:</div>
                <div>The First Film: { filmData.results[0].title }</div>
            </div>
        ):(
            <div/>
        );
    }

    render() {
        return (
            <Autocomplete debounce={0} urlGenerator={this.starWarsFilmsSearchUrl}>
                {({results: filmData}) => (
                    <div>
                        <div>Films Search: <Autocomplete.INPUT/></div>
                        { this.results(filmData) }
                    </div>
                )}
            </Autocomplete>
        );
    }
}

export default StarwarsFilmsAutocompleteComponent
