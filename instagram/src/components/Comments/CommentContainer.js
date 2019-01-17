import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

import './comment.css';
class CommentContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.post.comments,
			comment: '',
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	submitComment = e => {
		e.preventDefault();
		// console.log(this.state.comment);
		this.setState({
			comments: [
				...this.state.comments,
				{
					username: 'Mike',
					text: this.state.comment,
				},
			],
			comment: '',
		});
	};

	render() {
		// console.log('commentContainer:', this.state.comments);
		return (
			<div className="commentContainer">
				<div className="comments">
					{this.state.comments.map((comment, index) => {
						return <Comment key={index} comment={comment} />;
					})}
				</div>

				<form onSubmit={this.submitComment}>
					<input
						type="text"
						name="comment"
						value={this.state.comment}
						onChange={this.handleChange}
						placeholder="Add a comment"
					/><p>&#8230;</p>
				</form>
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
