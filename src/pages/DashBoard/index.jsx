import Container from './styles';

import Aside from '../../components/Aside';
import Card from '../../components/Card';

const DashBoard = () => (
	<Container>
		<Aside />
		<main>
			<div className="header">
				<p>Bem vindo(a), Usuário!</p>
				<h2>Dashboard</h2>
			</div>
			<div className="content">
				<Card />
				<Card text="Coca Cola" />
				<Card text="Coca Cola" />
				<Card text="Coca Cola" />
				<Card text="Coca Cola" />
				<Card text="Coca Cola" />
			</div>
			<span>Aprovando postagens desde 2021</span>
		</main>
	</Container>
);

export default DashBoard;
