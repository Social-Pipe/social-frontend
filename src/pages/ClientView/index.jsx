import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import Carrousel from 'nuka-carousel';
import { useState, useEffect, useCallback } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import Container, { Feed, Button } from './styles';

import Authenticate from '../../components/Authenticate';
import RatingPost from '../../components/RatingPost';
import Row from '../../components/Row';
import api from '../../config/api';
import Modal from '../../Container/Modal';

const ClientView = () => {
	const [showModal, setShowModal] = useState(true);
	const [page, setPage] = useState(0);
	const [showModalRating, setShowModalRating] = useState({
		show: false,
		value: {},
	});
	const [posts, setPosts] = useState([]);
	const [postsFilter, setPostsFilter] = useState([]);
	const [token, setToken] = useState('');
	const [instagram, setInstagram] = useState(false);
	const [linkedin, setLinkedin] = useState(false);
	const [facebook, setFacebook] = useState(false);
	const params = useParams();
	const [user, setUser] = useState({});

	const fetchPosts = useCallback(() => {
		async function fetchData() {
			try {
				const response = await api.get(`clients/${params.id}/posts/`, {
					headers: {
						'X-Client': `Bearer ${token}`,
					},
				});
				const userResponse = await api.get(`clients/${params.id}/`);
				const userWithLogo = {
					...userResponse.data,
					logo: `${process.env.REACT_APP_DJANGO_MEDIA_URL}/${userResponse.data.logo}`,
				};
				setUser(userWithLogo);
				const postsFormat = response.data.map(postMap => {
					let statusText = 'Aprovado pelo cliente';

					if (postMap.status === 'CANCELED') statusText = 'Reprovado';
					if (postMap.status === 'NONE' || postMap.status === 'ATTENTION')
						statusText = 'Atenção';

					const newComment = postMap.comments.map(commentMap => ({
						...commentMap,
						dataFormat: format(
							parseISO(commentMap.createdAt),
							"eeeeee, 'de' MMMM 'às' HH:mm",
							{
								locale: ptBr,
							}
						),
					}));

					const files = postMap.files.map(file => ({
						...file,
						file: `${process.env.REACT_APP_DJANGO_MEDIA_URL}/${file.file}`,
					}));
					return {
						...postMap,
						statusText,
						files,
						comments: newComment,
						dataFormat: format(
							parseISO(postMap.postingDate),
							"eeeeee, 'de' MMMM 'às' HH:mm",
							{
								locale: ptBr,
							}
						),
					};
				});
				const postsFilters = postsFormat.filter(
					postFilter => postFilter.publish
				);
				setPosts(postsFilters);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		if (instagram || linkedin || facebook) {
			const postFilters = posts.filter(post => {
				if (post.instagram && instagram) {
					return true;
				}
				if (post.linkedin && linkedin) {
					return true;
				}
				if (post.facebook && facebook) {
					return true;
				}
				return false;
			});
			setPostsFilter(postFilters);
			return;
		}
		setPostsFilter(posts);
	}, [posts, instagram, facebook, linkedin]);

	useEffect(() => {
		if (token) {
			fetchPosts();
		}
	}, [token, fetchPosts]);

	return (
		<Container>
			<Modal
				background={false}
				showModal={showModalRating.show}
				handleOutClick={() => setShowModalRating({ show: false, value: {} })}
			>
				<RatingPost
					user=""
					values={showModalRating.value}
					clientToken={token}
					closeModal={() => setShowModalRating({ show: false, value: {} })}
					updatePosts={(id, object) => {
						const newPosts = posts.map(value => {
							if (value.id === id) {
								return object;
							}
							return value;
						});
						setPosts(newPosts);
					}}
				/>
			</Modal>
			<Modal showModal={showModal} handleOutClick={() => {}}>
				<Authenticate
					handleButton={NewToken => {
						setToken(NewToken.accessToken);
						setShowModal(false);
					}}
					hash={params.id}
				/>
			</Modal>
			<div className="header">
				<div className="logo">
					<img src={user?.logo} alt="logo" />
					<h2>{user?.name}</h2>
				</div>
				<div className="social_redes">
					<p>Selecione a rede social ao lado</p>
					<div>
						<button
							type="button"
							onClick={() => {
								setFacebook(!facebook);
							}}
							className={`facebook ${facebook ? 'active' : ''}`}
						>
							<FaFacebookF size={24} color="#fff" />
						</button>
						<button
							type="button"
							onClick={() => {
								setInstagram(!instagram);
							}}
							className={`instagram ${instagram ? 'active' : ''}`}
						>
							<FaInstagram size={24} color="#fff" />
						</button>
						<button
							type="button"
							onClick={() => {
								setLinkedin(!linkedin);
							}}
							className={`linkedin ${linkedin ? 'active' : ''}`}
						>
							<FaLinkedinIn size={24} color="#fff" />
						</button>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="page_header">
					<ul>
						<li className={page === 0 ? 'selected' : ''}>
							<button type="button" onClick={() => setPage(0)}>
								Feed
							</button>
						</li>
						<li className={page === 1 ? 'selected' : ''}>
							<button type="button" onClick={() => setPage(1)}>
								Lista
							</button>
						</li>
					</ul>
				</div>
				{page === 0 ? (
					<Feed>
						{postsFilter.map(postMap => (
							<Button
								status={postMap.status}
								type="button"
								onClick={() => {
									setShowModalRating({
										show: true,
										value: postMap,
									});
								}}
							>
								{postMap.type === 'VIDEO' && (
									<video autoPlay>
										<source
											src={
												postMap && postMap?.files[0] && postMap?.files[0]?.file
											}
										/>
									</video>
								)}
								{postMap.type === 'SINGLE' && (
									<img
										src={
											postMap && postMap?.files[0] && postMap?.files[0]?.file
										}
										alt="produto"
									/>
								)}
								{postMap.type === 'GALLERY' && (
									<Carrousel
										autoplay
										style={{
											position: 'absolute',
											top: 0,
											left: 0,
											pointerEvents: 'none',
											width: '100%',
											height: '100%',
											zIndex: -1,
											marginRight: '2.25rem',
										}}
										defaultControlsConfig={{
											nextButtonStyle: { display: 'none' },
											prevButtonStyle: { display: 'none' },
											pagingDotsStyle: { display: 'none' },
										}}
									>
										{postMap?.files.map(img => (
											<img key={img.id} src={img && img.file} alt="produto" />
										))}
									</Carrousel>
								)}
								{postMap.status === 'CANCELED' && <span>Reprovado</span>}
								{postMap.status === 'ATTENTION' && <span>Alteração</span>}
								{postMap.status === 'APPROVED' && <span>Aprovado</span>}
								{postMap.status === 'NONE' && <span>Sem status</span>}
							</Button>
						))}
					</Feed>
				) : (
					<div className="products">
						{postsFilter.map(postMap => (
							<button
								key={postMap.id}
								type="button"
								onClick={() => {
									setShowModalRating({
										show: true,
										value: postMap,
									});
								}}
							>
								<Row
									buttons={false}
									image={postMap.files}
									date={postMap.dataFormat}
									type={postMap.type}
									status={postMap.status}
									statusText={postMap.statusText}
								/>
							</button>
						))}
					</div>
				)}
			</div>
			<span>Aprovando postagens desde 2021</span>
		</Container>
	);
};

export default ClientView;
