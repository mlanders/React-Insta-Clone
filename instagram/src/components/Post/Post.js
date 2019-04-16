import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Card, CardTitle } from 'reactstrap';
import styled from 'styled-components';
import CommentContainer from '../Comments/CommentContainer';

const Card = styled.div`
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	margin-bottom: 25px;
`;
const CardTitle = styled.div`
	font-size: 35px;
`;
const CardImg = styled.img`
	width: 100%;
	vertical-align: middle;
	border-style: none;
	margin-bottom: 10px;
`;

const PostHeader = styled.div`
	display: flex;
	padding: 5px;
	align-items: center;
`;
const HeaderImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 10px;
`;
const Icons = styled.i`
	margin-left: 10px;
	font-size: 20px;
	padding: 5px;
`;

const Likes = styled.p`
	margin-left: 10px;
`;
class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: props.post,
			likes: props.post.likes,
			liked: false,
		};
	}

	handleLike = () => {
		if (this.state.liked === false) {
			this.setState({ likes: this.state.likes + 1, liked: true });
		} else {
			this.setState({ likes: this.state.likes - 1, liked: false });
		}
	};

	render() {
		return (
			<Card>
				<PostHeader>
					<HeaderImg
						src={this.state.post.thumbnailUrl}
						alt={this.state.post.username}
					/>
					<CardTitle>{this.state.post.username}</CardTitle>
				</PostHeader>
				<CardImg src={this.state.post.imageUrl} alt="Post" />
				<Icons>
					<i
						className="far fa-heart"
						onClick={() => {
							this.handleLike();
						}}
					/>
					<Icons className="far fa-comment" />
				</Icons>
				<Likes>{this.state.likes} likes</Likes>

				<CommentContainer post={this.state.post} />
			</Card>
		);
	}
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
				text: PropTypes.string,
			})
		),
	}),
};

export default Post;
