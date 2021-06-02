import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Container from './styles';

import Card from '../../components/Card';
import NotPaymentAccept from '../../components/NotPaymentAccept';
import api from '../../config/api';
import Modal from '../../Container/Modal';
import { Context } from '../../services/context';

const DashBoard = () => {
	const [showModal, setShowModal] = useState(false);
	const { token, handleShowModal, clients, handleClients } = useContext(
		Context
	);
	const history = useHistory();
	useEffect(() => {
		async function fetchClients() {
			try {
				console.log(token);
				const { data } = await api.get('clients/?page=1', {
					headers: {
						Authorization: `Bearer ${token.acessToken}`,
					},
				});
				const clientsResult = data.results.map(client => ({
					id: client.id,
					logo: client.logo,
					name: client.name,
				}));
				handleClients(clientsResult);
			} catch (e) {
				console.log(e);
			}
		}

		fetchClients();
	}, []);

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
				<Card handleButton={() => handleShowModal(true)} />
				{clients.map(client => (
					<Card
						handleButton={id => {
							history.push(`/dashboard/product/${id}/post`);
						}}
						key={client.key}
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
