import React from 'react';
import './login.css';
// import Authenticate from '../Authentication/Authenticate';
// import { Card, CardTitle, Button } from 'reactstrap';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10% auto;
	box-sizing: border-box;
`;
const Card = styled.div`
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
`;
const CardTitle = styled.div`
	font-size: 35px;
`;
const LoginCard = styled(Card)`
	width: 300px;
	padding: 20px;
`;
const Button = styled.button`
	display: inline-block;
	font-weight: 400;
	color: white;
	box-sizing: border-box;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: ${props => (props.primary ? '#007bff' : 'transparent')};
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
const LoginInput = styled.input`
	border: 1px solid gray;
	border-radius: 4px;
	padding: 5px;
	width: 258px;
	margin: 0 0 5px 0;

	&:focus {
		outline: none;
	}
`;
const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
`;
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
	};

	componentDidMount = () => {
		this.loadStorage();
	};

	render() {
		return (
			<Container>
				<CardTitle>
					<i className="fab fa-instagram" /> Instagram
				</CardTitle>
				<LoginCard>
					<LoginForm>
						<LoginInput
							className="loginInput"
							type="text"
							placeholder="username"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<LoginInput
							className="loginInput"
							type="password"
							placeholder="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<Button onClick={this.handleSubmit} primary>
							Login
						</Button>
					</LoginForm>
				</LoginCard>
			</Container>
		);
	}
}

export default Login;
