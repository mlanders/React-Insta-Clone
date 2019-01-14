import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

import './post.css';

function PostContainer(props) {
	return (
		<div className="postContainer">
			{props.data.map(post => {
				return <Post key={post.timestamp} post={post} />;
			})}
		</div>
	);
}

PostContainer.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
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
	)
};

export default PostContainer;
