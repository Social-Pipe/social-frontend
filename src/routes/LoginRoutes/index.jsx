import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ContainerLogin from './styles';

import logo from '../../assets/images/logo.png';
import ForgetPassword from '../../pages/ForgetPassword';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

const LoginRoutes = () => {
	const route = useRouteMatch();
	return (
		<ContainerLogin>
			<div>
				<img src={logo} alt="logo" />
			</div>
			<Switch>
				<Route exact path={`${route.path}`} component={Login} />
				<Route
					exact
					path={`${route.path}forgetPassword`}
					component={ForgetPassword}
				/>
				<Route exact path={`${route.path}register`} component={Register} />
			</Switch>
		</ContainerLogin>
	);
};

export default LoginRoutes;
