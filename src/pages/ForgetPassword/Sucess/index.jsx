import Container from './styles';

const Sucess = () => (
	<Container>
		<h1>Enviamos a sua senha por email!</h1>
		<p>
			Acabamos de te enviar um e-mail com a sua senha. Por favor, acesse a sua
			caixa de entra ou spam.
		</p>
		<div className="container_buttons">
			<div className="container_forget">
				<a href="#a">Voltar para a tela de login</a>
			</div>
			<div className="container_forget" />
		</div>
	</Container>
);

export default Sucess;
