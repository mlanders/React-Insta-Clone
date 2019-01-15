import React, { Component } from 'react';
import './App.css';
import data from './dummy-data';
import SearchContainer from './components/Search/SearchContainer';
import PostContainer from './components/Post/PostContainer';

class App extends Component {
	constructor() {
		super();
		// console.log('constructor running');
		this.state = {
			data: [],
		};
	}

	componentDidMount = () => {
		// console.log('CDM running');
		this.setState({
			data: data,
		});
	};

	render() {
		// console.log('render running');
		// console.log(this.state.data);
		return (
			<div className="App">
				<SearchContainer data={this.state.data} />
				<PostContainer
					data={this.state.data}
					handleLike={this.handleLike}
				/>
			</div>
		);
	}
}

export default App;
