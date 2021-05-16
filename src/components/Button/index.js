import styled, { css } from 'styled-components';

export default styled.button`
	height: 3rem;
	width: 100%;
	text-align: center;
	background-color: #1ac863;
	border: none;
	border-radius: 8px;
	font-size: 1rem;
	color: #fff;
	font-weight: 500;
	box-shadow: 0px 10px 15px rgba(148, 252, 123, 0.38);
	cursor: pointer;
	transition: filter linear 0.2s;

	:hover {
		filter: brightness(0.95);
	}

	${({ secondary }) =>
		secondary &&
		css`
			background-color: #facd53;
			box-shadow: 0 10px 15px rgba(252, 123, 136, 0.4);
		`}
`;
