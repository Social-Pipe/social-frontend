import Container from './styles';

import Button from '../../../components/Button';
import { ContainerButtons } from '../styles';

const PaymentForm = () => (
	<Container>
		<h1>Finalize adicionando suas informações de assinatura!</h1>
		<form>
			<div className="info_payment_container">
				<p>Informações de pagamento</p>
			</div>
			<ContainerButtons className="container_buttons">
				<Button className="button">Finalizar cadastro</Button>
				<div className="container_forget" />
			</ContainerButtons>
		</form>
	</Container>
);

export default PaymentForm;
