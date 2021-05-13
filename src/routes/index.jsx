import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginRoutes from './LoginRoutes';

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" component={LoginRoutes} />
		</Switch>
	</Router>
);

export default Routes;
