import Container from './styles';

import Button from '../../../components/Button';
import { ContainerButtons } from '../styles';

const success = () => (
	<Container>
		<h1>Sucesso!</h1>
		<p>
			Seu cadastro foi finalizado e seu pagamento foi aprovado com sucesso. A
			partir de agora você tem acesso ao Social Pipe! Seja bem-vindo(a),
			aproveite!
		</p>
		<ContainerButtons className="container_buttons">
			<Button className="button">Fazer Login</Button>
			<div className="container_forget" />
		</ContainerButtons>
	</Container>
);

export default success;
