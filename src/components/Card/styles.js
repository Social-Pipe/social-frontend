import styled, { css } from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 17.5rem;
	height: 9.25rem;
	box-shadow: 0 3px 50px rgba(0, 0, 0, 0.07);
	border-radius: 8px;

	img {
		width: 4rem;
		height: 4rem;
		border: 1px solid #707070;
		object-fit: contain;
		border-radius: 100%;
	}

	p {
		font-size: 1.12rem;
		color: #5d5d5d;
		font-weight: bold;
		margin-top: 0.5rem;
	}

	margin-bottom: 1.87rem;
	margin-right: 1.87rem;

	${({ existProduct }) =>
		!existProduct &&
		css`
			background-color: #facd53;
			box-shadow: 0 3px 50px rgba(252, 218, 123, 0.48);
			p {
				color: #fff;
			}
		`}
`;
