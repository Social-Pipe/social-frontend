import Container from './styles';

import Button from '../../../components/Button';
import { ContainerButtons, FormContainer } from '../styles';

const InfosForm = ({ onPressButton, formik }) => (
	<Container>
		<h1>Esqueci minha senha</h1>
		<p>
			Preencha o campo abaixo com o seu email cadastrado aqui na Social Pipe
			para recuperar a sua senha.
		</p>
		<FormContainer>
			<fieldset>
				<label htmlFor="name">Nome</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="phone">Celular</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={formik.values.phone}
					onChange={formik.handleChange}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="password">Senha</label>
				<input
					type="password"
					id="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
			</fieldset>
			<ContainerButtons className="container_buttons">
				<Button type="button" onClick={onPressButton} className="button">
					Continuar cadastro
				</Button>
				<div className="container_forget" />
			</ContainerButtons>
		</FormContainer>
	</Container>
);

export default InfosForm;
