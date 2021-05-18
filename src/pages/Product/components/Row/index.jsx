import { BsX } from 'react-icons/bs';
import { TiPencil } from 'react-icons/ti';

import Container from './styles';

import likeIcon from '../../../../assets/icons/likeIcon.svg';
import productTest from '../../../../assets/images/productTest.png';

const Row = () => (
	<Container>
		<div>
			<img src={productTest} alt="produto" />
			<p>Qui, 25 de novembro às 07h30</p>
		</div>
		<div className="buttons">
			<span>Aprovado pelo cliente</span>
			<button className="cancel" type="button">
				<BsX color="#fff" size={24} />
			</button>
			<button className="edit" type="button">
				<TiPencil color="#fff" size={24} />
			</button>
			<button className="like" type="button">
				<img src={likeIcon} alt="botao like" />
			</button>
		</div>
	</Container>
);

export default Row;
