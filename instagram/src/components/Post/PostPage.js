import React from 'react';
import data from '../../dummy-data';
import Search from '../Search/Search';
import PostContainer from '../Post/PostContainer';

class PostPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			filtered: [],
			searchText: '',
			Display: false,
			username: '',
			password: '',
		};
	}

	handleLogout = () => {
		if (this.state.username !== '' && this.state.password !== '') {
			this.setState(
				{ username: '', password: '' },
				this.updateLocalStorage()
				// window.location.reload()
			);
		}
	};

	handleChange = e => {
		console.log(e.target.value);
		if (e.target.name === 'searchText') {
			this.setState({ Display: true });
		}
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	searchPosts = e => {
		e.preventDefault();
		let newPosts = [];

		newPosts = this.state.data.filter(post => {
			return post.username.toLowerCase().includes(this.state.searchText);
		});
		this.setState({ filtered: newPosts });
	};

	clearSearch = () => {
		this.setState(
			{
				searchText: '',
				filtered: [],
			},
			window.location.reload()
		);
	};

	updateLocalStorage = () => {
		localStorage.setItem('username', JSON.stringify(this.state.username));
		localStorage.setItem('password', JSON.stringify(this.state.password));
	};

	loadStorage = () => {
		let username = localStorage.getItem('username');
		let password = localStorage.getItem('password');
		username = JSON.parse(username) || [];
		password = JSON.parse(password) || [];
		this.setState({
			username: username,
			password: password,
		});
	};

	componentDidMount = () => {
		// console.log('CDM running');
		this.setState(
			{
				data: data,
			},
			this.loadStorage()
		);
	};
	render() {
		// console.log('render running');
		return (
			<React.Fragment>
				<Search
					handleChange={this.handleChange}
					searchPosts={this.searchPosts}
					clearSearch={this.clearSearch}
					display={this.state.Display}
					handleLogout={this.handleLogout}
				/>
				<PostContainer
					data={
						this.state.filtered.length > 0
							? this.state.filtered
							: this.state.data
					}
					handleLike={this.handleLike}
				/>
			</React.Fragment>
		);
	}
}

export default PostPage;
