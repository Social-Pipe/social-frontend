import Container from './styles';

import Button from '../Button';

const Authenticate = ({ handleButton }) => (
	<Container>
		<h3>Insira a senha</h3>
		<p>
			Para visualizar esse conteúdo é necessário que você utilize a senha
			enviada pelo profissional.
		</p>
		<input />
		<Button onClick={handleButton}>Autenticar</Button>
	</Container>
);

export default Authenticate;
