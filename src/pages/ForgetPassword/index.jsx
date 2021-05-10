import Container from './styles';

import logo from '../../assets/images/logo.png';
import Button from '../../components/Button';

const ForgetPassword = () => (
	<Container>
		<div>
			<img src={logo} alt="logo" />
		</div>
		<div>
			<div className="container_register" />
			<div className="content">
				<div className="container_form">
					<h1>Esqueci minha senha</h1>
					<p>
						Preencha o campo abaixo com o seu email cadastrado aqui na Social
						Pipe para recuperar a sua senha.{' '}
					</p>
					<form>
						<fieldset>
							<label htmlFor="email">Email</label>
							<input type="text" id="email" />
						</fieldset>
						<div className="container_buttons">
							<div className="container_forget">
								<a href="#a">Voltar para a tela de login</a>
							</div>
							<Button className="button">Fazer login</Button>
						</div>
					</form>
				</div>
				<span>Aprovando postagens desde 2021</span>
			</div>
		</div>
	</Container>
);

export default ForgetPassword;
