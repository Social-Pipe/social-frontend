import styled from 'styled-components';

export default styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	z-index: 4;

	span {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.77);
	}

	> div {
		background-color: #fff;
		z-index: 2;
		border-radius: 8px;
	}
`;
