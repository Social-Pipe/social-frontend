import { format } from 'date-fns';
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

const RatingPost = ({ closeModal, values = { comments: [] }, user }) => {
	const [comment, setComment] = useState('');
	const [comments, SetComments] = useState([]);
	const { handleShowPopUp } = useContext(Context);

	async function fetchComment() {
		try {
			const commentResponse = await api.post('comments/', {
				post: values.id,
				writer: user ? 'USER' : 'CLIENT ',
				message: comment,
			});
			const newComment = {
				...commentResponse.data,
				dataFormat: format(new Date(), "eeeeee, 'de' MMMM 'às' HH:mm", {
					locale: ptBr,
				}),
			};
			const newComments = [...comments, newComment];
			SetComments(newComments);
			setComment('');
		} catch {
			handleShowPopUp('error', 'Erro,tente novamente');
		}
	}

	useEffect(() => {
		if (values?.comments) {
			SetComments(values.comments);
		}
	}, []);

	return (
		<Container>
			<div className="rating">
				<button type="button" className="close_button" onClick={closeModal}>
					<IoMdClose size={24} color="#fff" />
				</button>
				<div className="image">
					{values.type === 'VIDEO' &&
						(!values.logoFormat ? (
							<video autoPlay>
								<source
									src={values.logo && values.logo[0] && values.logo[0].file}
								/>
							</video>
						) : (
							<video autoPlay>
								<source src={values.logoFormat && values.logoFormat[0]} />
							</video>
						))}
					{values.type === 'SINGLE' &&
						(!values.logoFormat ? (
							<img
								src={values.logo && values.logo[0] && values.logo[0].file}
								alt="produto"
							/>
						) : (
							<img
								src={values.logoFormat && values.logoFormat[0]}
								alt="produto"
							/>
						))}
					{values.type === 'GALLERY' && (
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
							{values.logo && !values.logoFormat
								? values.logo.map(img => (
										<img key={img.id} src={img && img.file} alt="produto" />
								  ))
								: values.logoFormat.map(img => (
										<img key={img.id} src={img && img} alt="produto" />
								  ))}
						</Carrousel>
					)}
					<img
						src={values?.files && values.files[0] && values.files[0].file}
						alt="produto"
					/>
				</div>
				<div>
					<h3>O que achou do post?</h3>
					<form>
						<div className="buttons">
							<button className="good active" type="button">
								<ImCheckmark color="#fff" size={24} />
							</button>
							<button className="edit" type="button">
								<TiPencil color="#fff" size={24} />
							</button>
							<button className="cancel" type="button">
								<BsX color="#fff" size={24} />
							</button>
						</div>
					</form>
					<div className="content_container">
						{comments.map(oldComment => (
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
			<p className="content_text">{values?.caption}</p>
		</Container>
	);
};

export default RatingPost;
