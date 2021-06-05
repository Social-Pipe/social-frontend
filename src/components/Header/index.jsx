import { useContext, useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

import Container from './styles';

import logo from '../../assets/images/logo.png';
import { Context } from '../../services/context';

const Header = () => {
	const { toggleOpenMenu, smart } = useContext(Context);
	const [exitMenuRoute, setExistMenuRoute] = useState(true);
	const route = useLocation();

	useEffect(() => {
		const routesWithMenu = ['product', 'dashboard'];
		const array = route.pathname.split('/');
		let existRoute = false;
		let routes =
			array[array.length - 1] !== ''
				? array[array.length - 1]
				: array[array.length - 2];
		existRoute = routesWithMenu.includes(routes);
		if (!existRoute) {
			routes =
				array[array.length - 1] !== ''
					? array[array.length - 3]
					: array[array.length - 4];
		}
		setExistMenuRoute(routesWithMenu.includes(routes));
	}, [route.pathname]);
	return (
		<Container smart={smart && exitMenuRoute}>
			<div>
				{smart && exitMenuRoute && (
					<button type="button" onClick={toggleOpenMenu}>
						<HiMenu color="#fff" size={36} />
					</button>
				)}
				<img src={logo} alt="logo" />
			</div>
		</Container>
	);
};

export default Header;
