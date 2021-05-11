import { Link } from 'react-router-dom';

import Container from './styles';

import logo from '../../assets/images/logo.png';
import Button from '../../components/Button';

const Login = () => (
	<Container>
		<div>
			<img src={logo} alt="logo" />
		</div>
		<div>
			<div className="container_register">
				<Link to="/register">Página de Cadastro</Link>
			</div>
			<div className="content">
				<div className="container_form">
					<h1>Faça o login na sua conta</h1>
					<form>
						<fieldset>
							<label htmlFor="email">Email</label>
							<input type="text" id="email" />
						</fieldset>
						<fieldset>
							<label htmlFor="password">Senha</label>
							<input type="text" id="password" />
						</fieldset>
						<div className="container_buttons">
							<Button className="button">Fazer login</Button>
							<div className="container_forget">
								<Link to="/forgetPassword">Esqueci minha senha</Link>
							</div>
						</div>
					</form>
				</div>
				<span>Aprovando postagens desde 2021</span>
			</div>
		</div>
	</Container>
);

export default Login;
