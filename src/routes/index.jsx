import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ForgetPassword from '../pages/ForgetPassword';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/forgetPassword" component={ForgetPassword} />
			<Route exact path="/register" component={Register} />
		</Switch>
	</Router>
);

export default Routes;
