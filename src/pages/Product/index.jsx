import { useEffect, useState, useContext } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

import Container, { Header } from './styles';

import Button from '../../components/Button';
import DeleteItem from '../../components/DeleteItem';
import EditPost from '../../components/EditPost';
import NewPost from '../../components/NewPost';
import RatingPost from '../../components/RatingPost';
import Row from '../../components/Row';
import api from '../../config/api';
import Modal from '../../Container/Modal';
import { Context } from '../../services/context';

const Product = () => {
	const [showModalDeleteItem, setShowModalDeleteItem] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [showModalRating, setShowModalRating] = useState(false);
	const [showModalNewPost, setShowModalNewPost] = useState(false);
	const [client, setClient] = useState();
	const params = useParams();
	const { handleShowPopUp, handleShowModal } = useContext(Context);

	useEffect(() => {
		async function fetchData() {
			const response = await api.get(`clients/${params.id}/`);
			setClient(response?.data || {});
		}

		if (params?.id) {
			fetchData();
		}
	}, [params]);

	return (
		<Container>
			<Modal
				showModal={showModalDeleteItem}
				handleOutClick={() => setShowModalDeleteItem(false)}
			>
				<DeleteItem
					handleDeleteItem={() => setShowModalDeleteItem(false)}
					handleNotDeleteItem={() => setShowModalDeleteItem(false)}
				/>
			</Modal>
			<Modal
				background={false}
				showModal={showModalRating}
				handleOutClick={() => setShowModalRating(false)}
			>
				<RatingPost />
			</Modal>
			<Modal
				showModal={showModalEdit}
				handleOutClick={() => setShowModalEdit(false)}
			>
				<EditPost
					saveClient={() => setShowModalEdit(false)}
					editClient
					handleClose={() => setShowModalEdit(false)}
				/>
			</Modal>
			<Modal
				showModal={showModalNewPost}
				handleOutClick={() => setShowModalNewPost(false)}
			>
				<NewPost
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
					<Link className="secondary" to="/dashboard/products/id/archive">
						Mostrar arquivados
					</Link>
				</div>
				<div className="products">
					<Row
						hdResponsive
						deleteItem={() => setShowModalDeleteItem(true)}
						editItem={() => setShowModalEdit(true)}
						ratingItem={() => setShowModalRating(true)}
					/>
					<Row
						hdResponsive
						deleteItem={() => setShowModalDeleteItem(true)}
						ratingItem
					/>
					<Row hdResponsive deleteItem={() => setShowModalDeleteItem(true)} />
					<Row hdResponsive deleteItem={() => setShowModalDeleteItem(true)} />
					<Row hdResponsive deleteItem={() => setShowModalDeleteItem(true)} />
				</div>
			</div>
			<span>Aprovando postagens desde 2021</span>
		</Container>
	);
};

export default Product;
