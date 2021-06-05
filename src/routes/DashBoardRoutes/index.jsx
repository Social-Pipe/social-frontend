import jwtDecode from 'jwt-decode';
import { useContext, useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import ContainerDashBoard, { ContainerProduct } from './styles';

import Aside from '../../components/Aside';
import Header from '../../components/Header';
import NewClient from '../../components/NewClient';
import api from '../../config/api';
import Modal from '../../Container/Modal';
import ChangeConfigPayment from '../../pages/ChangeConfigPayment';
import ConfigUser from '../../pages/ConfigUser';
import DashBoard from '../../pages/DashBoard';
import DesactiveAccount from '../../pages/DesactiveAccount';
import Product from '../../pages/Product';
import ProductDetail from '../../pages/ProductDetail';
import { Context } from '../../services/context';

const DashBoardRoutes = () => {
	const route = useRouteMatch();
	const { showModal, handleShowModal, addUser } = useContext(Context);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		setLoading(true);
		async function fetchData() {
			const tokenStorage = JSON.parse(window.localStorage.getItem('token'));
			if (!tokenStorage?.acessToken) {
				setLoading(false);
				history.replace('/');
				return;
			}

			const content = jwtDecode(tokenStorage?.acessToken);
			const user = await api.get(`users/${content.user_id}/`);
			addUser(user.data);
			setLoading(false);
		}
		fetchData();
	}, []);

	return (
		<ContainerDashBoard>
			{!loading && (
				<>
					<Header />
					<Switch>
						<Route exact path={`${route.path}/config`} component={ConfigUser} />
						<Route
							exact
							path={`${route.path}/configPayment`}
							component={ChangeConfigPayment}
						/>
						<Route
							exact
							path={`${route.path}/desactiveAccount`}
							component={DesactiveAccount}
						/>
						<Route
							exact
							path={`${route.path}/products/:id/archive`}
							component={ProductDetail}
						/>

						<Route path={`${route.path}`}>
							<ContainerProduct>
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
										saveClient={() =>
											handleShowModal(props => ({ ...props, show: false }))
										}
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
										path={`${route.path}/product/:id/post`}
										component={Product}
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
