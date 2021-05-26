import { useState } from 'react';

import Container from './styles';

import Card from '../../components/Card';
import NotPaymentAccept from '../../components/NotPaymentAccept';
import Modal from '../../Container/Modal';

const DashBoard = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<Container>
			<Modal showModal={showModal} handleOutClick={() => setShowModal(false)}>
				<NotPaymentAccept />
			</Modal>
			<div className="header">
				<p>Bem vindo(a), Usuário!</p>
				<h2>Dashboard</h2>
			</div>
			<div className="content">
				<Card />
				<Card text="Coca Cola" id={1} />
				<Card text="Coca Cola" />
				<Card text="Coca Cola" />
				<Card text="Coca Cola" />
				<Card text="Coca Cola" />
			</div>
			<span>Aprovando postagens desde 2021</span>
		</Container>
	);
};

export default DashBoard;
