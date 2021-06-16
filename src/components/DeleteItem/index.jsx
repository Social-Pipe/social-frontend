import PropTypes from 'prop-types';
import { useState, useContext } from 'react';

import Container from './styles';

import api from '../../config/api';
import { Context } from '../../services/context';
import Button from '../Button';

const DeleteItem = ({ handleDeleteItem, handleNotDeleteItem, item }) => {
	const [loading, setLoading] = useState(false);
	const { handleShowPopUp } = useContext(Context);
	return (
		<Container>
			<p>{`Apagar ${item.name}?`}</p>
			<div>
				<Button
					type="button"
					loading={loading}
					onClick={async () => {
						if (loading) {
							return;
						}
						try {
							setLoading(true);
							await api.delete(`posts/${item.id}/`);

							handleShowPopUp('sucess', 'Link copiado!');
							handleDeleteItem(item.id);
							setLoading(false);
						} catch {
							handleShowPopUp('error', 'Tente Novamente');
							setLoading(false);
						}
					}}
				>
					Apagar agora
				</Button>
				<button
					type="button"
					onClick={() => {
						if (loading) {
							return;
						}
						handleNotDeleteItem();
					}}
				>
					Não apagar cliente
				</button>
			</div>
		</Container>
	);
};

DeleteItem.propTypes = {
	handleDeleteItem: PropTypes.func.isRequired,
	handleNotDeleteItem: PropTypes.func.isRequired,
};

export default DeleteItem;
