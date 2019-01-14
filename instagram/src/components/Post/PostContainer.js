import React from 'react';
import Post from './Post';

function PostContainer(props) {
	return (
		<div className="postContainer">
			{props.data.map(post => {
				return <Post key={post.timestamp} post={post} />;
			})}
		</div>
	);
}

export default PostContainer;
