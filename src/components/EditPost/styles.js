import styled from 'styled-components';

export default styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;

	max-width: 73.37rem;
	max-height: 43.5rem;

	img {
		object-fit: cover;
	}

	.close_button {
		position: absolute;
		top: -2rem;
		right: 1rem;
		background: none;
		border: none;
		z-index: 2;
	}
	> div {
		display: flex;
		flex-direction: column;
		padding: 1.2rem;
	}

	.header_container {
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3 {
			font-size: 2.44rem;

			color: #3c3f4f;
		}
		button {
			max-width: 15.5rem;
		}
	}

	img {
		flex: 4;
	}

	form {
		display: flex;
		flex: 1;
		align-self: stretch;
		flex-direction: column;

		display: flex;
		padding-top: 2.5rem;
		border-top: 1px solid #bbbbbb;

		p,
		label {
			color: #3c3f4f;
			font-weight: 500;
			margin-bottom: 0.62rem;
		}

		.photo_container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.select {
				flex: 1;
				margin-left: 2rem;
				> div {
					position: relative;

					.mask {
						align-items: center;
						display: flex;
						height: 3rem;
						border-radius: 8px;
						border: 1px solid #e4e4e4;
						box-shadow: 0 15px 40px rgba(183, 183, 183, 0.11);
						padding-left: 1rem;
						align-self: stretch;
						position: relative;
						justify-content: space-between;
						padding: 0 1rem;
						z-index: 2;
						pointer-events: none;
						background: #fff;
						p {
							margin: 0;
						}
					}
					select {
						cursor: pointer;
						position: absolute;
						outline: none;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border-radius: 8px;
						border: none;
					}
				}
			}
			.social_redes {
				display: flex;
				flex-direction: column;

				> div {
					display: flex;
				}

				button {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 2.25rem;
					height: 2.25rem;
					border-radius: 100%;
					background-color: #dfdfdf;
					border: none;
					cursor: pointer;

					&.active {
						&.facebook,
						&.linkedin {
							background: #3b5998;
						}

						&.instagram {
							background-color: #8d4b26;
						}
					}

					:nth-child(2n) {
						margin: 0 1rem;
					}
				}
			}

			> button {
				width: 15.5rem;
			}
		}
		.inputs_container {
			display: flex;
			margin: 2.2rem 0;

			> div {
				flex: 1;
				justify-content: center;
			}

			.date {
				flex: 1;
				display: flex;
				flex-direction: column;

				> div {
					display: flex;
					align-items: center;
					height: 3rem;
					border-radius: 8px;
					border: 1px solid #e4e4e4;
					box-shadow: 0 15px 40px rgba(183, 183, 183, 0.11);
					padding-left: 1rem;
					align-self: stretch;

					p {
						color: #5d5d5d;
						font-weight: 500;
						margin: 0;
						margin-left: 1rem;
					}
				}
			}

			.creating {
				display: flex;
				flex-direction: column;
				> div {
					display: flex;
					justify-content: space-between;

					> div {
						position: relative;
						padding-left: 0.5rem;
						svg:first-child {
							position: absolute;
							top: 0;
							right: 2.4rem;
						}
						svg:last-child {
							z-index: 2;
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
				position: relative;

				label {
					color: #5d5d5d;
					font-size: 1rem;
					font-weight: 600;
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
				}
			}
		}
		.text {
			display: flex;
			flex: 1;
			flex-direction: column;

			textarea {
				box-shadow: 0 15px 40px rgba(183, 183, 183, 0.11);
				height: 100%;
				border-radius: 8px;
				resize: none;
				border: 1px solid #e4e4e4;
				outline: none;
				padding: 1rem;
				color: #5d5d5d;
				font-size: 1rem;
			}
		}
		&.footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex: 1;
			background: #e6eef3;
			border-radius: 0 0 8px 8px;
			border: 1px solid rgba(190, 190, 190, 0.23);
			padding: 0 3.75rem;

			p {
				font-size: 1.19rem;
				max-width: 25.37rem;
				font-weight: 500;
				color: #3c3f4f;
			}

			strong {
				font-weight: 600;
			}
			button {
				max-width: 15.5rem;
			}
		}

		.button {
			margin-top: 1.5rem;
			max-width: 15.5rem;
			display: flex;
			justify-content: flex-end;
		}
	}

	@media (max-height: 800px) {
		max-height: 35rem;
	}
`;
