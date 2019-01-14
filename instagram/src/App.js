import React, { Component } from 'react';
import './App.css';
import data from './dummy-data';
import Search from './components/Search/SearchContainer';
import PostContainer from './components/Post/PostContainer';

class App extends Component {
	constructor() {
		super();
		this.state = { data: data };
	}
	render() {
		return (
			//import dummy data into state
			//import Search.js
			//import PostContainer.js

			//pass dummy data via props down to both PostContainer and Comment Container
			<div className="App">
				<Search />
				<PostContainer data={this.state.data} />
			</div>
		);
	}
}

export default App;
