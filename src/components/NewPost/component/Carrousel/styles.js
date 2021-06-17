import styled, { css } from 'styled-components';

export default styled.div`
	flex: 2;
	cursor: pointer;
	display: flex;
	margin-left: 1rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.carrousel-container {
		width: 100%;
		margin-left: 1.5rem;

		.slider-control-centerleft {
			left: -20px !important;
		}
		.slider-control-centerright {
			right: -20px !important;
		}

		button {
			background: none;
			border: none;
			cursor: pointer;
		}
		.carrousel-image {
			display: flex;
			flex-direction: column;
			align-items: center;
			button {
				position: relative;
				width: 4.37rem;
				height: 4.37rem;
				img {
					width: 100%;
					height: 100%;
					border-radius: 100%;
				}

				span {
					display: flex;
					background: rgba(0, 0, 0, 0.5);
					border-radius: 100%;
					align-items: center;
					justify-content: center;
					position: absolute;
					top: 0;
					opacity: 0;
					transition: opacity linear 0.2s;
					left: 0;
					width: 100%;
					height: 100%;
				}

				:hover {
					span {
						opacity: 1;
					}
				}
			}

			> div {
				border: none;
				display: flex;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 1.75rem;
				height: 1.75rem;
				border-radius: 8px;
				border: 1px solid #e4e4e4;
				margin-top: 1rem;

				p {
					font-weight: 500;
					color: #5d5d5d;
				}
			}
		}
	}

	.add_image {
		min-width: 4.37rem;
		min-height: 4.37rem;
		max-width: 4.37rem;
		max-height: 4.37rem;
		align-self: flex-end;
		div {
			background: rgba(118, 169, 236, 0.15);
			min-width: 4.37rem;
			min-height: 4.37rem;
			max-width: 4.37rem;
			max-height: 4.37rem;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			border: 2px dashed ${({ active }) => (active ? '#23B123' : '#76a9ec')};
			border-radius: 100%;

			p {
				color: ${({ active }) => (active ? '#23B123' : '#76a9ec')};
				font-weight: 500;
				margin: 0;
			}
		}
		${({ existImage }) =>
			existImage &&
			css`
				width: 100%;
				max-width: 100%;
				min-height: 3rem;
				max-height: 3rem;
				> div {
					max-width: 100%;
					width: 100%;
					min-height: 3rem;
					max-height: 3rem;

					border-radius: 8px;
				}
			`}
	}

	@media (max-width: 900px) {
		margin-left: 0;
	}
`;
