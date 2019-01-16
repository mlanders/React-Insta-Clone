import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Menu from './Menu';
import './search.css';

function Search(props) {
	return (
		<div className="topBar">
			<Logo />
			<form onChange={props.handleChange} onSubmit={props.searchPosts}>
				<input
					type="text"
					name="searchText"
					value={props.searchText}
					className="form-control"
					placeholder="Search"
				/>
			</form>
			<Menu />
		</div>
	);
}

Search.propTypes = {
	handleChange: PropTypes.func,
	searchText: PropTypes.func,
};

export default Search;
