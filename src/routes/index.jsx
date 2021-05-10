import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ForgetPassword from '../pages/ForgetPassword';
import Login from '../pages/Login';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/forgetPassword" component={ForgetPassword} />
		</Switch>
	</Router>
);

export default Routes;
