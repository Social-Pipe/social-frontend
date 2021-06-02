import { useFormik } from 'formik';
import pagarme from 'pagarme';
import { useContext, useState } from 'react';

import InfoClient from './InfoClient';
import InfosForm from './InfosForm';
import PaymentForm from './PaymentForm';
import Container, { ProgressBar } from './styles';
import Success from './Success';

import api from '../../config/api';
import { Context } from '../../services/context';
import registerSchema from '../../validations/registerSchema';

const initialValues = {
	name: '',
	email: '',
	phone: '',
	password: '',
	companyName: '',
	logo: null,
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
	sigla: '',
};

const Register = () => {
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const { login, handleShowPopUp } = useContext(Context);

	const formik = useFormik({
		initialValues,
		validationSchema: registerSchema,
		onSubmit: async values => {
			try {
				setLoading(true);
				const cardValues = {
					card_number: values.cardNumber.match(/\d+/g).join(''),
					card_holder_name: values.cardName,
					card_expiration_date: values.vality.match(/\d+/g).join(''),
					card_cvv: values.cardCode,
				};
				const client = await pagarme.client.connect({
					api_key: 'ak_test_Wa4vKvUZGvchQYclsvaXxbnI1jtcOy',
				});
				const cardId = await client.cards.create(cardValues);

				const request = {
					email: values.email,
					password: values.password,
					name: values.name,
					cpf: values.cpf.match(/\d+/g).join(''),
					phone: values.phone.match(/\d+/g).join(''),
					payment: {
						address: {
							cep: values.cep.match(/\d+/g).join(''),
							street: values.adress,
							number: values.number,
							city: values.city,
							state_uf: values.sigla,
							neighborhood: values.district,
						},
						card_id: cardId.id,
					},
					client: {
						name: values.companyName,
						instagram: values.instagram,
						facebook: values.facebook,
						linkedin: values.linkedin,
					},
				};

				await api.post('users/', request);
				const responseLogin = await api.post('token/', {
					email: values.email,
					password: values.password,
				});
				login(responseLogin.data.access, responseLogin.data.refresh);
				const formClient = new FormData();
				formClient.append('logo', values.logo);
				formClient.append('name', values.companyName);
				formClient.append('instagram', values.instagram);
				formClient.append('facebook', values.facebook);
				formClient.append('linkedin', values.linkedin);
				await api.post('clients/', formClient, {
					headers: {
						Authorization: `Bearer ${responseLogin.data.access}`,
					},
				});
				setPage(3);
			} catch (e) {
				handleShowPopUp('error', 'Erro no cadastro');
			} finally {
				setLoading(false);
			}
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
										'file',
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
								verifyValues(['companyName', 'passwordAccess', 'logo'], 2)
							}
						/>
					)}

					{page === 2 && (
						<PaymentForm
							formik={formik}
							onPressButtonFinished={() => {
								formik.handleSubmit();
							}}
							loading={loading}
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
