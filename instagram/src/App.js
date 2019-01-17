import React, { Component } from 'react';
import './App.css';
import PostPage from './components/Post/PostPage';
import Login from './components/Login/Login';
import Authenticate from './components/Authentication/Authenticate';

let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
username = JSON.parse(username) || [];
password = JSON.parse(password) || [];

class App extends Component {
	// constructor() {
	// 	super();
	// console.log('constructor running');
	// this.state = {
	// 	data: [],
	// 	filtered: [],
	// 	searchText: '',
	// };
	// }

	// handleChange = e => {
	// 	this.setState(
	// 		{
	// 			[e.target.name]: e.target.value,
	// 		}
	// 		// () => this.searchPosts()
	// 	);
	// };

	// searchPosts = e => {
	// 	e.preventDefault();
	// 	let newPosts = [];

	// 	newPosts = this.state.data.filter(post => {
	// 		return post.username.toLowerCase().includes(this.state.searchText);
	// 		// === this.state.searchText.toLowerCase()
	// 	});
	// 	this.setState({ filtered: newPosts });
	// };

	// componentDidMount = () => {
	// 	// console.log('CDM running');
	// 	this.setState({
	// 		data: data,
	// 	});
	// };

	render() {
		// console.log('render running');
		return (
			// <PostPage />
			<Conditional username={username} password={password} />
			// <div className="App">
			// 	<Search
			// 		handleChange={this.handleChange}
			// 		searchPosts={this.searchPosts}
			// 	/>
			// 	<PostContainer
			// 		data={
			// 			this.state.filtered.length > 0
			// 				? this.state.filtered
			// 				: this.state.data
			// 		}
			// 		handleLike={this.handleLike}
			// 	/>
			// </div>
		);
	}
}

const Conditional = Authenticate(Login)(PostPage);

export default App;
