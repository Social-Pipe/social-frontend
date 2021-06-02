import { useContext, useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import ContainerDashBoard, { ContainerProduct } from './styles';

import Aside from '../../components/Aside';
import Header from '../../components/Header';
import NewClient from '../../components/NewClient';
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
	const { showModal, handleShowModal, token, login } = useContext(Context);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		setLoading(true);
		const tokenStorage = JSON.parse(window.localStorage.getItem('token'));
		if (!tokenStorage) {
			setLoading(false);
			history.replace('/');
			return;
		}
		login(tokenStorage.acessToken, tokenStorage.refreshToken);
	}, []);

	useEffect(() => {
		if (!token?.acessToken) {
			return;
		}
		setLoading(false);
	}, [token]);
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
									showModal={showModal}
									handleOutClick={() => handleShowModal(false)}
								>
									<NewClient
										saveClient={() => handleShowModal(false)}
										handleClose={() => handleShowModal(false)}
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
