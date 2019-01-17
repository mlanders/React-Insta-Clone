import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
		// if (this.state.searchText.length > 0) {
			let filteredPosts = this.state.data;
			filteredPosts = filteredPosts.filter(item =>{
				return item.username.toLowerCase().includes(this.searchText.toLowerCase()) ? this.setState({data:filteredPosts}) : null})
		}

	render() {
		console.log('search container');
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

// SearchContainer.propTypes = {
// 	data: PropTypes.array,
// };

export default SearchContainer;
