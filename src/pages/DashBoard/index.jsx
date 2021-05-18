import Container from './styles';

import Card from '../../components/Card';

const DashBoard = () => (
	<Container>
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
	</Container>
);

export default DashBoard;
