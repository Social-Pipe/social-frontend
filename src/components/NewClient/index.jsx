import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import Container from './styles';

import Button from '../Button';
import PhotoContainer from '../PhotoContainer';

const NewClient = ({ saveClient, editClient = false }) => (
	<Container>
		<button type="button" className="close_button" onClick={saveClient}>
			<IoMdClose size={24} color="#fff" />
		</button>
		<div className="header_container">
			{editClient ? <h3>Editar cliente</h3> : <h3>Novo cliente</h3>}
			{editClient && (
				<Button onClick={saveClient} type="button">
					Salvar alterações
				</Button>
			)}
		</div>
		<form>
			<div>
				<div className="photo_container">
					<p>Logo da empresa</p>
					<PhotoContainer />
				</div>
				<div className="inputs_container">
					<fieldset>
						<label htmlFor="password">Nome da empresa</label>
						<input
							type="password"
							id="password"
							name="password"
							// onChange={formik.handleChange}
							// value={formik.values.password}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="password">Senha de acesso do cliente</label>
						<input
							type="password"
							id="password"
							name="password"
							// onChange={formik.handleChange}
							// value={formik.values.password}
						/>
					</fieldset>
					<div className="social_redes">
						<p>Redes Sociais</p>
						<div>
							<button
								type="button"
								className={`facebook ${
									'formik.values.facebook' ? 'active' : ''
								}`}
								onClick={
									() => {}
									// formik.setFieldValue('facebook', !formik.values.facebook)
								}
							>
								<FaFacebookF size={24} color="#fff" />
							</button>
							<button
								type="button"
								className={`instagram ${
									'formik.values.instagram ' ? 'active' : ''
								}`}
								onClick={
									() => {}
									// formik.setFieldValue('instagram', !formik.values.instagram)
								}
							>
								<FaInstagram size={24} color="#fff" />
							</button>
							<button
								type="button"
								className={`linkedin ${
									'formik.values.linkedin ' ? 'active' : ''
								}`}
								onClick={
									() => {}
									// formik.setFieldValue('linkedin', !formik.values.linkedin)
								}
							>
								<FaLinkedinIn size={24} color="#fff" />
							</button>
						</div>
					</div>
				</div>
			</div>
			{!editClient && (
				<div className="footer">
					<p>
						Será adicionado o valor de <strong>R$ 9,90</strong> na sua
						assinatura atual. Deseja prosseguir?
					</p>
					<Button onClick={saveClient} type="button">
						Salvar novo cliente
					</Button>
				</div>
			)}
		</form>
	</Container>
);

export default NewClient;
