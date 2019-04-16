import React from 'react';
import styled from 'styled-components';

const LogoStyle = styled.div`
	font-size: 25px;
`;
const InstagramLogo = styled.i`
	border-right: 1px solid gray;
	padding-right: 5px;
	font-size: 30px;
`;

function Logo(props) {
	return (
		<LogoStyle>
			<InstagramLogo className="fab fa-instagram" /> Instgram
		</LogoStyle>
	);
}

export default Logo;
