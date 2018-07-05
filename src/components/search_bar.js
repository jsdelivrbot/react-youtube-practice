import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        // Can be changed by this.setState() outside of constructor
        this.state = { 
            term: ''
        };
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={(event) => {
                        this.onInputChange(event.target.value);
                    }} 
                />
                Value of the input: {this.state.term}
            </div>
        );
    }

    onInputChange(term) {
        console.log(term);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    
}


export default SearchBar;