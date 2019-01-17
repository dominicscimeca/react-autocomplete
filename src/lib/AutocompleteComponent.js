import React, {Component} from 'react';

const AutocompleteContext = React.createContext({});

class Autocomplete extends Component {

    inputRef = React.createRef();
    state = {};

    static INPUT = () => (
        <AutocompleteContext.Consumer>
            { ({ref}) => <input ref={ref}/> }
        </AutocompleteContext.Consumer>
    );

    componentDidMount() {
        const {fetchFromInputBuilder} = this.props;
        const input = this.inputRef.current;

        fetchFromInputBuilder
            .withInput(input)
            .build()
            .subscribe(resp => this.setState(resp));
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