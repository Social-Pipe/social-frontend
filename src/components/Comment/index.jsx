import Container from './styles';

const Comment = ({ comment }) => (
	<Container>
		<header>
			{comment.writer === 'USER' && <h4>Usuário</h4>}
			{comment.writer === 'CLIENT' && <h4>Cliente</h4>}
			<span>{comment.dataFormat}</span>
		</header>
		<p>{comment.message}</p>
	</Container>
);

export default Comment;
