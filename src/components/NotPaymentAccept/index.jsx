import { IoCloseCircleOutline } from 'react-icons/io5';

import Container from './styles';

import Button from '../Button';

const NotPaymentAccept = ({ handleButton }) => (
	<Container>
		<IoCloseCircleOutline size={48} color="#E35050" />
		<p>Sua forma de pagamento não foi aceita, então pausamos a sua conta.</p>
		<Button onClick={handleButton}>Ir para pagamentos</Button>
	</Container>
);

export default NotPaymentAccept;
