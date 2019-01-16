import React, {Component} from 'react';
import fetchFromInput from "./fetchFromInput";

const AutocompleteContext = React.createContext({});

class Autocomplete extends Component {

    inputRef = React.createRef();
    state = { results: {} };

    static INPUT = () => (
        <AutocompleteContext.Consumer>
            { ({ref}) => <input ref={ref}/> }
        </AutocompleteContext.Consumer>
    );

    componentDidMount() {
        const {debounce = 100, urlGenerator} = this.props;
        const input = this.inputRef.current;

        const response = fetchFromInput({input, debounce, urlGenerator});

        response.subscribe(results => this.setState({results}));
    }

    render() {
        return (
            <AutocompleteContext.Provider value={{ref: this.inputRef}}>
                {this.props.children(this.state)}
            </AutocompleteContext.Provider>
        );
    }
}

export default Autocomplete;