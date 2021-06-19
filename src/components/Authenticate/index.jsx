import PropTypes from 'prop-types';
import { useContext, useState } from 'react';

import Container from './styles';

import api from '../../config/api';
import { Context } from '../../services/context';
import Button from '../Button';

const Authenticate = ({ handleButton, hash }) => {
	const [loading, setLoading] = useState(false);
	const [password, setPassword] = useState('');
	const { handleShowPopUp } = useContext(Context);

	return (
		<Container>
			<h3>Insira a senha</h3>
			<p>
				Para visualizar esse conteúdo é necessário que você utilize a senha
				enviada pelo profissional.
			</p>
			<input
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Button
				loading={loading}
				onClick={async () => {
					if (loading) {
						return;
					}
					try {
						setLoading(true);
						console.log(password);
						const response = await api.post('token/client', {
							accessHash: hash,
							password,
						});
						setLoading(false);
						console.log(response);
						handleButton(response.data);
					} catch (e) {
						setLoading(false);
						handleShowPopUp('error', 'Erro, Tente Novamente');
						console.log(e);
					}
				}}
			>
				Autenticar
			</Button>
		</Container>
	);
};

Authenticate.propTypes = {
	handleButton: PropTypes.func.isRequired,
};

export default Authenticate;
