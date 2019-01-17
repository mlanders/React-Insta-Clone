import React from 'react';
import styled from 'styled-components';

const MenuIcons = styled.i`
	margin: 0 5px;
`;

function Menu(props) {
	return (
		<div>
			<MenuIcons className="far fa-compass fa-2x" />
			<MenuIcons className="far fa-heart fa-2x" />
			<MenuIcons className="far fa-user fa-2x" />
		</div>
	);
}

export default Menu;
