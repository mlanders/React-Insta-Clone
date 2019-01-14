import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comments/Comment';

function Post(props) {
	return (
		<div className="post">
			<div className="postHeader">
				<img src={props.post.thumbnailUrl} alt={props.post.username} />
				<p>{props.post.username}</p>
			</div>
			<img src={props.post.imageUrl} alt="Post" />
			<p>{props.post.likes} likes</p>
			<div className="comments">
				{props.post.comments.map((comment, index) => {
					return <Comment key={index} comment={comment} />;
				})}
			</div>
			<input type="search" />
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string,
		likes: PropTypes.number,
		timestamp: PropTypes.string,
		comments: PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		})
	})
};

export default Post;
