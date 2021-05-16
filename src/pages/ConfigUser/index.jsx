import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Container from './styles';

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
				<form>
					<fieldset>
						<label htmlFor="Name">Nome</label>
						<input
							type="text"
							id="Name"
							name="Name"
							// onChange={formik.handleChange}
							// value={formik.values.email}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							// onChange={formik.handleChange}
							// value={formik.values.email}
						/>
					</fieldset>

					<fieldset>
						<label htmlFor="phone">Celular</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							// value={formik.values.phone}
							// onBlur={formik.handleBlur}
							// onChange={e => maskPhone(e.target.value)}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="password">Senha</label>
						<input
							type="password"
							id="password"
							name="password"
							// onChange={formik.handleChange}
							// value={formik.values.password}
						/>
					</fieldset>
					<Button secondary>Alterar informações</Button>
				</form>
				<div className="info">
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
				</div>
			</div>

			<span>Aprovando postagens desde 2021</span>
		</div>
	</Container>
);

export default ConfigUser;
