import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Container, { FieldSet, Info, Form } from './styles';

import Button from '../../components/Button';

const ConfigUser = () => (
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
				<Form>
					<div>
						<div className="column">
							<h2>Informações de cadastro</h2>
							<FieldSet>
								<label htmlFor="Name">Nome</label>
								<input
									type="text"
									id="Name"
									name="Name"
									// onChange={formik.handleChange}
									// value={formik.values.email}
								/>
							</FieldSet>
							<FieldSet>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									// onChange={formik.handleChange}
									// value={formik.values.email}
								/>
							</FieldSet>

							<FieldSet>
								<label htmlFor="phone">Celular</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									// value={formik.values.phone}
									// onBlur={formik.handleBlur}
									// onChange={e => maskPhone(e.target.value)}
								/>
							</FieldSet>
							<FieldSet>
								<label htmlFor="password">CPF</label>
								<input
									id="password"
									name="password"
									// onChange={formik.handleChange}
									// value={formik.values.password}
								/>
							</FieldSet>
							<FieldSet>
								<label htmlFor="password">Senha</label>
								<input
									type="password"
									id="password"
									name="password"
									// onChange={formik.handleChange}
									// value={formik.values.password}
								/>
							</FieldSet>
						</div>
						<div className="column">
							<h2>Endereço de cobrança</h2>
							<FieldSet>
								<label htmlFor="Cep">Cep</label>
								<input
									id="Cep"
									name="Cep"
									// onChange={formik.handleChange}
									// value={formik.values.password}
								/>
							</FieldSet>
							<FieldSet>
								<label htmlFor="Adress">Endereço</label>
								<input
									id="Adress"
									name="Adress"
									// onChange={formik.handleChange}
									// value={formik.values.password}
								/>
							</FieldSet>
							<div className="row">
								<FieldSet>
									<label htmlFor="Num">Numero</label>
									<input
										id="Num"
										name="Num"
										// onChange={formik.handleChange}
										// value={formik.values.password}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="state">Estado</label>
									<input
										id="state"
										name="state"
										// onChange={formik.handleChange}
										// value={formik.values.password}
									/>
								</FieldSet>
							</div>
							<div className="row">
								<FieldSet>
									<label htmlFor="city">Cidade</label>
									<input
										id="city"
										name="city"
										// onChange={formik.handleChange}
										// value={formik.values.password}
									/>
								</FieldSet>
								<FieldSet>
									<label htmlFor="Bairro">Bairro</label>
									<input
										id="Bairro"
										name="Bairro"
										// onChange={formik.handleChange}
										// value={formik.values.password}
									/>
								</FieldSet>
							</div>
							<div className="contact">
								<h3>Informações de contato</h3>
								<div className="row">
									<FieldSet>
										<label htmlFor="DDD">DDD</label>
										<input
											id="DDD"
											name="DDD"
											// onChange={formik.handleChange}
											// value={formik.values.password}
										/>
									</FieldSet>
									<FieldSet>
										<label htmlFor="phone2">Número de celular</label>
										<input
											id="phone2"
											name="phone2"
											// onChange={formik.handleChange}
											// value={formik.values.password}
										/>
									</FieldSet>
								</div>
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

export default ConfigUser;
