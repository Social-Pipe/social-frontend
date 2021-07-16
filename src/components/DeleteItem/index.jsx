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
							if (item.type === 'client') {
								await api.delete(`clients/${item.id}/`);
							} else {
								await api.delete(`posts/${item.id}/`);
							}

							handleShowPopUp('sucess', `${item.name} Deletado`);
							handleDeleteItem(item.id, item.type);
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
					{`Não apagar ${item.type === 'client' ? 'cliente' : 'post'}`}
				</button>
			</div>
		</Container>
	);
};

DeleteItem.propTypes = {
	handleDeleteItem: PropTypes.func.isRequired,
	handleNotDeleteItem: PropTypes.func.isRequired,
	item: PropTypes.exact({
		name: PropTypes.string,
		id: PropTypes.number,
		type: PropTypes.string,
	}).isRequired,
};

export default DeleteItem;
