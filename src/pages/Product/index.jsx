import { useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs';

import Container from './styles';

import Button from '../../components/Button';
import DeleteItem from '../../components/DeleteItem';
import NewClient from '../../components/NewClient';
import Row from '../../components/Row';
import Modal from '../../Container/Modal';

const Product = () => {
	const [showModal, setShowModal] = useState(true);
	const [showModalEdit, setShowModalEdit] = useState(true);
	return (
		<Container>
			<Modal showModal={showModal} handleOutClick={() => setShowModal(false)}>
				<DeleteItem
					handleDeleteItem={() => setShowModal(false)}
					handleNotDeleteItem={() => setShowModal(false)}
				/>
			</Modal>
			<Modal
				showModal={showModalEdit}
				handleOutClick={() => setShowModalEdit(false)}
			>
				<NewClient saveClient={() => setShowModalEdit(false)} editClient />
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
					<Button>Novo post</Button>
					<button className="secondary" type="button">
						Mostrar arquivados
					</button>
				</div>
				<div className="products">
					<Row
						deleteItem={() => setShowModal(true)}
						editItem={() => setShowModalEdit(true)}
					/>
					<Row deleteItem={() => setShowModal(true)} />
					<Row deleteItem={() => setShowModal(true)} />
					<Row deleteItem={() => setShowModal(true)} />
					<Row deleteItem={() => setShowModal(true)} />
				</div>
			</div>
			<span>Aprovando postagens desde 2021</span>
		</Container>
	);
};

export default Product;
