import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from './styles';

import Button from '../../../components/Button';
import forgetPasswordSchema from '../../../validations/forgetPasswordSchema';

const initialValues = {
	email: '',
};

const ForgetPassword = ({ onPressButtonAfter }) => {
	const formik = useFormik({
		initialValues,
		validationSchema: forgetPasswordSchema,
		onSubmit: () => {
			onPressButtonAfter();
		},
	});

	return (
		<Container>
			<h1>Esqueci minha senha</h1>
			<p>
				Preencha o campo abaixo com o seu email cadastrado aqui na Social Pipe
				para recuperar a sua senha.
			</p>
			<form onSubmit={formik.handleSubmit}>
				<fieldset>
					<label htmlFor="email">Email</label>
					<input
						placeholder="usuário@teste.com"
						type="text"
						id="email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
				</fieldset>
				<div className="container_buttons">
					<div className="container_forget">
						<Link to="/login">Voltar para a tela de login</Link>
					</div>
					<Button type="submit" className="button">
						Recuperar senha
					</Button>
				</div>
			</form>
		</Container>
	);
};

ForgetPassword.propTypes = {
	onPressButtonAfter: PropTypes.func.isRequired,
};

export default ForgetPassword;
