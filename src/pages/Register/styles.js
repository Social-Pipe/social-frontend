import styled from 'styled-components';

export default styled.div`
	h1 {
		color: #3c3f4f;
		font-size: 2.5rem;
		font-weight: 700;
		max-width: 27.1rem;
	}
	p {
		font-weight: 500;
		color: #5d5d5d;
	}

	overflow: auto;
	display: flex;
	flex-direction: column;
	flex: 2;
	padding: 3rem 3.5rem 6.75rem 12.5rem;

	.container_register {
		flex: 1;
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		a {
			font-size: 2rem;
			text-decoration: none;
			color: #f31515;
			font-weight: 500;
		}
	}
	.content {
		flex: 6.5;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.progress_bar {
			display: flex;
			max-width: 18.75rem;
			margin-bottom: 3.62rem;

			> div {
				display: flex;
				flex-direction: column;
				flex: 1;
				align-items: center;
				justify-content: center;

				p {
					color: #e1e1e1;
					font-weight: 500;
					font-size: 0.56rem;
					margin-bottom: 0.87rem;
				}

				span {
					display: inline-block;
					align-self: stretch;
					border: 1px solid #e1e1e1;
					position: relative;

					::before,
					::after {
						content: '';
						position: absolute;
						min-width: 0.56rem;
						min-height: 0.56rem;
						border-radius: 100px;
						background-color: #e1e1e1;
						top: 0;
						z-index: 3;
						transform: translate(-50%, -50%);
					}

					::before {
						left: 0.19rem;
					}

					::after {
						right: -0.625rem;
					}
				}

				&.active {
					p {
						color: #ee4266;
					}

					span {
						border: 1px solid #585858;

						::before,
						::after {
							background-color: #585858;
						}
					}
				}

				:first-child {
					span::after {
						display: none;
					}
				}
			}
		}

		> span {
			margin-top: 2rem;
			display: block;
			font-size: 1.25rem;
			color: #707070;
			opacity: 0.3;
			font-weight: 500;
		}
	}

	@media (max-width: 1400px) {
		h1 {
			font-size: 1.87rem;
		}
		p {
			font-size: 0.75rem;
		}
		padding: 2.25rem 2.62rem 5rem 9.37rem;

		.content .container_form {
			form fieldset {
				:not(:first-child) {
					margin-top: 1.9rem;
				}

				label {
					font-size: 0.75rem;
				}

				input {
					margin-top: 1rem;
					height: 3rem;
					padding-left: 1.5rem;
					font-size: 1rem;
				}
			}

			.container_buttons {
				margin-top: 1.9rem;

				.container_forget a {
					font-size: 0.8rem;
				}
			}
		}

		span {
			font-size: 1.25rem;
		}
	}
	@media (max-width: 800px) {
		padding: 1rem 2.34rem;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;

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
		}

		&.checkbox {
			flex-direction: row;
			align-items: center;
			input[type='radio'] {
				width: 1rem;
				height: 1rem;
				position: relative;
				margin: 0;
				cursor: pointer;

				:checked + span::after {
					content: '';
				}
				margin-right: 1rem;
			}
			span {
				position: absolute;
				display: block;
				pointer-events: none;
				z-index: 2;
				background: #fff;

				::before {
					pointer-events: none;
					border-radius: 60px;
					display: block;
					content: '';
					top: 0;
					left: 0;
					width: 1rem;
					height: 1rem;
					z-index: 4;
					border: 1px solid #e4e4e4;
				}
				::after {
					pointer-events: none;
					background: #000;
					border-radius: 60px;
					display: block;
					position: absolute;
					top: 0.3125rem;
					left: 0.3125rem;
					width: 0.5rem;
					height: 0.5rem;
					background: #585858;
					z-index: 4;
				}
			}
		}
	}
`;

export const ContainerButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	.button {
		flex: 1;
	}

	.container_forget {
		flex: 1;
		display: flex;
		align-items: center;
		align-self: center;

		a {
			font-weight: 500;
			color: #2b8ee6;
			font-size: 0.8rem;
			text-decoration: none;
		}
	}

	@media (max-width: 500px) {
		.container_forget {
			display: none;
		}
	}
`;
