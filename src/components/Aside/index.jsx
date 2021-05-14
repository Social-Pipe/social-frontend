import { AiOutlinePlus } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';

import Container from './styles';

const Aside = () => (
	<Container>
		<div>
			<button type="button">
				<AiOutlinePlus color="#fff" size={16} />
				<p>Novo Cliente</p>
			</button>
			<h2>Meus Clientes</h2>
			<p>Coca Cola</p>
		</div>
		<div>
			<div className="comment">
				<div>
					<span>Você está logado como</span>
					<p>Usuário Teste</p>
				</div>
				<RiArrowRightSLine color="#FCDA7B" size={32} />
			</div>

			<button type="button">Sair</button>
		</div>
	</Container>
);

export default Aside;
