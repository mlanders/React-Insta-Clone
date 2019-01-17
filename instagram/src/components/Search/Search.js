import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Menu from './Menu';
import styled from 'styled-components';

// import './search.css';

const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 auto 30px;
	border-bottom: 1px solid rgb(209, 209, 209);
	padding: 15px 10%;
	background-color: white;
`;
const SearchForm = styled.form`
	width: 40%;
	display: flex;
`;

function Search(props) {
	return (
		<TopBar>
			<Logo />
			<SearchForm
				onChange={props.handleChange}
				onSubmit={props.searchPosts}>
				<input
					type="text"
					name="searchText"
					value={props.searchText}
					className="form-control"
					placeholder="Search"
				/>
			</SearchForm>
			<Menu />
		</TopBar>
	);
}

Search.propTypes = {
	handleChange: PropTypes.func,
	searchText: PropTypes.func,
};

export default Search;
