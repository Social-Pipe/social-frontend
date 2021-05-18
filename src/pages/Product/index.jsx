import { BsFillGearFill } from 'react-icons/bs';

import Row from './components/Row';
import Container from './styles';

import Aside from '../../components/Aside';
import Button from '../../components/Button';

const Product = () => (
	<Container>
		<Aside />
		<main>
			<div className="header">
				<div>
					<p>Dashboard</p>
					<h2>Coca Cola</h2>
				</div>
				<div className="share">
					<div>
						<p>Link de compartilhamento com o cliente</p>
						<div className="input_container">
							<input />
							<button type="button">copiar link</button>
						</div>
					</div>
					<button type="button">
						<BsFillGearFill size={24} color="#fff" />
					</button>
				</div>
			</div>
			<div className="content">
				<div className="container_buttons">
					<Button>Novo post</Button>
					<button className="secondary" type="button">
						Mostrar arquivados
					</button>
				</div>
				<div className="products">
					<Row />
					<Row />
					<Row />
					<Row />
					<Row />
				</div>
			</div>
			<span>Aprovando postagens desde 2021</span>
		</main>
	</Container>
);

export default Product;
