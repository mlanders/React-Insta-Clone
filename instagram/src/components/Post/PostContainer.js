import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import styled from 'styled-components';

// import './post.css';

const PostsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	margin: 0 auto;
`;

function PostContainer(props) {
	return (
		<PostsContainer>
			{props.data.map(post => {
				return (
					<Post
						key={post.timestamp}
						post={post}
						handleLike={props.handleLike}
					/>
				);
			})}
		</PostsContainer>
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
					text: PropTypes.string,
				})
			),
		})
	),
};

export default PostContainer;
