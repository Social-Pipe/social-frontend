import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DashBoardRoutes from './DashBoardRoutes';
import LoginRoutes from './LoginRoutes';

import SucessPopUp from '../components/SucessPopUp';

const Routes = () => (
	<Router>
		<SucessPopUp />
		<Switch>
			<Route path="/dashboard" component={DashBoardRoutes} />
			<Route path="/" component={LoginRoutes} />
		</Switch>
	</Router>
);

export default Routes;
