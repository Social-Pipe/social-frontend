import { HiPlusSm } from 'react-icons/hi';

import Container from './styles';

import imageTest from '../../assets/images/Coca.png';

const Card = ({ text }) => (
	<Container existProduct={text}>
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

export default Card;
