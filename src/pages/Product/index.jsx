import { useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs';

import Container from './styles';

import Button from '../../components/Button';
import DeleteItem from '../../components/DeleteItem';
import EditPost from '../../components/EditPost';
import NewPost from '../../components/NewPost';
import RatingPost from '../../components/RatingPost';
import Row from '../../components/Row';
import Modal from '../../Container/Modal';

const Product = () => {
	const [showModalDeleteItem, setShowModalDeleteItem] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [showModalRating, setShowModalRating] = useState(false);
	const [showModalNewPost, setShowModalNewPost] = useState(false);
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
			<div className="header">
				<div>
					<p>Dashboard</p>
					<h2>Coca Cola</h2>
				</div>
				<div className="share">
					<div>
						<p>Link de compartilhamento com o cliente</p>
						<div className="input_container">
							<input />
							<button type="button">copiar link</button>
						</div>
					</div>
					<button type="button">
						<BsFillGearFill size={24} color="#fff" />
					</button>
				</div>
			</div>
			<div className="content">
				<div className="container_buttons">
					<Button type="button" onClick={() => setShowModalNewPost(true)}>
						Novo post
					</Button>
					<button className="secondary" type="button">
						Mostrar arquivados
					</button>
				</div>
				<div className="products">
					<Row
						deleteItem={() => setShowModalDeleteItem(true)}
						editItem={() => setShowModalEdit(true)}
						ratingItem={() => setShowModalRating(true)}
					/>
					<Row deleteItem={() => setShowModalDeleteItem(true)} ratingItem />
					<Row deleteItem={() => setShowModalDeleteItem(true)} />
					<Row deleteItem={() => setShowModalDeleteItem(true)} />
					<Row deleteItem={() => setShowModalDeleteItem(true)} />
				</div>
			</div>
			<span>Aprovando postagens desde 2021</span>
		</Container>
	);
};

export default Product;
