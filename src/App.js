import React, {Component} from 'react';
import StarwarsFilmsAutocomplete from './StarwarsFilmsAutocompleteComponent'
import StarwarsPeopleAutocompleteComponent from './StarwarsPeopleAutocompleteComponent'

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
