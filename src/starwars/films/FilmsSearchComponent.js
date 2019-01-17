import React, {Component} from 'react';
import Autocomplete from "../../lib/AutocompleteComponent"
import filmsSearch from "./FilmsSearch";

class FilmsSearchComponent extends Component {

    renderFilms(filmData) {
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
            <Autocomplete fetchFromInput={ filmsSearch({debounce:50}) }>
                {(films) => (
                    <div>
                        <div>Films Search: <Autocomplete.INPUT/></div>
                        { this.renderFilms(films) }
                    </div>
                )}
            </Autocomplete>
        );
    }
}

export default FilmsSearchComponent
