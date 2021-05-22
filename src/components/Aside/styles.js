import styled, { css } from 'styled-components';

export default styled.aside`
	display: flex;
	flex-direction: column;
	background-color: #f9f9f9;
	min-width: 21.5rem;
	height: 100%;
	overflow: auto;
	transition: transform 0.2s ease-in;
	z-index: 2;

	> div {
		padding: 3rem;
		color: #5d5d5d;
		:first-child {
			flex: 1;

			button {
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #facd53;
				border: none;
				height: 3rem;
				margin-bottom: 1.87rem;
				font-size: 1rem;
				border-radius: 8px;
				color: #fff;
				width: 100%;
				box-shadow: 0 10px 15px rgba(225, 208, 100, 0.4);
				font-weight: bold;
				cursor: pointer;
				transition: filter linear 0.2s;

				:hover {
					filter: brightness(0.95);
				}

				p {
					margin-left: 0.5rem;
				}
			}

			h2 {
				font-size: 1.5rem;
				margin-bottom: 1rem;
				font-weight: bold;
			}

			p {
				font-size: 1.25rem;
			}
		}

		:last-child {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 12.25rem;
			padding: 2.5rem 3rem;

			button {
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fc7b88;
				border: none;
				padding: 0.5rem 1.25rem;
				font-size: 1rem;
				max-width: 4.62rem;
				border-radius: 8px;
				color: #fff;
				box-shadow: 0 10px 15px rgba(252, 123, 136, 0.4);
				font-weight: bold;
				cursor: pointer;
				transition: filter linear 0.2s;

				:hover {
					filter: brightness(0.95);
				}
			}

			.comment {
				display: flex;
				align-items: center;
				justify-content: space-between;
				max-width: 11.81rem;

				span {
					font-size: 0.75rem;
					font-weight: 300;
				}
				p {
					font-size: 1rem;
					font-weight: bold;
				}
			}
		}
	}

	@media (max-width: 1400px) {
		min-width: 18rem;
	}

	@media (max-width: 800px) {
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-100%);

		${({ openMenu }) =>
			openMenu &&
			css`
				transform: translateX(0%);
			`}
	}
`;
