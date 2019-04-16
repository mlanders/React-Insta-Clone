import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Comments = styled.div`
	display: flex;
	justify-content: flexstart;
	align-items: flexstart;
	flex-direction: column;
	padding: 5px;
`;
const CommentName = styled.div`
	font-weight: bold;
`;
const CommentText = styled.span`
	font-weight: normal;
`;

const Time = styled.span`
	font-size: 12px;
	font-weight: 400;
	color: rgb(155, 155, 155);
`;

function Comment(props) {
	return (
		<Comments>
			<CommentName>
				{props.comment.username}:{' '}
				<CommentText>{props.comment.text}</CommentText>
				<Time>
					{' '}
					{moment()
						.startOf('day')
						.fromNow()}
				</Time>
			</CommentName>
		</Comments>
	);
}

Comment.propTypes = {
	comments: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string,
	}),
};

export default Comment;
