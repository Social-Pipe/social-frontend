import { useContext } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

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
	const { showModal, handleShowModal } = useContext(Context);
	return (
		<ContainerDashBoard>
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
					path={`${route.path}/:id/detail`}
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
							<Route exact path={`${route.path}/:id`} component={Product} />
						</Switch>
					</ContainerProduct>
				</Route>
			</Switch>
		</ContainerDashBoard>
	);
};

export default DashBoardRoutes;
