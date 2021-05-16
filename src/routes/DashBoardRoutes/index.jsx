import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ContainerDashBoard from './styles';

import Header from '../../components/Header';
import ConfigUser from '../../pages/ConfigUser';
import DashBoard from '../../pages/DashBoard';
import DesactiveAccount from '../../pages/DesactiveAccount';

const DashBoardRoutes = () => {
	const route = useRouteMatch();
	return (
		<ContainerDashBoard>
			<Header />
			<Switch>
				<Route exact path={`${route.path}`} component={DashBoard} />
				<Route exact path={`${route.path}/config`} component={ConfigUser} />
				<Route
					exact
					path={`${route.path}/desactiveAccount`}
					component={DesactiveAccount}
				/>
			</Switch>
		</ContainerDashBoard>
	);
};

export default DashBoardRoutes;
