import PropTypes from 'prop-types';

import Container from './styles';

import Button from '../../../components/Button';
import maskPhone from '../../../utils/maskPhone';
import { ContainerButtons, FormContainer } from '../styles';

const InfosForm = ({ onPressButton, formik }) => (
	<Container>
		<h1>Insira as informações para o seu cadastro</h1>
		<p>
			Preencha o campo abaixo com o seu email cadastrado aqui no Post Baker para
			recuperar a sua senha.
		</p>
		<FormContainer>
			<fieldset>
				<label htmlFor="name">Nome</label>
				<input
					type="text"
					id="name"
					name="name"
					autoComplete="name"
					onBlur={formik.handleBlur}
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
					onBlur={formik.handleBlur}
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
					autoComplete="tel-national"
					value={formik.values.phone}
					onBlur={formik.handleBlur}
					onChange={e =>
						maskPhone(e.target.value, newValue =>
							formik.setFieldValue('phone', newValue)
						)
					}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="password">Senha</label>
				<input
					type="password"
					id="password"
					placeholder="**********"
					name="password"
					autoComplete="new-password"
					onBlur={formik.handleBlur}
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
			</fieldset>
			<fieldset className="checkbox">
				<input
					type="radio"
					checked={formik.values.checkbox}
					onClick={() =>
						formik.setFieldValue('checkbox', !formik.values.checkbox)
					}
				/>
				<span />
				<label>
					Ao se cadastrar, declaro ter lido e aceito os{' '}
					<a href="https://postbaker.com.br/politica-privacidade">
						termos de uso
					</a>
				</label>
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

InfosForm.propTypes = {
	onPressButton: PropTypes.func.isRequired,
	formik: PropTypes.object.isRequired,
};

export default InfosForm;
