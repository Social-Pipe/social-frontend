import Container from './styles';

import Button from '../../../components/Button';
import { ContainerButtons, FormContainer } from '../styles';

const InfosForm = () => (
	<Container>
		<h1>Esqueci minha senha</h1>
		<p>
			Preencha o campo abaixo com o seu email cadastrado aqui na Social Pipe
			para recuperar a sua senha.
		</p>
		<FormContainer>
			<fieldset>
				<label htmlFor="name">Nome</label>
				<input type="text" id="name" />
			</fieldset>
			<fieldset>
				<label htmlFor="email">Email</label>
				<input type="text" id="email" />
			</fieldset>
			<fieldset>
				<label htmlFor="phone">Celular</label>
				<input type="text" id="phone" />
			</fieldset>
			<fieldset>
				<label htmlFor="password">Senha</label>
				<input type="text" id="password" />
			</fieldset>
			<ContainerButtons className="container_buttons">
				<Button className="button">Continuar cadastro</Button>
				<div className="container_forget" />
			</ContainerButtons>
		</FormContainer>
	</Container>
);

export default InfosForm;
