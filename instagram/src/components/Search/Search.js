import React from 'react';
// import PropTypes from 'prop-types';

function Search(props) {
	return (
		<div className="Search">
			<form>
				<input
					type="text"
					name="searchText"
					value={props.searchText}
					className="form-control"
					placeholder="Search"
					aria-label="Search"
					onChange={props.handleChange}
				/>
			</form>
		</div>
	);
}

// Search.propTypes = {
// 	handleChange: PropTypes.function,
// 	searchText: PropTypes.function,
// };

export default Search;
