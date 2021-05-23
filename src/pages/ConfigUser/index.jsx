import { useFormik } from 'formik';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Container, { FieldSet, Info, Form } from './styles';

import Button from '../../components/Button';

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
	phoneContct: '',
};

const ConfigUser = () => {
	const formik = useFormik({
		initialValues,
		onSubmit(values) {
			console.log(values);
		},
	});

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
										type="text"
										id="Name"
										name="name"
										onChange={formik.handleChange}
										value={formik.values.name}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										onChange={formik.handleChange}
										value={formik.values.email}
									/>
								</FieldSet>

								<FieldSet>
									<label htmlFor="phone">Celular</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formik.values.phone}
										// onBlur={formik.handleBlur}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="cpf">CPF</label>
									<input
										id="cpf"
										name="cpf"
										onChange={formik.handleChange}
										value={formik.values.cpf}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="password">Senha</label>
									<input
										type="password"
										id="password"
										name="password"
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
										id="Cep"
										name="cep"
										onChange={formik.handleChange}
										value={formik.values.cep}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="Adress">Endereço</label>
									<input
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
									<FieldSet>
										<label htmlFor="state">Estado</label>
										<input
											id="state"
											name="state"
											onChange={formik.handleChange}
											value={formik.values.state}
										/>
									</FieldSet>
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
											id="DDD"
											name="ddd"
											onChange={formik.handleChange}
											value={formik.values.ddd}
										/>
									</FieldSet>
									<FieldSet>
										<label htmlFor="phone2">Número de celular</label>
										<input
											id="phone2"
											name="phoneContct"
											onChange={formik.handleChange}
											value={formik.values.phoneContct}
										/>
									</FieldSet>
								</div>
							</div>
						</div>
						<Button secondary>Alterar informações</Button>
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
							<button type="button" className="edit">
								Alterar informação de pagamento
							</button>
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
