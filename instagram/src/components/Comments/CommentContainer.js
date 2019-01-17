import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import './comment.css';

const CommentForm = styled.form`
	border-top: 1px solid rgb(228, 228, 228);
	display: flex;
`;
const CommentInput = styled.input`
	padding: 5px;
	width: 100%;
	border: none;

	&:focus {
		outline: none;
	}
`;
const Elipsis = styled.p`
	font-size: 46px;
	height: 30px;
	position: relative;
	top: -28px;
	right: 5px;
	cursor: pointer;
`;
class CommentContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.post.comments,
			comment: '',
			user: '',
		};
	}

	loadStorage = () => {
		let username = localStorage.getItem('username');
		username = JSON.parse(username) || [];
		console.log(username);
		this.setState({ user: username });
	};

	handleChange = e => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => this.loadStorage()
		);
	};

	submitComment = e => {
		e.preventDefault();
		// console.log(this.state.comment);
		this.setState({
			comments: [
				...this.state.comments,
				{
					username: this.state.user,
					text: this.state.comment,
				},
			],
			comment: '',
		});
	};

	render() {
		// console.log('commentContainer:', this.state.comments);
		return (
			<div>
				{this.state.comments.map((comment, index) => {
					return <Comment key={index} comment={comment} />;
				})}

				<CommentForm onSubmit={this.submitComment}>
					<CommentInput
						type="text"
						name="comment"
						value={this.state.comment}
						onChange={this.handleChange}
						placeholder="Add a comment"
					/>
					<Elipsis>&#8230;</Elipsis>
				</CommentForm>
			</div>
		);
	}
}

CommentContainer.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			thumbnailUrl: PropTypes.string,
			imageUrl: PropTypes.string,
			likes: PropTypes.number,
			timestamp: PropTypes.string,
			comments: PropTypes.arrayOf(
				PropTypes.shape({
					username: PropTypes.string,
					text: PropTypes.string,
				})
			),
		})
	),
};

export default CommentContainer;
