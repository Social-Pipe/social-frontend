import { useFormik } from 'formik';
import { useState } from 'react';

import InfoClient from './InfoClient';
import InfosForm from './InfosForm';
import PaymentForm from './PaymentForm';
import Container, { ProgressBar } from './styles';
import Success from './Success';

import registerSchema from '../../validations/registerSchema';

const initialValues = {
	name: '',
	email: '',
	phone: '',
	password: '',
	companyName: '',
	passwordAccess: '',
	checkbox: false,
	instagram: false,
	facebook: false,
	linkedin: false,
	cardNumber: '',
	cardCode: '',
	cpf: '',
	cep: '',
	ddd: '',
	adress: '',
	number: '',
	state: '',
	city: '',
	district: '',
	phoneContact: '',
	cardName: '',
	vality: '',
};

const Register = () => {
	const [page, setPage] = useState(0);

	const formik = useFormik({
		initialValues,
		validationSchema: registerSchema,
		onSubmit: values => {
			console.log(values);
			setPage(3);
		},
	});

	async function verifyValues(ArrayFieldsNames, pageValue) {
		let notTouched = false;

		if (!formik.values.checkbox) {
			return;
		}

		ArrayFieldsNames.forEach(field => {
			if (!formik.touched[field] && formik.errors[field]) {
				notTouched = true;
			}
		});

		if (!notTouched) {
			setPage(pageValue);
		}
	}

	return (
		<Container>
			<div className="container_register" />
			<div className="content">
				{page < 3 && (
					<ProgressBar>
						<button
							type="button"
							className={`${page > 0 ? 'pass' : ''}${
								page === 0 ? 'active' : ''
							}`}
							onClick={() => {
								if (page === 0) {
									return;
								}
								setPage(0);
							}}
						>
							<p>Cadastro</p>
							<span />
						</button>
						<button
							type="button"
							className={`${page > 1 ? 'pass' : ''}${
								page === 1 ? 'active' : ''
							}`}
							onClick={() => {
								if (page === 1) {
									return;
								}
								verifyValues(['name', 'email', 'phone', 'password'], 1);
							}}
						>
							<p>Cliente</p>
							<span />
						</button>
						<button
							type="button"
							className={`${page > 2 ? 'pass' : ''}${
								page === 2 ? 'active' : ''
							}`}
							onClick={() => {
								if (page === 2) {
									return;
								}
								verifyValues(
									[
										'name',
										'email',
										'phone',
										'password',
										'companyName',
										'passwordAccess',
									],
									2
								);
							}}
						>
							<p>Pagamento</p>
							<span />
						</button>
					</ProgressBar>
				)}
				<form onSubmit={formik.handleSubmit}>
					{page === 0 && (
						<InfosForm
							formik={formik}
							onPressButton={() =>
								verifyValues(['name', 'email', 'phone', 'password'], 1)
							}
						/>
					)}

					{page === 1 && (
						<InfoClient
							formik={formik}
							onPressButton={() =>
								verifyValues(['companyName', 'passwordAccess'], 2)
							}
						/>
					)}

					{page === 2 && (
						<PaymentForm
							formik={formik}
							onPressButtonFinished={() => {
								formik.handleSubmit();
							}}
						/>
					)}
				</form>

				{page === 3 && <Success />}
				<span>Aprovando postagens desde 2021</span>
			</div>
		</Container>
	);
};

export default Register;
