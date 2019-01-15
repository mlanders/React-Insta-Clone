import React, { Component } from 'react';
import moment from 'moment';
import Comment from './Comment';
// import data from '../../dummy-data';

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
		console.log(this.state.comment);
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
		console.log('commentContainer:', this.state.comments);
		return (
			<div className="commentContainer">
				<div className="comments">
					{this.state.comments.map((comment, index) => {
						return <Comment key={index} comment={comment} />;
					})}
				</div>
				<p className="time">
					{moment()
						.startOf('hour')
						.fromNow()}
				</p>
				<form onSubmit={this.submitComment}>
					<input
						type="text"
						name="comment"
						value={this.comment}
						onChange={this.handleChange}
						placeholder="Add a comment"
					/>
				</form>
			</div>
		);
	}
}

export default CommentContainer;
