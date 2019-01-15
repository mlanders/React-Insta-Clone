import React from 'react';

function Search(props) {
	return (
		<div className="Search">
			<form onSubmit={props.searchPosts}>
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

export default Search;
