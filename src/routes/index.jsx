import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import DashBoardRoutes from './DashBoardRoutes';
import LoginRoutes from './LoginRoutes';

import Header from '../components/Header';
import SucessPopUp from '../components/SucessPopUp';
import ProductDetail from '../pages/ProductDetail';

const Routes = () => (
	<Router>
		<SucessPopUp />
		<Switch>
			<Route path="/dashboard" component={DashBoardRoutes} />
			<Route path="/login" component={LoginRoutes} />
			<Route exact path="/:id">
				<Header />
				<ProductDetail />
			</Route>
			<Route exact="/">
				<Redirect to="/login" />
			</Route>
		</Switch>
	</Router>
);

export default Routes;
