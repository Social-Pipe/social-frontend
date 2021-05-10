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
				<a href="#a">Página de Cadastro</a>
			</div>
			<div className="container_form">
				<form>
					<h1>Faça o login na sua conta</h1>
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
							<a href="#a">Esqueci minha senha</a>
						</div>
					</div>
				</form>
				<span>Aprovando postagens desde 2021</span>
			</div>
		</div>
	</Container>
);

export default Login;
