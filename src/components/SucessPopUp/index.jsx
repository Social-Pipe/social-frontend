import { useContext } from 'react';

import Container from './styles';

import { Context } from '../../services/context';

const SucessPopUp = () => {
	const { showPopUp } = useContext(Context);
	return (
		<Container show={showPopUp}>
			<p>Alterações salvas com sucesso!</p>
		</Container>
	);
};

export default SucessPopUp;
