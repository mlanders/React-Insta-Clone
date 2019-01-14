import React from 'react';

function Comment(props) {
	return (
		<div className="comment">
			<p>
				{props.comment.username}: {props.comment.text}
			</p>
		</div>
	);
}

export default Comment;
