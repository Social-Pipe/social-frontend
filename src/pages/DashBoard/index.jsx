import Container from './styles';

import Aside from '../../components/Aside';
import Card from '../../components/Card';

const DashBoard = () => (
	<Container>
		<Aside />
		<main>
			<Card />
			<Card text="Coca Cola" />
			<Card text="Coca Cola" />
			<Card text="Coca Cola" />
			<Card text="Coca Cola" />
			<Card text="Coca Cola" />
		</main>
	</Container>
);

export default DashBoard;
