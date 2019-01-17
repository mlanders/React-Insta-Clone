import React from 'react';

const Authenticate = Login => PostPage => props => {
	let username = localStorage.getItem('username');
	let password = localStorage.getItem('password');
	username = JSON.parse(username) || [];
	password = JSON.parse(password) || [];

	if (props.username === username && props.password === password) {
		return <PostPage />;
	}
	return <Login />;
};
export default Authenticate;
