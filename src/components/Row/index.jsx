import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';
import { TiPencil } from 'react-icons/ti';

import Container, { Status } from './styles';

import likeIcon from '../../assets/icons/likeIcon.svg';
import productTest from '../../assets/images/productTest.png';

const Row = ({
	buttons,
	hdResponsive,
	deleteItem,
	editItem,
	ratingItem,
	date,
	statusText,
	status,
	image,
}) => (
	<Container hdResponsive={hdResponsive}>
		<div>
			<img src={image && image[0] && image[0].file} alt="produto" />
			<p>{date}</p>
		</div>
		<div className="buttons">
			<Status status={status}>{statusText}</Status>
			{buttons && (
				<div>
					<button onClick={deleteItem} className="cancel" type="button">
						<BsX color="#fff" size={24} />
					</button>
					<button className="edit" type="button" onClick={editItem}>
						<TiPencil color="#fff" size={24} />
					</button>
					<button onClick={ratingItem} className="like" type="button">
						<img src={likeIcon} alt="botao like" />
					</button>
				</div>
			)}
		</div>
	</Container>
);

Row.propTypes = {
	buttons: PropTypes.bool,
	hdResponsive: PropTypes.bool.isRequired,
	editItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired,
	ratingItem: PropTypes.func.isRequired,
};

Row.defaultProps = {
	buttons: true,
};
export default Row;
