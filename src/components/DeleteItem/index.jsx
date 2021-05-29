import PropTypes from 'prop-types';

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

DeleteItem.propTypes = {
	handleDeleteItem: PropTypes.func.isRequired,
	handleNotDeleteItem: PropTypes.func.isRequired,
};

export default DeleteItem;
