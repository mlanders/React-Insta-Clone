import React from 'react';
import Comment from '../Comments/Comment';

function Post(props) {
	return (
		<div className="post">
			<p>{props.post.username}</p>
			<img src={props.post.thumbnailUrl} alt={props.post.username} />
			<p>Likes: {props.post.likes}</p>
			<div className="comments">
				{props.post.comments.map((comment, index) => {
					return <Comment key={index} comment={comment} />;
				})}
			</div>
		</div>
	);
}

export default Post;
