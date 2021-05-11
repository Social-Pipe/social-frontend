// import Form from './Form';
import Container from './styles';
import Success from './Sucess';

import logo from '../../assets/images/logo.png';
// import Button from '../../components/Button';

const ForgetPassword = () => (
	<Container>
		<div>
			<img src={logo} alt="logo" />
		</div>
		<div>
			<div className="container_register" />
			<div className="content">
				{/* <Form /> */}
				<Success />
				<span>Aprovando postagens desde 2021</span>
			</div>
		</div>
	</Container>
);

export default ForgetPassword;
