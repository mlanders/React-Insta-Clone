import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

import './search.css';

class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			searchText: '',
		};
	}

	handleChange = e => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => this.searchPosts()
		);
	};

	searchPosts = () => {
		if (this.state.searchText.length > 0) {
			this.state.data.filter(post => {
				const values = Object.values(post);
				const string = JSON.stringify(values);
				return (
					this.state.searchText ===
					string.includes(this.state.searchText)
				);
			});
		}
	};

	render() {
		console.log(this.state.data);
		return (
			<div className="topBar">
				<Logo />
				<Search
					handleChange={this.handleChange}
					searchPosts={this.searchText}
				/>
				<Menu />
			</div>
		);
	}
}

export default SearchContainer;
