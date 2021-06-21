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

	async function autentic() {
		if (loading) {
			return;
		}
		try {
			setLoading(true);
			const response = await api.post('token/client', {
				accessHash: hash,
				password,
			});
			setLoading(false);
			handleButton(response.data);
		} catch {
			setLoading(false);
			handleShowPopUp('error', 'Erro, Tente Novamente');
		}
	}

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
				onKeyPress={key => {
					if (key.key === 'Enter' && password) {
						autentic();
					}
				}}
			/>
			<Button loading={loading} onClick={autentic}>
				Autenticar
			</Button>
		</Container>
	);
};

Authenticate.propTypes = {
	handleButton: PropTypes.func.isRequired,
};

export default Authenticate;
