import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useEffect, useState, useContext, useCallback } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

import Container, { Header } from './styles';

import Button from '../../components/Button';
import DeleteItem from '../../components/DeleteItem';
import EditPost from '../../components/EditPost';
import NewPost from '../../components/NewPost';
import Row from '../../components/Row';
import api from '../../config/api';
import Modal from '../../Container/Modal';
import { Context } from '../../services/context';

const Product = () => {
	const [showModalDeleteItem, setShowModalDeleteItem] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [showModalNewPost, setShowModalNewPost] = useState(false);
	const [client, setClient] = useState();
	const [posts, setPosts] = useState([]);
	const [editValues, setEditValues] = useState({});
	const [deleteItem, setDeleteItem] = useState({
		show: false,
		id: -1,
		name: '',
	});
	const params = useParams();
	const { handleShowPopUp, handleShowModal, clients, user } = useContext(
		Context
	);

	const fetchPosts = useCallback(() => {
		async function fetchData() {
			const newClient = clients.find(
				clientI => clientI.id === Number(params.id)
			);
			setClient(newClient);

			try {
				if (!newClient?.accessHash) {
					return;
				}
				const response = await api.get(
					`clients/${newClient.accessHash}/posts/`
				);
				const postsFormat = response.data.map(post => {
					let statusText = 'Aprovado pelo cliente';

					if (post.status === 'CANCELED') statusText = 'Reprovado';
					if (post.status === 'NONE') statusText = 'Sem status';
					if (post.status === 'ATTENTION') statusText = 'Atenção';

					const newComments = post.comments.map(comment => ({
						...comment,
						dataFormat: format(
							parseISO(comment.createdAt),
							"eeeeee, 'de' MMMM 'às' HH:mm",
							{
								locale: ptBr,
							}
						),
					}));

					const files = post.files.map(file => ({
						...file,
						file: `${process.env.REACT_APP_DJANGO_MEDIA_URL}/${file.file}`,
					}));

					return {
						...post,
						statusText,
						files,
						comments: newComments,
						dateFormat: format(
							parseISO(post.postingDate),
							"eeeeee, 'de' MMMM 'às' HH:mm",
							{
								locale: ptBr,
							}
						),
					};
				});
				setPosts(postsFormat);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, [clients, params]);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<Container>
			<Modal
				showModal={deleteItem.show}
				handleOutClick={() =>
					setDeleteItem(props => ({
						...props,
						show: false,
					}))
				}
			>
				<DeleteItem
					item={deleteItem}
					handleDeleteItem={id => {
						setDeleteItem(props => ({
							...props,
							show: false,
						}));
						const newPosts = posts.filter(value => value.id !== id);
						setPosts(newPosts);
					}}
					handleNotDeleteItem={() =>
						setDeleteItem(props => ({
							...props,
							show: false,
						}))
					}
				/>
			</Modal>
			<Modal
				showModal={showModalEdit}
				handleOutClick={() => setShowModalEdit(false)}
			>
				<EditPost
					editValues={editValues}
					saveClient={() => {
						fetchPosts();
						setShowModalEdit(false);
					}}
					editClient
					handleClose={() => setShowModalEdit(false)}
					clientInfo={client}
				/>
			</Modal>
			<Modal
				showModal={showModalNewPost}
				handleOutClick={() => setShowModalNewPost(false)}
			>
				<NewPost
					clientInfo={client}
					saveClient={() => setShowModalNewPost(false)}
					editClient
					handleClose={() => setShowModalNewPost(false)}
				/>
			</Modal>
			<Header>
				<div className="title">
					<p>Dashboard</p>
					<h2>{client?.name || 'Cliente'}</h2>
				</div>
				<div className="share">
					<p>Link de compartilhamento com o cliente</p>
					<div className="input_container">
						<p>{client?.accessHash || ''}</p>
						<button
							onClick={async () => {
								if (!client?.accessHash) {
									return;
								}
								await navigator.clipboard.writeText(client.accessHash);
								handleShowPopUp('sucess', 'Link copiado!');
							}}
							type="button"
						>
							copiar link
						</button>
					</div>
				</div>
				<button
					type="button"
					onClick={() => {
						handleShowModal({ show: true, edit: true, client });
					}}
				>
					<BsFillGearFill size={24} color="#fff" />
				</button>
			</Header>
			<div className="content">
				<div className="container_buttons">
					<Button type="button" onClick={() => setShowModalNewPost(true)}>
						Novo post
					</Button>
					<button type="button" className="secondary">
						Mostrar arquivados
					</button>
				</div>
				<div className="products">
					{posts.map(post => (
						<Row
							key={post.id}
							image={post.files}
							date={post.dateFormat}
							type={post.type}
							status={post.status}
							statusText={post.statusText}
							hdResponsive
							deleteItem={() => {
								setDeleteItem({ id: post.id, name: 'post', show: true });
							}}
							editItem={() => {
								setShowModalEdit(true);
								setEditValues({
									...post,
								});
							}}
							ratingItem={() => {
								setEditValues({
									...post,
								});
							}}
						/>
					))}
				</div>
			</div>
			<span>Aprovando postagens desde 2021</span>
		</Container>
	);
};

export default Product;
