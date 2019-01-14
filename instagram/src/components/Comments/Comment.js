import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
	return (
		<div className="comment">
			<p>
				{props.comment.username}: {props.comment.text}
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
