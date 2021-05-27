import styled, { css } from 'styled-components';

export default styled.span`
	display: flex;
	align-items: center;
	padding-left: 3rem;
	width: 100%;
	background: #30a22c;
	max-width: 32.13rem;
	height: 4.69rem;
	border-radius: 8px;
	opacity: 0.7;
	position: fixed;
	right: 1.12rem;
	top: 6rem;
	z-index: 2;
	transition: transform 0.3s linear;

	${({ show }) =>
		!show &&
		css`
			transform: translateX(110%);
		`}

	p {
		color: #fff;
		font-weight: 500;
	}
`;
