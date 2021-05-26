import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Container from './styles';

import Button from '../../components/Button';
import loginSchema from '../../validations/loginSchema';

const initialValues = {
	email: '',
	password: '',
};

const Login = () => {
	const formik = useFormik({
		initialValues,
		validationSchema: loginSchema,
		onSubmit: values => {
			console.log(values);
		},
	});
	return (
		<Container>
			<div className="container_register">
				<Link to="/register">PÁGINA DE CADASTRO</Link>
			</div>
			<div className="content">
				<div className="container_form">
					<h1>Faça o login na sua conta</h1>
					<form onSubmit={formik.handleSubmit}>
						<fieldset>
							<label htmlFor="email">Email</label>
							<input
								placeholder="usuário@teste.coms"
								type="email"
								id="email"
								name="email"
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="password">Senha</label>
							<input
								placeholder="***********"
								type="password"
								id="password"
								name="password"
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
						</fieldset>
						<div className="container_buttons">
							<Button type="submit" className="button">
								Fazer login
							</Button>
							<div className="container_forget">
								<Link to="/forgetPassword">Esqueci minha senha</Link>
							</div>
						</div>
					</form>
				</div>
				<span>Aprovando postagens desde 2021</span>
			</div>
		</Container>
	);
};

export default Login;
