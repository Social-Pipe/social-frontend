import { useFormik } from 'formik';
import { useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Container, { FieldSet, Info, Form } from './styles';

import Button from '../../components/Button';
import maskCep from '../../utils/maskCep';
import maskCpf from '../../utils/maskCpf';
import maskPhone from '../../utils/maskPhone';
import configUserSchema from '../../validations/configUserSchema';

const initialValues = {
	name: '',
	email: '',
	phone: '',
	cpf: '',
	password: '',
	cep: '',
	adress: '',
	number: '',
	city: '',
	state: '',
	bairro: '',
	ddd: '',
	phoneContact: '',
};

const ConfigUser = () => {
	const formik = useFormik({
		initialValues,
		onSubmit(values) {
			console.log(values);
		},
		validationSchema: configUserSchema,
	});

	function handleDDD(e) {
		const valueNumber = e.target.value.match(/\d+/g)?.join('');
		if (valueNumber?.length > 2) {
			return;
		}
		formik.setFieldValue('ddd', valueNumber || '');
	}

	useEffect(() => {
		formik.setFieldValue('state', 'rio de janeiro');
	}, []);

	return (
		<Container>
			<div className="container">
				<div className="header">
					<Link to="/dashboard">
						<RiArrowLeftSLine size={32} color="#EE4266" />
						<p>Voltar para o dashboard</p>
					</Link>
					<h2>Meu painel</h2>
				</div>
				<div className="content">
					<Form onSubmit={formik.handleSubmit}>
						<div>
							<div className="column">
								<h2>Informações de cadastro</h2>
								<FieldSet>
									<label htmlFor="Name">Nome</label>
									<input
										placeholder="Usuário Teste"
										type="text"
										id="Name"
										name="name"
										autoComplete="name"
										onChange={formik.handleChange}
										value={formik.values.name}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="email">Email</label>
									<input
										placeholder="usuário@teste.com"
										type="email"
										id="email"
										name="email"
										autoComplete="email"
										onChange={formik.handleChange}
										value={formik.values.email}
									/>
								</FieldSet>

								<FieldSet>
									<label htmlFor="phone">Celular</label>
									<input
										placeholder="(12) 00000-0000"
										autoComplete="tel-national"
										type="tel"
										id="phone"
										name="phone"
										value={formik.values.phone}
										onChange={e =>
											maskPhone(e.target.value, newValue =>
												formik.setFieldValue('phone', newValue)
											)
										}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="cpf">CPF</label>
									<input
										id="cpf"
										placeholder="xxx.xxx-xxx-xx"
										name="cpf"
										onChange={e =>
											maskCpf(e.target.value, newValue =>
												formik.setFieldValue('cpf', newValue)
											)
										}
										value={formik.values.cpf}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="password">Senha</label>
									<input
										type="password"
										id="password"
										placeholder="**********"
										name="password"
										autoComplete="current-password"
										onChange={formik.handleChange}
										value={formik.values.password}
									/>
								</FieldSet>
							</div>
							<div className="column">
								<h2>Endereço de cobrança</h2>
								<FieldSet>
									<label htmlFor="Cep">Cep</label>
									<input
										placeholder="21020-020"
										id="Cep"
										name="cep"
										onChange={e =>
											maskCep(e.target.value, newValue =>
												formik.setFieldValue('cep', newValue)
											)
										}
										autoComplete="postal-code"
										value={formik.values.cep}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="Adress">Endereço</label>
									<input
										placeholder="Avenida Alameda"
										id="Adress"
										name="adress"
										onChange={formik.handleChange}
										value={formik.values.adress}
									/>
								</FieldSet>
								<div className="row">
									<FieldSet>
										<label htmlFor="Num">Numero</label>
										<input
											id="Num"
											name="number"
											onChange={formik.handleChange}
											value={formik.values.number}
										/>
									</FieldSet>

									<div className="select">
										<label>Estado</label>
										<div>
											<div className="mask">
												<p>{formik.values.state}</p>
												<MdKeyboardArrowDown size={32} color="#717171" />
											</div>
											<select
												onChange={e =>
													formik.setFieldValue('state', e.target.value)
												}
											>
												<option value="rio de janeiro">Rio de Janeiro</option>
												<option>Sao paulo</option>
											</select>
										</div>
									</div>
								</div>
								<div className="row">
									<FieldSet>
										<label htmlFor="city">Cidade</label>
										<input
											id="city"
											name="city"
											onChange={formik.handleChange}
											value={formik.values.city}
										/>
									</FieldSet>
									<FieldSet>
										<label htmlFor="Bairro">Bairro</label>
										<input
											id="Bairro"
											name="bairro"
											onChange={formik.handleChange}
											value={formik.values.bairro}
										/>
									</FieldSet>
								</div>
							</div>
							<div className="contact">
								<h3>Informações de contato</h3>
								<div className="row ">
									<FieldSet>
										<label htmlFor="DDD">DDD</label>
										<input
											placeholder="12"
											id="DDD"
											name="ddd"
											maxLength={2}
											autoComplete="tel-country-code"
											onChange={handleDDD}
											value={formik.values.ddd}
										/>
									</FieldSet>
									<FieldSet>
										<label htmlFor="phone2">Número de celular</label>
										<input
											id="phone2"
											autoComplete="tel-national"
											name="phoneContact"
											placeholder="00000-0000"
											onChange={e =>
												maskPhone(e.target.value, newValue =>
													formik.setFieldValue('phoneContact', newValue)
												)
											}
											value={formik.values.phoneContact}
										/>
									</FieldSet>
								</div>
							</div>
						</div>
						<Button type="submit" secondary>
							Alterar informações
						</Button>
					</Form>
					<Info>
						<h3>Valor atual de assinatura</h3>
						<p className="price">R$ 9,90</p>
						<h3>Histórico de Pagamentos</h3>
						<div className="history">
							<div>
								<p>
									<strong>R$ 9,90</strong> em Abril de 2021
								</p>
								<span />
								<div>Pago</div>
							</div>
							<div>
								<p>
									<strong>R$ 9,90</strong> em Abril de 2021
								</p>
								<span />
								<div>Pago</div>
							</div>
							<div>
								<p>
									<strong>R$ 9,90</strong> em Abril de 2021
								</p>
								<span />
								<div>Pago</div>
							</div>
						</div>
						<div className="container_buttons">
							<Link to="configPayment" className="edit">
								Alterar informação de pagamento
							</Link>
							<button type="button" className="desactive">
								Desativar conta
							</button>
						</div>
					</Info>
				</div>

				<span>Aprovando postagens desde 2021</span>
			</div>
		</Container>
	);
};

export default ConfigUser;
