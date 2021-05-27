import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ContainerDashBoard, { ContainerProduct } from './styles';

import Aside from '../../components/Aside';
import Header from '../../components/Header';
import SucessPopUp from '../../components/SucessPopUp';
import ChangeConfigPayment from '../../pages/ChangeConfigPayment';
import ConfigUser from '../../pages/ConfigUser';
import DashBoard from '../../pages/DashBoard';
import DesactiveAccount from '../../pages/DesactiveAccount';
import Product from '../../pages/Product';
import ProductDetail from '../../pages/ProductDetail';

const DashBoardRoutes = () => {
	const route = useRouteMatch();
	return (
		<ContainerDashBoard>
			<SucessPopUp />
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
