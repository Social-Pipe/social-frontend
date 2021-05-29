import PropTypes from 'prop-types';
import { HiPlusSm } from 'react-icons/hi';

import Container from './styles';

import imageTest from '../../assets/images/Coca.png';

const Card = ({ text, id }) => (
	<Container to="dashboard/product" existproduct={text}>
		{text ? (
			<>
				<img src={imageTest} alt="logo" />
				<p>{text}</p>
			</>
		) : (
			<>
				<HiPlusSm color="#fff" size={40} />
				<p>adicionar cliente</p>
			</>
		)}
	</Container>
);

Card.propTypes = {
	text: PropTypes.string,
	id: PropTypes.number,
};

Card.defaultProps = {
	text: '',
	id: -1,
};

export default Card;
