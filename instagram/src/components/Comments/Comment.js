import React from 'react';
import moment from 'moment';

import PropTypes from 'prop-types';

function Comment(props) {
	return (
		<div className="comment">
			<p className="commentName">
				{props.comment.username}:{' '}
				<span className="commentText">{props.comment.text}</span>
				<span className="time">
					{' '}
					{moment()
						.startOf('day')
						.fromNow()}
				</span>
			</p>
		</div>
	);
}

Comment.propTypes = {
	comments: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string,
	}),
};

export default Comment;
