import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'reactstrap';
import CommentContainer from '../Comments/CommentContainer';

function Post(props) {
	return (
		<Card>
			<div className="postHeader">
				<img src={props.post.thumbnailUrl} alt={props.post.username} />
				<CardTitle>{props.post.username}</CardTitle>
			</div>
			<img src={props.post.imageUrl} alt="Post" />
			<div className="icons">
				<i className="far fa-heart" />
				<i className="far fa-comment" />
			</div>
			<p className="likes">{props.post.likes} likes</p>

			<CommentContainer post={props.post} />
		</Card>
	);
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
