import { useFormik } from 'formik';
import { useState } from 'react';

import InfosForm from './InfosForm';
import PaymentForm from './PaymentForm';
import Container from './styles';
import Success from './Success';

import registerSchema from '../../validations/registerSchema';

const initialValues = {
	name: '',
	email: '',
	phone: '',
	password: '',
};

const Register = () => {
	const [page, setPage] = useState(0);
	const formik = useFormik({
		initialValues,
		validationSchema: registerSchema,
		onSubmit: values => {
			setPage(2);
			console.log(values);
		},
	});

	return (
		<Container>
			<div className="container_register" />
			<div className="content">
				{page < 2 && (
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
				)}
				<form onSubmit={formik.handleSubmit}>
					{page === 0 && (
						<InfosForm formik={formik} onPressButton={() => setPage(1)} />
					)}
					{page === 1 && (
						<PaymentForm
							onPressButtonFinished={() => {
								formik.handleSubmit();
							}}
						/>
					)}
				</form>

				{page === 2 && <Success />}
				<span>Aprovando postagens desde 2021</span>
			</div>
		</Container>
	);
};

export default Register;
