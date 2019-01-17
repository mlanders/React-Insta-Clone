import React from 'react';
import './login.css';
import Authenticate from '../Authentication/Authenticate';
import { Card, CardTitle } from 'reactstrap';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = e => {
		this.setState(
			{
				username: this.state.username,
				password: this.state.password,
			},
			this.updateLocalStorage()
		);
		this.forceUpdate();
	};

	updateLocalStorage = () => {
		localStorage.setItem('username', JSON.stringify(this.state.username));
		localStorage.setItem('password', JSON.stringify(this.state.password));
	};
	loadStorage = () => {
		let username = localStorage.getItem('username');
		let password = localStorage.getItem('password');
		username = JSON.parse(username) || [];
		password = JSON.parse(password) || [];
		// this.setState({ username: username, password: password });
	};
	componentDidMount = () => {
		this.loadStorage();
	};

	render() {
		return (
			<Card className="loginModal">
				<form className="login">
					<input
						type="text"
						placeholder="username"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						placeholder="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleSubmit}>Login</button>
				</form>
			</Card>
		);
	}
}

export default Login;
