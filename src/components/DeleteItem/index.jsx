import Container from './styles';

import Button from '../Button';

const DeleteItem = ({ handleDeleteItem, handleNotDeleteItem }) => (
	<Container>
		<p>Apagar Coca Cola?</p>
		<div>
			<Button type="button" onClick={handleDeleteItem}>
				Apagar agora
			</Button>
			<button type="button" onClick={handleNotDeleteItem}>
				Não apagar cliente
			</button>
		</div>
	</Container>
);

export default DeleteItem;
