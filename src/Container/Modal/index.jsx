import Container from './styles';

const Modal = ({ children, handleOutClick, showModal }) => (
	<Container show={showModal}>
		<span tabIndex="0" onClick={handleOutClick} />
		{children}
	</Container>
);

export default Modal;
