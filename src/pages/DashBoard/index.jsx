import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Container from './styles';

import Card from '../../components/Card';
import NotPaymentAccept from '../../components/NotPaymentAccept';
import Modal from '../../Container/Modal';
import { Context } from '../../services/context';

const DashBoard = () => {
	const [showModal, setShowModal] = useState(false);
	const { handleShowModal, clients, user, setNewPage } = useContext(Context);
	const history = useHistory();

	return (
		<Container
			onScroll={e => {
				const height = e.currentTarget.scrollHeight;
				if (e.currentTarget.scrollTop + e.currentTarget.offsetHeight < height) {
					return;
				}
				setNewPage();
			}}
		>
			<Modal showModal={showModal} handleOutClick={() => setShowModal(false)}>
				<NotPaymentAccept />
			</Modal>
			<div className="header">
				<p>Bem vindo(a), {user?.name || 'Usuário!'}</p>
				<h2>Dashboard</h2>
			</div>
			<div className="content">
				<Card handleButton={() => handleShowModal(true)} />
				{clients.map(client => (
					<Card
						handleButton={id => {
							history.push(`/dashboard/product/${id}/post`);
						}}
						key={client.id}
						name={client.name}
						logo={client.logo}
						id={client.id}
					/>
				))}
			</div>
			<span>Aprovando postagens desde 2021</span>
		</Container>
	);
};

export default DashBoard;
