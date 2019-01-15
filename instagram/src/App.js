import React, { Component } from 'react';
import './App.css';
import data from './dummy-data';
import Search from './components/Search/SearchContainer';
import PostContainer from './components/Post/PostContainer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: data,
			comment: ''
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	// submitComment = e => {
	// 	e.preventDefault();
	// 	this.setState({
	// 		data: [
	// 			...this.state.data,
	// 			{
	// 				comments: [
	// 					{
	// 						username: 'Mike',
	// 						text:this.state.comment
	// 					}
	// 				]
	// 			],
	// 		comment: ''
	// 	});
	// };

	render() {
		return (
			<div className="App">
				<Search />
				<PostContainer
					data={this.state.data}
					submitComment={this.submitComment}
					handleChange={this.handleChange}
					commentItem={this.commentItem}
				/>
			</div>
		);
	}
}

export default App;
