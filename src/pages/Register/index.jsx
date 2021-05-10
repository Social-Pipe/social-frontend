// import First from './InfosForm';
import PaymentForm from './PaymentForm';
import Container from './styles';
// import Success from './Success';

import logo from '../../assets/images/logo.png';

const Register = () => (
	<Container>
		<div>
			<img src={logo} alt="logo" />
		</div>
		<div>
			<div className="container_register" />
			<div className="content">
				<PaymentForm />
				<span>Aprovando postagens desde 2021</span>
			</div>
		</div>
	</Container>
);

export default Register;
