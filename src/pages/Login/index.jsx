import { useFormik } from 'formik';
import { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Container from './styles';

import Button from '../../components/Button';
import api from '../../config/api';
import { Context } from '../../services/context';
import loginSchema from '../../validations/loginSchema';

const initialValues = {
	email: '',
	password: '',
};

const Login = () => {
	const { login, handleShowPopUp, token } = useContext(Context);
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const formik = useFormik({
		initialValues,
		validationSchema: loginSchema,
		onSubmit: async values => {
			try {
				setLoading(true);
				const { data } = await api.post('token/', {
					email: values.email,
					password: values.password,
				});
				login(data.access, data.refresh);
			} catch (e) {
				handleShowPopUp('error', 'Erro no login');
			} finally {
				setLoading(false);
			}
		},
	});

	useEffect(() => {
		if (!token?.acessToken) {
			return;
		}
		window.localStorage.setItem('token', JSON.stringify(token));
		history.replace('/dashboard');
	}, [token]);

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
							<Button
								type="button"
								onClick={() => {
									if (loading) {
										return;
									}
									formik.handleSubmit();
								}}
								loading={loading}
								className="button"
							>
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
