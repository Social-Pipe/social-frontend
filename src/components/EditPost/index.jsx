import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useFormik } from 'formik';
import Carrousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import { useContext, useState, useEffect, useRef } from 'react';
import Calendar from 'react-datetime-picker';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {
	IoMdClose,
	IoIosArrowDroprightCircle,
	IoIosArrowDropleftCircle,
} from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Image from './component/Image';
import Container, {
	ContainerCalendar,
	Select,
	InputsContainer,
	Form,
	Content,
	ImageContainer,
} from './styles';

import api from '../../config/api';
import { Context } from '../../services/context';
import newPostSchema from '../../validations/newPostSchema';
import Button from '../Button';
import CarrouselEdit from '../Carrousel';

const initialValues = {
	facebook: false,
	instagram: false,
	linkedin: false,
	date: '',
	showForClient: true,
	description: '',
	logo: null,
	currentLogo: null,
	dateFormat: '',
	logoFormat: null,
	carrouselImages: [],
	video: null,
	type: 'SINGLE',
	typeFile: 'Imagem',
};

function deleteFile(id) {
	const logoResult = api.delete(`postfiles/${id}/`);
	return logoResult;
}

const EditPost = ({ saveClient, deletePost, editValues }) => {
	const [value] = useState(new Date());
	const [imagesDeleteId, setImagesDeleteId] = useState([]);
	const [newFiles, setNewFiles] = useState([]);
	const [sizeOfcarrousel, setSizeOfCarrousel] = useState({
		width: 0,
		height: 0,
		widthLess: 0,
	});
	const [showDate, setShowDate] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	const { handleShowPopUp } = useContext(Context);
	const [loading, setLoading] = useState(false);
	const ref = useRef(null);
	const formik = useFormik({
		initialValues,
		async onSubmit(values) {
			if (loading) {
				return;
			}
			setLoading(true);
			try {
				let type = 'SINGLE';
				if (values.typeFile === 'Carrousel') {
					type = 'GALLERY';
				}
				if (values.typeFile === 'Video') {
					type = 'VIDEO';
				}

				await api.patch(`posts/${editValues.id}/`, {
					publish: values.showForClient,
					instagram: values.instagram,
					facebook: values.facebook,
					linkedin: values.linkedin,
					postingDate: values.date,
					caption: values.description,
					type,
				});
				let deletePosts = [];
				if (values.typeFile === 'Carrousel' && imagesDeleteId.length > 0) {
					deletePosts = imagesDeleteId.map(deleteFile);
				}
				if (values.typeFile === 'Video' || values.typeFile === 'Imagem') {
					deletePosts = values.currentLogo.map(file => deleteFile(file.id));
				}
				if (deletePosts.length > 0) {
					await Promise.all(deletePosts);
					setImagesDeleteId([]);
				}
				console.log('newFiles');
				console.log(values.logo);
				if (values.typeFile === 'Carrousel') {
					const files = values.logo.map(logo => {
						const formData = new FormData();
						formData.append('file', logo);
						formData.append('post', editValues.id);
						return api.post('postfiles/', formData);
					});
					await Promise.all(files);
				} else if (!values.logo[0]?.file) {
					const formData = new FormData();
					formData.append('file', values.logo[0]);
					formData.append('post', editValues.id);
					await api.post('postfiles/', formData);
				}
				setLoading(false);
				handleShowPopUp('sucess', 'Post Criado');
				saveClient();
			} catch (e) {
				setLoading(false);
				handleShowPopUp('error', 'Erro, tente novamente');
			}
		},
		validationSchema: newPostSchema,
	});

	useEffect(() => {
		if (editValues.postingDate) {
			let typeFile = 'Imagem';
			let video = null;
			let logo = null;
			let carrouselImages = null;
			if (editValues.type === 'GALLERY') {
				typeFile = 'Carrousel';
				logo = editValues.files;
				carrouselImages = editValues.files.map(file => file.file);
			}
			if (editValues.type === 'SINGLE') {
				logo = editValues.files;
				carrouselImages = editValues.files.map(file => file.file);
			}
			if (editValues.type === 'VIDEO') {
				typeFile = 'Video';
				video = editValues.files;
			}
			formik.setValues({
				linkedin: editValues.linkedin,
				facebook: editValues.facebook,
				instagram: editValues.instagram,
				showForClient: editValues.publish,
				dateFormat: editValues.dateFormat,
				date: new Date(editValues.postingDate),
				description: editValues.caption,
				logo,
				currentLogo: editValues.files,
				type: editValues.type,
				typeFile,
				video,
				carrouselImages,
			});
		}
	}, [editValues]);
	useEffect(() => {
		if (!ref?.current) {
			return;
		}
		let widthLess = 0;
		widthLess = ref?.current?.clientWidth - ref?.current?.offsetHeight;
		if (window.innerHeight > window.innerWidth) {
			widthLess = ref?.current?.clientWidth - ref?.current?.offsetHeight * 0.5;
		}
		setSizeOfCarrousel({
			width: ref?.current?.clientWidth,
			height: ref?.current?.offsetHeight,
			widthLess,
		});
	}, [editValues, ref]);

	useEffect(() => {
		window.addEventListener('resize', () => {
			let widthLess = 0;
			widthLess = ref?.current?.clientWidth - ref?.current?.offsetHeight;
			if (window.innerHeight > window.innerWidth) {
				widthLess =
					ref?.current?.clientWidth - ref?.current?.offsetHeight * 0.5;
			}
			setSizeOfCarrousel({
				width: ref?.current?.clientWidth,
				height: ref?.current?.offsetHeight,
				widthLess,
			});
		});

		return window.removeEventListener('resize', () => {
			let widthLess = 0;
			widthLess = ref?.current?.clientWidth - ref?.current?.offsetHeight;
			if (window.innerHeight > window.innerWidth) {
				widthLess =
					ref?.current?.clientWidth - ref?.current?.offsetHeight * 0.5;
			}
			setSizeOfCarrousel({
				width: ref?.current?.clientWidth,
				height: ref?.current?.offsetHeight,
				widthLess,
			});
		});
	}, []);

	return (
		<Container ref={ref}>
			<ContainerCalendar show={showDate}>
				<span type="button" onClick={() => setShowDate(false)} />
				<div>
					<Calendar
						disableCalendar={false}
						onChange={valueDate => {
							if (!valueDate) {
								return;
							}
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
			<ImageContainer
				height={sizeOfcarrousel.height}
				width={sizeOfcarrousel.width}
			>
				{formik.values.type === 'VIDEO' &&
					(!formik.values.logoFormat ? (
						<video autoPlay>
							<source
								src={
									formik.values.currentLogo &&
									formik.values.currentLogo[0] &&
									formik.values.currentLogo[0].file
								}
							/>
						</video>
					) : (
						<video autoPlay>
							<source
								src={formik.values.logoFormat && formik.values.logoFormat[0]}
							/>
						</video>
					))}
				{formik.values.type === 'SINGLE' &&
					(!formik.values.logoFormat ? (
						<img
							src={
								formik.values.currentLogo &&
								formik.values.currentLogo[0] &&
								formik.values.currentLogo[0].file
							}
							alt="produto"
						/>
					) : (
						<img
							src={formik.values.logoFormat && formik.values.logoFormat[0]}
							alt="produto"
						/>
					))}
				{formik.values.type === 'GALLERY' && (
					<Carrousel
						autoplay
						slidesToShow={1}
						style={{
							width: '100%',
							height: '100%',
						}}
						height="100%"
						afterSlide={i => {
							setCurrentSlide(i);
						}}
						renderCenterLeftControls={props => (
							<button
								onClick={() => {
									props.previousSlide();
								}}
								className={`${currentSlide === 0 ? 'desactive' : ''}`}
								type="button"
							>
								<IoIosArrowDropleftCircle
									size={30}
									color={`${currentSlide === 0 ? '#EBEBEB' : '#717171'}`}
								/>
							</button>
						)}
						renderCenterRightControls={props => (
							<button
								type="button"
								onClick={() => {
									props.nextSlide();
								}}
							>
								<IoIosArrowDroprightCircle
									size={30}
									color={`${
										currentSlide === (formik?.values?.logo.length || 0) - 1
											? '#EBEBEB'
											: '#717171'
									}`}
								/>
							</button>
						)}
						defaultControlsConfig={{
							pagingDotsStyle: { display: 'none' },
						}}
					>
						{formik.values.currentLogo &&
							formik.values.currentLogo.map(img => (
								<img key={img.id} src={img && img.file} alt="produto" />
							))}
					</Carrousel>
				)}
			</ImageContainer>
			<Content>
				<div className="header_container">
					<h3>Editar Post</h3>
					<div>
						<button
							onClick={() => deletePost(editValues.id)}
							type="button"
							className="delete_post"
						>
							Apagar post
						</button>
						<div className="button">
							<Button
								loading={loading}
								type="button"
								onClick={formik.handleSubmit}
							>
								Salvar edição do post
							</Button>
						</div>
					</div>
				</div>
				<Form>
					<button type="submit" style={{ display: 'none' }}>
						submit
					</button>
					<InputsContainer>
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
						<Select>
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
						</Select>
					</InputsContainer>
					<InputsContainer>
						<Select>
							<p>Criativo</p>
							<div>
								<div className="mask">
									<p>{formik.values.typeFile}</p>
									<MdKeyboardArrowDown size={32} color="#717171" />
								</div>
								<select
									value={formik.values.typeFile}
									onChange={e => {
										formik.setFieldValue('typeFile', e.currentTarget.value);
									}}
								>
									<option value="Imagem">Imagem</option>
									<option value="Carrousel">Carrousel</option>
									<option value="Video">Video</option>
								</select>
							</div>
						</Select>
						{formik.values.typeFile === 'Carrousel' ? (
							<CarrouselEdit
								addItem={file => {
									formik.setFieldValue('logo', file);
								}}
								deleteItem={(file, index, fileUrl) => {
									const currentFile = formik.values.currentLogo.find(
										img => img?.file === fileUrl
									);
									if (currentFile) {
										setImagesDeleteId(props => [...props, currentFile.id]);
									}
								}}
								items={formik.values.carrouselImages}
							/>
						) : (
							<Image
								type={formik.values.typeFile}
								value={
									formik.values.typeFile === 'Imagem'
										? formik.values.logo
										: formik.values.video
								}
								handleChange={(file, type) => {
									if (type === 'Imagem') {
										formik.setFieldValue('logo', file);
										return;
									}
									formik.setFieldValue('video', file);
								}}
							/>
						)}
					</InputsContainer>
					<div className="text">
						<label>Legenda</label>
						<textarea
							name="description"
							onChange={formik.handleChange}
							value={formik.values.description}
						/>
					</div>
				</Form>
			</Content>
		</Container>
	);
};

EditPost.propTypes = {
	saveClient: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	editValues: PropTypes.object.isRequired,
};

export default EditPost;
