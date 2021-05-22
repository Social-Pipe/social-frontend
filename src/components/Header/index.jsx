import { useContext } from 'react';
import { HiMenu } from 'react-icons/hi';

import Container from './styles';

import logo from '../../assets/images/logo.png';
import { Context } from '../../services/context';

const Header = () => {
	const { toggleOpenMenu, menuOpen, smart } = useContext(Context);
	return (
		<Container>
			<div>
				{smart && (
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
