import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardTitle } from 'reactstrap';
import Comment from '../Comments/Comment';

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
			<div className="comments">
				{props.post.comments.map((comment, index) => {
					return <Comment key={index} comment={comment} />;
				})}
			</div>
			<p className="time">
				{moment()
					.startOf('hour')
					.fromNow()}
			</p>
			<form>
				<input
					type="text"
					name="comment"
					value={props.commentItem}
					onChange={props.handleChange}
					onSubmit={props.submitComment}
					placeholder="Add a comment"
				/>
			</form>
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
				text: PropTypes.string
			})
		)
	})
};

export default Post;
