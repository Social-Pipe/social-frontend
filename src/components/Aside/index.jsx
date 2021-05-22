import { useContext, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';

import Container from './styles';

import Modal from '../../Container/Modal';
import { Context } from '../../services/context';
import NewClient from '../NewClient';

const Aside = () => {
	const [showModal, setShowModal] = useState(false);
	const { menuOpen } = useContext(Context);

	return (
		<>
			<Modal showModal={showModal} handleOutClick={() => setShowModal(false)}>
				<NewClient
					saveClient={() => setShowModal(false)}
					handleClose={() => setShowModal(false)}
				/>
			</Modal>
			<Container openMenu={menuOpen}>
				<div>
					<button type="button" onClick={() => setShowModal(true)}>
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
		</>
	);
};

export default Aside;
