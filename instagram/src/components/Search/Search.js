import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import Logo from './Logo';
import Menu from './Menu';
import './search.css';
=======
// import PropTypes from 'prop-types';
>>>>>>> 27eee5070c3c19e4af1731ba05c996f33e6de587

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

<<<<<<< HEAD
Search.propTypes = {
	handleChange: PropTypes.func,
	searchText: PropTypes.func,
};
=======
// Search.propTypes = {
// 	handleChange: PropTypes.function,
// 	searchText: PropTypes.function,
// };
>>>>>>> 27eee5070c3c19e4af1731ba05c996f33e6de587

export default Search;
