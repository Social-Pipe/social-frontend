import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Container from './styles';

import Button from '../../../components/Button';
import PhotoContainer from '../../../components/PhotoContainer';
import { ContainerButtons, FormContainer } from '../styles';

const InfoClient = ({ onPressButton, formik }) => (
	<Container>
		<h1>Insira as informações do seu primeiro cliente</h1>
		<div className="photo_container">
			<p>Logo da empresa</p>
			<PhotoContainer />
		</div>
		<FormContainer>
			<fieldset>
				<label htmlFor="companyName">Nome da empresa</label>
				<input
					type="text"
					id="companyName"
					autoComplete="organization"
					name="companyName"
					onBlur={formik.handleBlur}
					value={formik.values.companyName}
					onChange={formik.handleChange}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="passwordAccess">Senha de acesso do cliente</label>
				<input
					type="password"
					id="passwordAccess"
					name="passwordAccess"
					autoComplete="new-password"
					onBlur={formik.handleBlur}
					value={formik.values.passwordAccess}
					onChange={formik.handleChange}
				/>
			</fieldset>
			<div className="social_redes">
				<p>Redes Sociais</p>
				<div>
					<button
						type="button"
						className={`facebook ${formik.values.facebook ? 'active' : ''}`}
						onClick={() =>
							formik.setFieldValue('facebook', !formik.values.facebook)
						}
					>
						<FaFacebookF size={24} color="#fff" />
					</button>
					<button
						type="button"
						className={`instagram ${formik.values.instagram ? 'active' : ''}`}
						onClick={() =>
							formik.setFieldValue('instagram', !formik.values.instagram)
						}
					>
						<FaInstagram size={24} color="#fff" />
					</button>
					<button
						type="button"
						className={`linkedin ${formik.values.linkedin ? 'active' : ''}`}
						onClick={() =>
							formik.setFieldValue('linkedin', !formik.values.linkedin)
						}
					>
						<FaLinkedinIn size={24} color="#fff" />
					</button>
				</div>
			</div>
			<ContainerButtons className="container_buttons">
				<Button type="button" onClick={onPressButton} className="button">
					Avançar para última etapa
				</Button>
				<div className="container_forget" />
			</ContainerButtons>
		</FormContainer>
	</Container>
);

export default InfoClient;
