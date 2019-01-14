import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

import './search.css';

function SearchContainer(props) {
	return (
		<div className="topBar">
			<Logo />
			<Search />
			<Menu />
		</div>
	);
}

export default SearchContainer;
