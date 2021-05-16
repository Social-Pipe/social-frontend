import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Container from './styles';

import Button from '../../components/Button';

const ConfigUser = () => (
	<Container>
		<div className="container">
			<div className="header">
				<Link to="/dashboard">
					<RiArrowLeftSLine size={32} color="#EE4266" />
					<p>Voltar para o dashboard</p>
				</Link>
				<h2>Desativar conta</h2>
			</div>
			<div className="content">
				<h3>Tem certeza de que você quer desativar sua conta?</h3>
				<div className="container_buttons">
					<button type="button" className="edit">
						Alterar informação de pagamento
					</button>
					<button type="button" className="desactive">
						Desativar conta
					</button>
				</div>
			</div>
			<span>Aprovando postagens desde 2021</span>
		</div>
	</Container>
);

export default ConfigUser;
