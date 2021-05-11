import { useState } from 'react';

import Form from './Form';
import Container from './styles';
import Success from './Sucess';

import logo from '../../assets/images/logo.png';

const ForgetPassword = () => {
	const [sucessRequestPassword, setSucessRequestPassword] = useState(false);
	return (
		<Container>
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div>
				<div className="container_register" />
				<div className="content">
					{!sucessRequestPassword ? (
						<Form onPressButtonAfter={() => setSucessRequestPassword(true)} />
					) : (
						<Success />
					)}
					<span>Aprovando postagens desde 2021</span>
				</div>
			</div>
		</Container>
	);
};

export default ForgetPassword;
