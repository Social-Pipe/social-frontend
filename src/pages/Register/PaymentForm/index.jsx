import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Container from './styles';

import creditCard from '../../../assets/icons/credit-card.svg';
import creditCardTwo from '../../../assets/icons/credit-card2.png';
import Button from '../../../components/Button';
import maskCardNumber from '../../../utils/maskCardNumber';
import maskCep from '../../../utils/maskCep';
import maskCpf from '../../../utils/maskCpf';
import maskDate from '../../../utils/maskDate';
import maskPhone from '../../../utils/maskPhone';
import { ContainerButtons, FormContainer } from '../styles';

const PaymentForm = ({ formik, loading }) => {
	const [states, setStates] = useState([]);
	function handleDDD(e) {
		const valueNumber = e.target.value.match(/\d+/g)?.join('');
		if (valueNumber?.length > 2) {
			return;
		}
		formik.setFieldValue('ddd', valueNumber || '');
	}

	useEffect(() => {
		if (!formik.values.state) {
			return;
		}
		const uf = states.find(state => state.nome === formik.values.state);
		if (!uf) {
			return;
		}

		formik.setFieldValue('sigla', uf.sigla);
	}, [formik.values.state]);

	useEffect(() => {
		async function getStates() {
			const { data } = await axios.get(
				'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
			);
			setStates(data);
			if (data[0] && !formik.values.state) {
				formik.setFieldValue('state', data[0].nome);
			}
		}

		getStates();
	}, []);

	return (
		<Container>
			<h1>Informações de pagamento</h1>
			<p>
				O ambiente é 100% seguro. Não revelaremos a ninguém nenhuma informação
				de pagamento ou quaisquer outra informação que tenha inserido na Social
				Pipe.
			</p>
			<div>
				<FormContainer>
					<fieldset>
						<label htmlFor="Cep">Cep</label>
						<input
							id="Cep"
							name="cep"
							placeholder="21020-020"
							onChange={e =>
								maskCep(e.target.value, newValue =>
									formik.setFieldValue('cep', newValue)
								)
							}
							autoComplete="postal-code"
							value={formik.values.cep}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="Adress">Endereço</label>
						<input
							placeholder="Avenida Alameda"
							id="Adress"
							name="adress"
							onChange={formik.handleChange}
							value={formik.values.adress}
						/>
					</fieldset>
					<div className="row">
						<fieldset>
							<label htmlFor="Num">Numero</label>
							<input
								id="Num"
								name="number"
								onChange={formik.handleChange}
								value={formik.values.number}
							/>
						</fieldset>

						<div className="select">
							<label>Estado</label>
							<div>
								<div className="mask">
									<p>{formik.values.state}</p>
									<MdKeyboardArrowDown size={32} color="#717171" />
								</div>
								<select
									defaultValue={formik.values.state}
									onChange={e => formik.setFieldValue('state', e.target.value)}
								>
									{states.map(state => (
										<option value={state.nome} key={state.id}>
											{state.nome}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<div className="row">
						<fieldset>
							<label htmlFor="city">Cidade</label>
							<input
								id="city"
								name="city"
								onChange={formik.handleChange}
								value={formik.values.city}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="Bairro">Bairro</label>
							<input
								id="Bairro"
								name="district"
								onChange={formik.handleChange}
								value={formik.values.district}
							/>
						</fieldset>
					</div>
					<div className="contact">
						<h3>Informações de contato</h3>
						<div className="row ">
							<fieldset>
								<label htmlFor="DDD">DDD</label>
								<input
									id="DDD"
									name="ddd"
									placeholder="12"
									maxLength={2}
									autoComplete="tel-area-code"
									onChange={handleDDD}
									value={formik.values.ddd}
								/>
							</fieldset>
							<fieldset>
								<label htmlFor="phone2">Número de celular</label>
								<input
									placeholder="00000-0000"
									id="phone2"
									autoComplete="tel-local"
									name="phoneContact"
									onChange={e =>
										maskPhone(
											e.target.value,
											newValue =>
												formik.setFieldValue('phoneContact', newValue),
											{ ddd: false }
										)
									}
									value={formik.values.phoneContact}
								/>
							</fieldset>
						</div>
					</div>
					<div className="payment">
						<h3>Informações finais</h3>
						<fieldset>
							<label htmlFor="cpf">CPF</label>
							<input
								placeholder="xxx.xxx-xxx-xx"
								id="cpf"
								name="cpf"
								value={formik.values.cpf}
								onChange={e =>
									maskCpf(e.target.value, value =>
										formik.setFieldValue('cpf', value)
									)
								}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="cardNumber">Número do cartão</label>
							<div className="card">
								<input
									type="text"
									placeholder="0000 0000 0000 0000"
									id="cardNumber"
									name="cardNumber"
									autoComplete="cc-number"
									onBlur={formik.handleBlur}
									value={formik.values.cardNumber}
									onChange={e =>
										maskCardNumber(e.target.value, newValue =>
											formik.setFieldValue('cardNumber', newValue)
										)
									}
								/>
								<img src={creditCardTwo} alt="credit icon" />
							</div>
						</fieldset>
						<fieldset>
							<label htmlFor="cardName">Nome (exatamente como no cartão)</label>
							<input
								autoComplete="cc-name"
								id="cardName"
								placeholder="EX: TITO LIMA"
								autoCapitalize="true"
								className="cardName"
								name="cardName"
								onChange={formik.handleChange}
								value={formik.values.cardName}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="vality">Validade</label>
							<input
								placeholder="Ex: 11/23"
								id="vality"
								name="vality"
								onChange={e => {
									maskDate(e.target.value, value =>
										formik.setFieldValue('vality', value)
									);
								}}
								value={formik.values.vality}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="cardCode">Código de segurança</label>
							<div className="card">
								<input
									placeholder="123"
									type="text"
									id="cardCode"
									name="cardCode"
									autoComplete="cc-csc"
									onBlur={formik.handleBlur}
									value={formik.values.cardCode}
									onChange={e => {
										const valueNumber = e.target.value.match(/\d+/g)?.join('');
										if (!valueNumber || valueNumber?.length > 3) {
											return;
										}
										formik.setFieldValue('cardCode', valueNumber);
									}}
									maxLength={3}
								/>
								<img src={creditCard} alt="credit-card" />
							</div>
						</fieldset>
					</div>
					<ContainerButtons className="container_buttons">
						<Button
							type="button"
							onClick={() => {
								console.log(loading);
								if (loading) {
									return;
								}
								formik.handleSubmit();
							}}
							className="button"
							loading={loading}
						>
							Finalizar cadastro
						</Button>
						<div className="container_forget" />
					</ContainerButtons>
				</FormContainer>
			</div>
		</Container>
	);
};

PaymentForm.propTypes = {
	formik: PropTypes.object.isRequired,
};

export default PaymentForm;
