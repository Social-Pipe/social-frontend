import { Link } from 'react-router-dom';

import Container from './styles';

import Button from '../../../components/Button';

const ForgetPassword = ({ onPressButtonAfter }) => (
	<Container>
		<h1>Esqueci minha senha</h1>
		<p>
			Preencha o campo abaixo com o seu email cadastrado aqui na Social Pipe
			para recuperar a sua senha.
		</p>
		<form>
			<fieldset>
				<label htmlFor="email">Email</label>
				<input type="text" id="email" />
			</fieldset>
			<div className="container_buttons">
				<div className="container_forget">
					<Link to="/">Voltar para a tela de login</Link>
				</div>
				<Button type="button" onClick={onPressButtonAfter} className="button">
					Recuperar senha
				</Button>
			</div>
		</form>
	</Container>
);

export default ForgetPassword;
