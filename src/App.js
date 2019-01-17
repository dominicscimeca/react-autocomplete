import React, {Component} from 'react';
import StarwarsFilmsSearchAutocomplete from './starwars/films/FilmsSearchComponent'
import StarwarsPeopleSearchAutocompleteComponent from './starwars/people/PeopleSearchComponent'
import './globalShim'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarwarsFilmsSearchAutocomplete/>
        <StarwarsPeopleSearchAutocompleteComponent/>
      </div>
    );
  }
}

export default App;
