import styled from 'styled-components';

export default styled.main`
	display: flex;
	flex-direction: column;
	padding: 5.37rem 10.7rem;
	overflow: auto;
	flex: 1;

	.header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 3.12rem;

		.share {
			display: flex;
			align-items: center;

			p {
				font-size: 0.81rem;
				margin-bottom: 0.5rem;
			}
			.input_container {
				margin-bottom: 1.5rem;
				height: 3rem;
				width: 28.25rem;
				border: 1px solid #bebebe;
				border-radius: 8px;
				display: flex;
				align-items: center;
				padding-right: 1.75rem;
				overflow: hidden;

				button {
					border: none;
					background: none;
					font-size: 1rem;
					font-weight: bold;
					color: #5d5d5d;
					cursor: pointer;
					transition: opacity 0.2s linear;

					:hover {
						opacity: 0.9;
					}
				}

				input {
					padding-left: 1.75rem;
					flex: 1;
					align-self: stretch;
					border: none;
					outline: none;
					font-size: 1rem;
					color: #5d5d5d;
					font-weight: 500;
				}
			}
			> button {
				width: 4rem;
				height: 4rem;
				margin-left: 2rem;
				border-radius: 100%;
				background: #fcda7b;
				border: none;
				box-shadow: 0 10px 15px rgba(252, 218, 123, 0.38);
			}
		}

		p {
			font-size: 1.25rem;
			color: #5d5d5d;
			font-weight: 300;
		}

		h2 {
			font-size: 2.5rem;
			color: #3c3f4f;
			font-weight: bold;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		border-top: 1px solid #bbbbbb;
		padding-top: 2rem;

		.container_buttons {
			display: flex;
			align-items: center;
			> button {
				width: 15.5rem;
			}

			.secondary {
				width: auto;
				background: none;
				border: none;
				font-weight: 500;
				font-size: 1rem;
				color: #ee4266;
				margin-left: 2rem;
			}
		}

		.products {
			margin-top: 2rem;
		}
	}

	span {
		display: block;
		font-size: 1.25rem;
		color: #707070;
		opacity: 0.3;
		font-weight: 500;
		align-self: center;
		margin-top: auto;
	}

	@media (max-width: 1700px) {
		padding: 3rem 5.01rem;
	}
	@media (max-width: 1400px) {
		padding: 2rem 4.01rem;
	}
`;
