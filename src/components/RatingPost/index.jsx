import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import Carrousel from 'nuka-carousel';
import { useEffect, useState, useContext } from 'react';
import { BsX } from 'react-icons/bs';
import { ImCheckmark } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';
import { TiPencil } from 'react-icons/ti';

import Container from './styles';

import api from '../../config/api';
import { Context } from '../../services/context';
import Comment from '../Comment';

const RatingPost = ({
	closeModal,
	values = { comments: [] },
	user,
	clientToken,
	updatePosts,
}) => {
	const [comment, setComment] = useState('');
	const { handleShowPopUp } = useContext(Context);
	const [post, setPost] = useState({});

	async function fetchComment() {
		try {
			const commentResponse = await api.post(
				'comments/',
				{
					post: values.id,
					writer: user ? 'USER' : 'CLIENT',
					message: comment,
				},
				{
					headers: {
						'X-Client': `Bearer ${clientToken}`,
					},
				}
			);
			const newComment = {
				...commentResponse.data,
				dataFormat: format(new Date(), "eeeeee, 'de' MMMM 'às' HH:mm", {
					locale: ptBr,
				}),
			};

			setPost(postProps => ({
				...postProps,
				comments: [...postProps.comments, newComment],
			}));
			setComment('');
		} catch {
			handleShowPopUp('error', 'Erro,tente novamente');
		}
	}

	useEffect(() => {
		if (values?.comments) {
			setPost(values);
		}
	}, [values]);

	async function changeStatus(status) {
		if (post.status === status || !clientToken) {
			return;
		}
		try {
			const { data } = await api.patch(
				`posts/${post.id}/`,
				{
					status,
				},
				{
					headers: {
						'X-Client': `Bearer ${clientToken}`,
					},
				}
			);
			const newComment = data.comments.map(commentMap => ({
				...commentMap,
				dataFormat: format(
					parseISO(commentMap.createdAt),
					"eeeeee, 'de' MMMM 'às' HH:mm",
					{
						locale: ptBr,
					}
				),
			}));
			const files = data.files.map(file => ({
				...file,
				file: `${process.env.REACT_APP_DJANGO_MEDIA_URL}/${file.file}`,
			}));
			const newPost = {
				...data,
				comments: newComment,
				files,
				dataFormat: format(
					parseISO(data.postingDate),
					"eeeeee, 'de' MMMM 'às' HH:mm",
					{
						locale: ptBr,
					}
				),
			};

			setPost(newPost);
			updatePosts(data.id, newPost);
		} catch (e) {
			handleShowPopUp('error', 'Erro,tente novamente');
		}
	}

	return (
		<Container>
			<div className="rating">
				<button type="button" className="close_button" onClick={closeModal}>
					<IoMdClose size={24} color="#fff" />
				</button>
				<div className="image">
					{post?.type === 'VIDEO' && (
						<video autoPlay>
							<source
								src={post?.files && post?.files[0] && post?.files[0].file}
							/>
						</video>
					)}
					{post?.type === 'SINGLE' && (
						<img
							src={post?.files && post?.files[0] && post?.files[0].file}
							alt="produto"
						/>
					)}
					{post?.type === 'GALLERY' && (
						<Carrousel
							autoplay
							slidesToShow={1}
							style={{
								width: '100%',
								height: '100%',
							}}
							height="100%"
							defaultControlsConfig={{
								nextButtonStyle: { display: 'none' },
								prevButtonStyle: { display: 'none' },
								pagingDotsStyle: { display: 'none' },
							}}
						>
							{post?.files &&
								post?.files.map(img => (
									<img key={img.id} src={img && img.file} alt="produto" />
								))}
						</Carrousel>
					)}
				</div>
				<div>
					<h3>O que achou do post?</h3>
					<form>
						<div className="buttons">
							<button
								onClick={() => {
									changeStatus('APPROVED');
								}}
								className={`good ${
									post?.status === 'APPROVED' ? 'active' : ''
								}`}
								type="button"
							>
								<ImCheckmark color="#fff" size={24} />
							</button>
							<button
								onClick={() => {
									changeStatus('ATTENTION');
								}}
								className={`edit ${
									post?.status === 'ATTENTION' ? 'active' : ''
								}`}
								type="button"
							>
								<TiPencil color="#fff" size={24} />
							</button>
							<button
								onClick={() => {
									changeStatus('CANCELED');
								}}
								className={`cancel ${
									post?.status === 'CANCELED' ? 'active' : ''
								}`}
								type="button"
							>
								<BsX color="#fff" size={24} />
							</button>
						</div>
					</form>
					<div className="content_container">
						{post.comments &&
							post.comments.map(oldComment => (
								<Comment key={oldComment.id} comment={oldComment} />
							))}
					</div>

					<div className="newPost">
						<label>Aperte enter para postar seu comentário</label>
						<input
							placeholder="Seu comentário sobre esse post"
							value={comment}
							onChange={e => setComment(e.target.value)}
							onKeyPress={key => {
								if (key.key === 'Enter' && comment) {
									fetchComment();
								}
							}}
						/>
					</div>
				</div>
			</div>
			<p className="content_text">{post?.caption}</p>
		</Container>
	);
};

export default RatingPost;
