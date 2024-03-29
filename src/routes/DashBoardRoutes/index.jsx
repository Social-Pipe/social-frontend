import jwtDecode from 'jwt-decode';
import { useContext, useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import ContainerDashBoard, { ContainerProduct } from './styles';

import Aside from '../../components/Aside';
import Header from '../../components/Header';
import NewClient from '../../components/NewClient';
import NotPaymentAccept from '../../components/NotPaymentAccept';
import api from '../../config/api';
import Modal from '../../Container/Modal';
import ChangeConfigPayment from '../../pages/ChangeConfigPayment';
import ClientConfig from '../../pages/ClientConfig';
import ConfigUser from '../../pages/ConfigUser';
import DashBoard from '../../pages/DashBoard';
import DesactiveAccount from '../../pages/DesactiveAccount';
import { Context } from '../../services/context';

const DashBoardRoutes = () => {
	const route = useRouteMatch();
	const {
		showModal,
		handleShowModal,
		addUser,
		fetchMoreClients,
		showModalPayment,
		handleShowModalPayment,
	} = useContext(Context);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		setLoading(true);
		async function fetchData() {
			const tokenStorage = JSON.parse(window.localStorage.getItem('token'));
			if (!tokenStorage?.acessToken) {
				setLoading(false);
				history.replace('/login');
				return;
			}

			const content = jwtDecode(tokenStorage?.acessToken);
			try {
				const user = await api.get(`users/${content.user_id}/`);
				addUser(user.data);
				setLoading(false);
				fetchMoreClients();
			} catch {
				window.localStorage.clear();
				history.replace('/login');
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return (
		<ContainerDashBoard>
			{!loading && (
				<>
					<Header />
					<Switch>
						<Route
							exact
							path={`${route.path}/configuracao`}
							component={ConfigUser}
						/>
						<Route
							exact
							path={`${route.path}/pagamentoConfiguracao`}
							component={ChangeConfigPayment}
						/>
						<Route
							exact
							path={`${route.path}/desativarConta`}
							component={DesactiveAccount}
						/>

						<Route path={`${route.path}`}>
							<ContainerProduct>
								<Modal
									showModal={showModalPayment}
									handleOutClick={() => handleShowModalPayment(true)}
								>
									<NotPaymentAccept
										handleButton={() => {
											history.replace('/dashboard/pagamentoConfiguracao');
											handleShowModalPayment(false);
										}}
									/>
								</Modal>
								<Modal
									showModal={showModal.show}
									handleOutClick={() =>
										handleShowModal(props => ({ ...props, show: false }))
									}
								>
									<NewClient
										editClient={{
											edit: showModal.edit,
											client: showModal?.client,
										}}
										erroClient={() => {
											handleShowModalPayment(true);
										}}
										saveClient={() => {
											fetchMoreClients();
											handleShowModal(props => ({ ...props, show: false }));
										}}
										handleClose={() =>
											handleShowModal(props => ({ ...props, show: false }))
										}
									/>
								</Modal>
								<Aside />
								<Switch>
									<Route exact path={`${route.path}`} component={DashBoard} />
									<Route
										exact
										path={`${route.path}/cliente/:id/post`}
										component={ClientConfig}
									/>
								</Switch>
							</ContainerProduct>
						</Route>
					</Switch>
				</>
			)}
		</ContainerDashBoard>
	);
};

export default DashBoardRoutes;
