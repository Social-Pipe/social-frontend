import { useState } from 'react';

import InfosForm from './InfosForm';
import PaymentForm from './PaymentForm';
import Container from './styles';
import Success from './Success';

import logo from '../../assets/images/logo.png';

const Register = () => {
	const [page, setPage] = useState(0);
	return (
		<Container>
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div>
				<div className="container_register" />
				<div className="content">
					<div className="progress_bar">
						<div className="active">
							<p>Informações</p>
							<span />
						</div>
						<div className={page === 1 ? 'active' : ''}>
							<p>Pagamento</p>
							<span />
						</div>
					</div>
					{page === 0 && <InfosForm onPressButton={() => setPage(1)} />}
					{page === 1 && (
						<PaymentForm onPressButtonFinished={() => setPage(2)} />
					)}
					{page === 2 && <Success />}
					<span>Aprovando postagens desde 2021</span>
				</div>
			</div>
		</Container>
	);
};

export default Register;
