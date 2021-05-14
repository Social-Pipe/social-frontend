import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ContainerDashBoard from './styles';

import Header from '../../components/Header';
import DashBoard from '../../pages/DashBoard';

const DashBoardRoutes = () => {
	const route = useRouteMatch();
	return (
		<ContainerDashBoard>
			<Header />
			<Switch>
				<Route exact path={`${route.path}`} component={DashBoard} />
			</Switch>
		</ContainerDashBoard>
	);
};

export default DashBoardRoutes;
