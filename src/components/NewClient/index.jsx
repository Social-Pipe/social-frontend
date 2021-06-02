import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import Container from './styles';

import api from '../../config/api';
import { Context } from '../../services/context';
import editOrNewClientSchema from '../../validations/editOrNewClientSchema';
import Button from '../Button';
import PhotoContainer from '../PhotoContainer';

const initialValues = {
	name: '',
	password: '',
	instagram: false,
	facebook: false,
	linkedin: false,
	logo: null,
	edit: false,
};

const NewClient = ({ saveClient, editClient, handleClose }) => {
	const [loading, setLoading] = useState(false);
	const { token, handleShowPopUp } = useContext(Context);
	const formik = useFormik({
		initialValues,
		onSubmit: async (values, { resetForm }) => {
			setLoading(true);
			const formData = new FormData();
			formData.append('name', values.name);
			formData.append('instagram', values.instagram);
			formData.append('facebook', values.facebook);
			formData.append('linkedin', values.linkedin);
			formData.append('logo', values.logo);
			try {
				await api.post('clients/', formData, {
					headers: {
						Authorization: `Bearer ${token.acessToken}`,
					},
				});
				handleShowPopUp('sucess', 'Client Cadastrado');
				resetForm();
				saveClient();
			} catch (e) {
				handleShowPopUp('error', 'Erro ao cadastrar  cliente');
			}
			setLoading(false);
		},
		validationSchema: editOrNewClientSchema,
	});

	useEffect(() => {
		formik.setFieldValue('edit', editClient);
	}, [editClient]);

	return (
		<Container>
			<button type="button" className="close_button" onClick={handleClose}>
				<IoMdClose size={24} color="#fff" />
			</button>
			<header className="header_container">
				{editClient ? <h3>Editar cliente</h3> : <h3>Novo cliente</h3>}
				{editClient && (
					<Button
						loading={loading}
						onClick={() => {
							if (loading) {
								return;
							}
							formik.handleSubmit();
						}}
						type="button"
					>
						Salvar alterações
					</Button>
				)}
			</header>
			<form>
				<div>
					<div className="photo_container">
						<p>Logo da empresa</p>
						<PhotoContainer
							value={formik.values.logo}
							handleChange={file => formik.setFieldValue('logo', file)}
						/>
					</div>
					<div className="inputs_container">
						<fieldset>
							<label htmlFor="name">Nome da empresa</label>
							<input
								type="text"
								id="name"
								name="name"
								onChange={formik.handleChange}
								value={formik.values.name}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="password">Senha de acesso do cliente</label>
							<input
								type="password"
								id="password"
								name="password"
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
						</fieldset>
						<div className="social_redes">
							<p>Redes Sociais</p>
							<div>
								<button
									type="button"
									className={`facebook ${
										formik.values.facebook ? 'active' : ''
									}`}
									onClick={() => {
										formik.setFieldValue('facebook', !formik.values.facebook);
									}}
								>
									<FaFacebookF size={24} color="#fff" />
								</button>
								<button
									type="button"
									className={`instagram ${
										formik.values.instagram ? 'active' : ''
									}`}
									onClick={() => {
										formik.setFieldValue('instagram', !formik.values.instagram);
									}}
								>
									<FaInstagram size={24} color="#fff" />
								</button>
								<button
									type="button"
									className={`linkedin ${
										formik.values.linkedin ? 'active' : ''
									}`}
									onClick={() => {
										formik.setFieldValue('linkedin', !formik.values.linkedin);
									}}
								>
									<FaLinkedinIn size={24} color="#fff" />
								</button>
							</div>
						</div>
					</div>
				</div>
				{!editClient && (
					<footer>
						<p>
							Será adicionado o valor de <strong>R$ 9,90</strong> na sua
							assinatura atual. Deseja prosseguir?
						</p>
						<Button
							loading={loading}
							type="button"
							onClick={() => {
								if (loading) {
									return;
								}
								formik.handleSubmit();
							}}
						>
							Salvar novo cliente
						</Button>
					</footer>
				)}
			</form>
		</Container>
	);
};

NewClient.propTypes = {
	saveClient: PropTypes.func.isRequired,
	editClient: PropTypes.bool,
	handleClose: PropTypes.func.isRequired,
};

NewClient.defaultProps = {
	editClient: false,
};

export default NewClient;
