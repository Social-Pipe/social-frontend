import { useFormik } from 'formik';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Container, { FieldSet, Form } from './styles';

import creditCard from '../../assets/icons/credit-card.svg';
import creditCardTwo from '../../assets/icons/credit-card2.png';
import Button from '../../components/Button';
import maskCardNumber from '../../utils/maskCardNumber';
import maskDate from '../../utils/maskDate';
import configPaymentSchema from '../../validations/configPaymentSchema';

const initialValues = {
	name: '',
	numberCard: '',
	vality: '',
	codeCard: '',
};

const ChangeConfigPayment = () => {
	const formik = useFormik({
		initialValues,
		onSubmit(values) {
			console.log(values);
		},
		validationSchema: configPaymentSchema,
	});

	return (
		<Container>
			<div className="container">
				<div className="header">
					<Link to="/dashboard">
						<RiArrowLeftSLine size={32} color="#EE4266" />
						<p>Voltar para o dashboard</p>
					</Link>
					<h2>Alterar informações de pagamento</h2>
				</div>
				<div className="content">
					<Form onSubmit={formik.handleSubmit}>
						<FieldSet>
							<label htmlFor="numberCard">Número do cartão</label>
							<div className="card">
								<input
									type="text"
									id="cardNumber"
									name="cardNumber"
									autoComplete="cc-number"
									value={formik.values.numberCard}
									onChange={e =>
										maskCardNumber(e.target.value, newValue =>
											formik.setFieldValue('numberCard', newValue)
										)
									}
								/>
								<img src={creditCardTwo} alt="credit icon" />
							</div>
						</FieldSet>
						<FieldSet>
							<label htmlFor="name">Nome (exatamente como no cartão)</label>
							<input
								type="name"
								id="name"
								name="name"
								autoComplete="name"
								onChange={formik.handleChange}
								value={formik.values.name}
							/>
						</FieldSet>

						<FieldSet>
							<label htmlFor="vality">Validade</label>
							<input
								autoComplete="tel-national"
								type="tel"
								id="vality"
								name="vality"
								value={formik.values.vality}
								onChange={e =>
									maskDate(e.target.value, newValue =>
										formik.setFieldValue('vality', newValue)
									)
								}
							/>
						</FieldSet>
						<FieldSet>
							<label htmlFor="codeCard">Código de segurança</label>
							<div className="card">
								<input
									type="text"
									id="cardCode"
									name="codeCard"
									autoComplete="cc-csc"
									onBlur={formik.handleBlur}
									value={formik.values.codeCard}
									onChange={e => {
										const valueNumber = e.target.value.match(/\d+/g)?.join('');
										if (!valueNumber || valueNumber?.length > 3) {
											return;
										}
										formik.setFieldValue('codeCard', valueNumber);
									}}
									maxLength={3}
								/>
								<img src={creditCard} alt="credit-card" />
							</div>
						</FieldSet>

						<Button type="submit">Salvar informações</Button>
					</Form>
				</div>

				<span>Aprovando postagens desde 2021</span>
			</div>
		</Container>
	);
};

export default ChangeConfigPayment;
