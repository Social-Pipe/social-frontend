import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContainerLogin from './styles';

import logo from '../assets/images/logo.png';
import ForgetPassword from '../pages/ForgetPassword';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/login">
				<ContainerLogin>
					<div>
						<img src={logo} alt="logo" />
					</div>
					<Switch>
						<Route exact path="/login" component={Login} />
						<Route
							exact
							path="/login/forgetPassword"
							component={ForgetPassword}
						/>
						<Route exact path="/login/register" component={Register} />
					</Switch>
				</ContainerLogin>
			</Route>
		</Switch>
	</Router>
);

export default Routes;
