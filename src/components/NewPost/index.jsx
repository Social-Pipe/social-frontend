import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';

import 'react-calendar/dist/Calendar.css';
import Image from './component/Image';
import Container, { ContainerCalendar } from './styles';

import api from '../../config/api';
import { Context } from '../../services/context';
import newPostSchema from '../../validations/newPostSchema';
import Button from '../Button';

const initialValues = {
	facebook: false,
	instagram: false,
	linkedin: false,
	date: '',
	showForClient: true,
	description: '',
	logo: null,
	dateFormat: '',
};

const NewPost = ({ saveClient, clientInfo }) => {
	const [value, onChange] = useState(new Date());
	const [showDate, setShowDate] = useState(false);
	const { handleShowPopUp } = useContext(Context);
	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues,
		async onSubmit(values, { resetForm }) {
			setLoading(true);
			try {
				const response = await api.post(
					`clients/${clientInfo.accessHash}/posts/`,
					{
						publish: true,
						instagram: values.instagram,
						facebook: values.facebook,
						linkedin: values.linkedin,
						postingDate: values.date,
					}
				);

				const formData = new FormData();
				formData.append('logo', values.logo);
				const logo = await api.post(`postfiles/${response.data.id}`, formData);
				console.log(logo);
				handleShowPopUp('sucess', 'Post Criado');

				setLoading(false);
				resetForm(initialValues);
				saveClient();
			} catch (e) {
				setLoading(false);
				handleShowPopUp('error', 'Erro, tente novamente');
				console.log(e);
			}
		},
		validationSchema: newPostSchema,
	});

	return (
		<Container>
			<ContainerCalendar show={showDate}>
				<span type="button" onClick={() => setShowDate(false)} />
				<div>
					<Calendar
						onChange={valueDate => {
							const dateFormat = format(valueDate, "d 'de' MMMM 'de' yyyy", {
								locale: ptBr,
							});

							formik.setFieldValue('dateFormat', dateFormat);
							formik.setFieldValue('date', valueDate);
						}}
						value={formik.values.date || value}
					/>
				</div>
			</ContainerCalendar>
			<button type="button" className="close_button" onClick={saveClient}>
				<IoMdClose size={24} color="#fff" />
			</button>
			<div className="header_container">
				<h2>Novo post</h2>
			</div>
			<form onSubmit={formik.handleSubmit}>
				<div className="photo_container">
					<div className="social_redes">
						<p>Redes Sociais</p>
						<div>
							<button
								type="button"
								className={`facebook ${formik.values.facebook ? 'active' : ''}`}
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
								className={`linkedin ${formik.values.linkedin ? 'active' : ''}`}
								onClick={() => {
									formik.setFieldValue('linkedin', !formik.values.linkedin);
								}}
							>
								<FaLinkedinIn size={24} color="#fff" />
							</button>
						</div>
					</div>

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
						Salvar novo Post
					</Button>
				</div>
				<div className="inputs_container">
					<div className="creating">
						<p>Criativo</p>
						<div>
							<Image
								className="imageContainer"
								value={formik.values.logo}
								handleChange={file => formik.setFieldValue('logo', file)}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="38.422"
								height="29.266"
								viewBox="0 0 38.422 29.266"
							>
								<g id="youtube" opacity="0.96">
									<path
										id="Caminho_13"
										data-name="Caminho 13"
										d="M5.628,29.266H32.793a5.635,5.635,0,0,0,5.628-5.628V5.628A5.635,5.635,0,0,0,32.793,0H5.628A5.635,5.635,0,0,0,0,5.628v18.01A5.635,5.635,0,0,0,5.628,29.266ZM2.251,5.628A3.381,3.381,0,0,1,5.628,2.251H32.793A3.381,3.381,0,0,1,36.17,5.628v18.01a3.381,3.381,0,0,1-3.377,3.377H5.628a3.381,3.381,0,0,1-3.377-3.377Zm0,0"
										fill="#3c3f4f"
									/>
									<path
										id="Caminho_14"
										data-name="Caminho 14"
										d="M181,94.508v15.3l13.545-7.776Zm2.251,3.826,6.716,3.731-6.716,3.856Zm0,0"
										transform="translate(-167.417 -87.416)"
										fill="#3c3f4f"
									/>
								</g>
							</svg>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="10.422"
									height="29.288"
									viewBox="0 0 10.422 29.288"
								>
									<path
										id="Subtração_2"
										data-name="Subtração 2"
										d="M-2026.578-2481.212h-8.854a1.569,1.569,0,0,1-1.568-1.568v-26.152a1.57,1.57,0,0,1,1.568-1.568h8.854v1.568h-8.854v26.152h8.854v1.566Zm0-3.334h-5.912a.785.785,0,0,1-.784-.784.785.785,0,0,1,.784-.784h5.912v1.567Zm0-3.334h-5.912a.785.785,0,0,1-.784-.784v-17.325a.785.785,0,0,1,.784-.784h5.912v1.568h-5.128v12.285l5.128-5.128v2.217l-5.128,5.128v1.255h5.128v1.567Z"
										transform="translate(2037 2510.5)"
										fill="#3c3f4f"
										opacity="0.96"
									/>
								</svg>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="35.51"
									height="29.288"
									viewBox="0 0 35.51 29.288"
								>
									<g id="image" opacity="0.96">
										<g
											id="Grupo_30"
											data-name="Grupo 30"
											transform="translate(0 0)"
										>
											<g id="Grupo_29" data-name="Grupo 29">
												<path
													id="Caminho_15"
													data-name="Caminho 15"
													d="M33.942,44.856H1.568A1.569,1.569,0,0,0,0,46.424V72.576a1.569,1.569,0,0,0,1.568,1.568H33.942a1.569,1.569,0,0,0,1.568-1.568V46.424A1.569,1.569,0,0,0,33.942,44.856Zm0,27.72H1.568V46.424H33.942Z"
													transform="translate(0 -44.856)"
													fill="#3c3f4f"
												/>
											</g>
										</g>
										<g
											id="Grupo_32"
											data-name="Grupo 32"
											transform="translate(3.726 3.726)"
										>
											<g id="Grupo_31" data-name="Grupo 31">
												<path
													id="Caminho_16"
													data-name="Caminho 16"
													d="M81,98.58H54.506a.784.784,0,0,0-.784.784v17.325a.784.784,0,0,0,.784.784H81a.784.784,0,0,0,.784-.784V99.364A.784.784,0,0,0,81,98.58ZM55.29,100.148H80.212v13.27l-4.94-4.94a.784.784,0,0,0-1.109,0l-3.011,3.011-6.905-6.905a.784.784,0,0,0-1.109,0l-7.849,7.848V100.148Zm0,15.757V114.65l8.4-8.4L73.35,115.9Zm24.923,0H75.568L72.261,112.6l2.457-2.457,5.314,5.313a.783.783,0,0,0,.18.134v.316Z"
													transform="translate(-53.722 -98.58)"
													fill="#3c3f4f"
												/>
											</g>
										</g>
										<g
											id="Grupo_34"
											data-name="Grupo 34"
											transform="translate(18.145 6.781)"
										>
											<g id="Grupo_33" data-name="Grupo 33">
												<path
													id="Caminho_17"
													data-name="Caminho 17"
													d="M264.579,142.629a2.964,2.964,0,1,0,2.964,2.964A2.967,2.967,0,0,0,264.579,142.629Zm0,4.359a1.4,1.4,0,1,1,1.4-1.4A1.4,1.4,0,0,1,264.579,146.988Z"
													transform="translate(-261.616 -142.629)"
													fill="#3c3f4f"
												/>
											</g>
										</g>
										<g
											id="Grupo_36"
											data-name="Grupo 36"
											transform="translate(3.726 24.386)"
										>
											<g id="Grupo_35" data-name="Grupo 35">
												<path
													id="Caminho_18"
													data-name="Caminho 18"
													d="M61.324,396.458H54.506a.784.784,0,1,0,0,1.568h6.818a.784.784,0,1,0,0-1.568Z"
													transform="translate(-53.722 -396.458)"
													fill="#3c3f4f"
												/>
											</g>
										</g>
										<g
											id="Grupo_38"
											data-name="Grupo 38"
											transform="translate(14.121 24.386)"
										>
											<g id="Grupo_37" data-name="Grupo 37">
												<path
													id="Caminho_19"
													data-name="Caminho 19"
													d="M206.174,396.458h-1.788a.784.784,0,1,0,0,1.568h1.788a.784.784,0,1,0,0-1.568Z"
													transform="translate(-203.602 -396.458)"
													fill="#3c3f4f"
												/>
											</g>
										</g>
									</g>
								</svg>
							</div>
						</div>
					</div>
					<div className="date">
						<p>Data de Postagem</p>
						<button
							type="button"
							onClick={() => {
								setShowDate(true);
							}}
						>
							<svg
								id="calendar"
								xmlns="http://www.w3.org/2000/svg"
								width="22.048"
								height="22.048"
								viewBox="0 0 22.048 22.048"
							>
								<g id="Grupo_56" data-name="Grupo 56">
									<g id="Grupo_55" data-name="Grupo 55">
										<path
											id="Caminho_20"
											data-name="Caminho 20"
											d="M19.465,1.723H18.431V0H16.709V1.723H5.34V0H3.617V1.723H2.584A2.587,2.587,0,0,0,0,4.306V19.465a2.587,2.587,0,0,0,2.584,2.584H19.465a2.587,2.587,0,0,0,2.584-2.584V4.306A2.587,2.587,0,0,0,19.465,1.723Zm.861,17.742a.862.862,0,0,1-.861.861H2.584a.862.862,0,0,1-.861-.861V8.1h18.6Zm0-13.091H1.723V4.306a.862.862,0,0,1,.861-.861H3.617V5.168H5.34V3.445H16.709V5.168h1.723V3.445h1.034a.862.862,0,0,1,.861.861Z"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_58"
									data-name="Grupo 58"
									transform="translate(3.289 9.866)"
								>
									<g
										id="Grupo_57"
										data-name="Grupo 57"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_61"
											data-name="Retângulo 61"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_60"
									data-name="Grupo 60"
									transform="translate(6.7 9.866)"
								>
									<g
										id="Grupo_59"
										data-name="Grupo 59"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_62"
											data-name="Retângulo 62"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_62"
									data-name="Grupo 62"
									transform="translate(10.111 9.866)"
								>
									<g
										id="Grupo_61"
										data-name="Grupo 61"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_63"
											data-name="Retângulo 63"
											width="1.827"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_64"
									data-name="Grupo 64"
									transform="translate(13.644 9.866)"
								>
									<g
										id="Grupo_63"
										data-name="Grupo 63"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_64"
											data-name="Retângulo 64"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_66"
									data-name="Grupo 66"
									transform="translate(17.055 9.866)"
								>
									<g
										id="Grupo_65"
										data-name="Grupo 65"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_65"
											data-name="Retângulo 65"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_68"
									data-name="Grupo 68"
									transform="translate(3.289 13.399)"
								>
									<g
										id="Grupo_67"
										data-name="Grupo 67"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_66"
											data-name="Retângulo 66"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_70"
									data-name="Grupo 70"
									transform="translate(6.7 13.399)"
								>
									<g
										id="Grupo_69"
										data-name="Grupo 69"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_67"
											data-name="Retângulo 67"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_72"
									data-name="Grupo 72"
									transform="translate(10.111 13.399)"
								>
									<g
										id="Grupo_71"
										data-name="Grupo 71"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_68"
											data-name="Retângulo 68"
											width="1.827"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_74"
									data-name="Grupo 74"
									transform="translate(13.644 13.399)"
								>
									<g
										id="Grupo_73"
										data-name="Grupo 73"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_69"
											data-name="Retângulo 69"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_76"
									data-name="Grupo 76"
									transform="translate(3.289 16.81)"
								>
									<g
										id="Grupo_75"
										data-name="Grupo 75"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_70"
											data-name="Retângulo 70"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_78"
									data-name="Grupo 78"
									transform="translate(6.7 16.81)"
								>
									<g
										id="Grupo_77"
										data-name="Grupo 77"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_71"
											data-name="Retângulo 71"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_80"
									data-name="Grupo 80"
									transform="translate(10.111 16.81)"
								>
									<g
										id="Grupo_79"
										data-name="Grupo 79"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_72"
											data-name="Retângulo 72"
											width="1.827"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_82"
									data-name="Grupo 82"
									transform="translate(13.644 16.81)"
								>
									<g
										id="Grupo_81"
										data-name="Grupo 81"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_73"
											data-name="Retângulo 73"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
								<g
									id="Grupo_84"
									data-name="Grupo 84"
									transform="translate(17.055 13.399)"
								>
									<g
										id="Grupo_83"
										data-name="Grupo 83"
										transform="translate(0 0)"
									>
										<rect
											id="Retângulo_74"
											data-name="Retângulo 74"
											width="1.706"
											height="1.706"
											fill="#3c3f4f"
										/>
									</g>
								</g>
							</svg>

							<p>{formik.values.dateFormat}</p>
						</button>
					</div>
					<div className="select">
						<p>Mostrar para o cliente?</p>
						<div>
							<div className="mask">
								<p>{formik.values.showForClient ? 'Sim' : 'Não'}</p>
								<MdKeyboardArrowDown size={32} color="#717171" />
							</div>
							<select
								onChange={e => {
									if (e.target.value === 'true') {
										formik.setFieldValue('showForClient', true);
										return;
									}
									formik.setFieldValue('showForClient', false);
								}}
							>
								<option value="true">sim</option>
								<option value="false">nao</option>
							</select>
						</div>
					</div>
				</div>
				<div className="text">
					<label>Legenda</label>
					<textarea name="description" onChange={formik.handleChange} />
				</div>
			</form>
		</Container>
	);
};

export default NewPost;
