import React, {Component} from 'react';
import StarwarsFilmsAutocomplete from './starwars/films/AutocompleteComponent'
import StarwarsPeopleAutocompleteComponent from './starwars/people/AutocompleteComponent'
import './globalShim'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarwarsFilmsAutocomplete/>
        <StarwarsPeopleAutocompleteComponent/>
      </div>
    );
  }
}

export default App;
