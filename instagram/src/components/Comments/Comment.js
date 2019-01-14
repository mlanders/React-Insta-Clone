import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
	return (
		<div className="comment">
			<p className="commentName">
				{props.comment.username}:{' '}
				<span className="commentText">{props.comment.text}</span>
			</p>
		</div>
	);
}

Comment.propTypes = {
	comments: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	})
};

export default Comment;
