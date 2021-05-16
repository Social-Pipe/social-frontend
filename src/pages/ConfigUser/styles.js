import styled from 'styled-components';

export default styled.main`
	display: flex;
	overflow: auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: 4rem;

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;

		.header {
			display: flex;
			align-items: center;
			margin-bottom: 4.25rem;
			flex-wrap: wrap;
			a {
				display: flex;
				align-items: center;
				text-decoration: none;
			}

			p {
				color: #3c3f4f;
				font-weight: 500;
				font-size: 0.81rem;
				margin: 0 1rem;
			}
			h2 {
				font-size: 2.5rem;
				color: #3c3f4f;
				font-weight: bold;
			}
		}

		.content {
			display: flex;
			justify-content: space-between;
			padding-bottom: 4rem;
		}

		form {
			flex: 1;
			align-self: stretch;
			min-width: 28.5rem;
			margin-right: 11.25rem;

			button {
				max-width: 15.5rem;
				margin-top: 2rem;
			}
		}

		.info {
			max-width: 34.87rem;
			width: 100%;
			display: flex;
			flex-direction: column;
			h3 {
				font-size: 1.25rem;
				font-weight: bold;
				color: #3c3f4f;
			}

			.price {
				font-size: 2.63rem;
				font-weight: bold;
				color: #3c3f4f;
				margin-top: 0.5rem;
				margin-bottom: 2.19rem;
			}

			.history {
				margin-top: 2.75rem;
				margin-bottom: 3.75rem;

				> div {
					display: flex;
					align-items: center;
					margin-bottom: 1.25rem;

					p {
						color: #5d5d5d;
					}
					strong {
						font-weight: bold;
					}

					span {
						flex: 1;
						border: 1px solid #e1e1e1;
						margin: 0 1rem;
					}

					div {
						padding: 0.6rem;
						background-color: #30a22c;
						color: #fff;
						border-radius: 8px;
						font-weight: bold;
						font-size: 0.62rem;
					}
				}
			}

			.container_buttons {
				display: flex;
				margin-top: auto;

				button {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 1rem;
					font-size: 0.81rem;
					font-weight: 500;
					border: none;
					background: none;
					cursor: pointer;
					width: 100%;
					max-width: 17.25rem;

					&.edit {
						background-color: #f9f9f9;
						color: #5d5d5d;
						border-radius: 8px;
						margin-right: 1rem;
					}

					&.desactive {
						color: #ee4266;
					}
				}
			}
		}
	}

	fieldset {
		display: flex;
		flex-direction: column;
		border: none;

		:not(:first-child) {
			margin-top: 1.9rem;
		}

		label {
			color: #5d5d5d;
			font-size: 0.75rem;
		}

		input {
			width: 100%;
			margin-top: 1rem;
			border: 1px solid #e4e4e4;
			height: 3rem;
			border-radius: 8px;
			outline: none;
			padding-left: 1.5rem;
			font-size: 1rem;
			color: #5d5d5d;
			font-weight: 500;
			box-shadow: 0px 15px 40px rgba(183, 183, 183, 0.1);
			background: none;

			:-webkit-autofill {
				background: none;
				color: #5d5d5d;
			}
		}
	}
	span {
		display: block;
		font-size: 1.25rem;
		color: #707070;
		opacity: 0.3;
		font-weight: 500;
		align-self: center;
		padding-bottom: 3rem;
	}

	@media (max-width: 1400px) {
		.container {
			width: 100%;
			form {
				min-width: 12.5rem;
				max-width: 28.5rem;
				margin-right: 7.65rem;
			}
		}
	}

	@media (max-width: 800px) {
		.container .content {
			form {
				min-width: 12.5rem;
				max-width: 100%;
				margin-right: 0;
				margin-bottom: 3rem;
			}
			flex-direction: column;
		}
	}

	@media (max-width: 500px) {
		padding: 2rem;
		.container .info .container_buttons {
			flex-direction: column;

			button {
				max-width: 100%;

				.edit {
					margin: 0;
					margin-bottom: 1rem;
				}
			}
		}
	}
`;
