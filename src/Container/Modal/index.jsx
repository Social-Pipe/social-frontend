import Container from './styles';

const Modal = ({ children, handleOutClick, showModal, background = true }) => (
	<Container show={showModal} background={background}>
		<span tabIndex="0" onClick={handleOutClick} />
		{children}
	</Container>
);

export default Modal;
