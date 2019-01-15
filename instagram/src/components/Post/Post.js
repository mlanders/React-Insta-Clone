import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'reactstrap';
import CommentContainer from '../Comments/CommentContainer';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: props.post,
			likes: props.post.likes,
			liked: false,
		};
	}

	handleLike = () => {
		if (this.state.liked === false) {
			this.setState({ likes: this.state.likes + 1, liked: true });
		} else {
			this.setState({ likes: this.state.likes - 1, liked: false });
		}
	};

	render() {
		return (
			<Card>
				<div className="postHeader">
					<img
						src={this.state.post.thumbnailUrl}
						alt={this.state.post.username}
					/>
					<CardTitle>{this.state.post.username}</CardTitle>
				</div>
				<img src={this.state.post.imageUrl} alt="Post" />
				<div className="icons">
					<i
						className="far fa-heart"
						onClick={() => {
							this.handleLike();
						}}
					/>
					<i className="far fa-comment" />
				</div>
				<p className="likes">{this.state.likes} likes</p>

				<CommentContainer post={this.state.post} />
			</Card>
		);
	}
}

Post.propTypes = {
	post: PropTypes.shape({
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
	}),
};

export default Post;
