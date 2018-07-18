import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		//key value pair, initialise empty state later we are updating it
		this.state = {
			term: ''
		};
	}

	/*render() {
		return <input onChange={this.onInputChange} />;
	};

	onInputChange(event){
		console.log(event.target.value);

	The above code can also be written in ES6 as
	use states if u ever want to change something

	}*/

	render() {
		return (
		<div className="search-bar">
		<input value = {this.state.term} onChange = {(event) => this.onInputChange(event.target.value)} />
		</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchChange(term);
	}
};

	
export default SearchBar;

/*always use this.setState to update any state.
			state is for class based components
			if u want to have some extre functionality use classes or else use functions;
*/