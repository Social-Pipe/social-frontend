import PropTypes from 'prop-types';

import Container from './styles';

const Comment = ({ comment, client, user }) => (
	<Container>
		<header>
			{comment.writer === 'USER' && <h4>{user} (Designer)</h4>}
			{comment.writer === 'CLIENT' && <h4>{client} (Cliente)</h4>}
			<span>{comment.dataFormat}</span>
		</header>
		<p>{comment.message}</p>
	</Container>
);

Comment.propTypes = {
	comment: PropTypes.object.isRequired,
};

export default Comment;
