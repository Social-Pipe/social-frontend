import { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useHistory, useLocation } from 'react-router-dom';

import Container from './styles';

import { Context } from '../../services/context';

const Aside = () => {
	const { menuOpen, handleShowModal, clients } = useContext(Context);
	const [clientActiveId, setClientActiveId] = useState(-1);

	const history = useHistory();
	const route = useLocation();

	useEffect(() => {
		const array = route.pathname.split('/');
		const id = array[array.length - 2];
		setClientActiveId(Number(id));
	}, [route]);

	return (
		<>
			<Container openMenu={menuOpen}>
				<div>
					<button type="button" onClick={() => handleShowModal(true)}>
						<AiOutlinePlus color="#fff" size={16} />
						<p>Novo Cliente</p>
					</button>
					<h2>Meus Clientes</h2>
					<p>Coca Cola</p>
				</div>
				<div className="clients">
					{clients.map(client => (
						<button
							type="button"
							onClick={() =>
								history.push(`/dashboard/product/${client.id}/post`)
							}
							className={client.id === clientActiveId ? 'active' : ''}
							key={client.id}
						>
							{client.name}
						</button>
					))}
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
		</>
	);
};

export default Aside;
