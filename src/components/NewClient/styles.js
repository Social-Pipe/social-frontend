import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	max-width: 54.3rem;
	max-height: 34.75rem;

	.header_container {
		margin-top: 2rem;
		margin-left: 2rem;
		margin-right: 2rem;

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

	form {
		display: flex;
		flex: 1;
		flex-direction: column;

		> div {
			display: flex;
			:first-child {
				margin: 0 2rem;
				padding-top: 2.5rem;
				padding-left: 2.5rem;
				padding-right: 2.5rem;
				border-top: 1px solid #bbbbbb;
				flex: 4;
				.photo_container {
					p {
						margin-bottom: 0.5rem;
						color: #5d5d5d;
						font-weight: 500;
					}
				}
				.inputs_container {
					flex: 1;
					margin-left: 4.37rem;
					display: flex;
					flex-direction: column;

					.social_redes {
						display: flex;
						flex-direction: column;
						p {
							margin-top: 2.5rem;
							font-weight: 500;
							font-size: 1rem;
							margin-bottom: 0.5rem;
							color: #3c3f4f;
						}
						> div {
							display: flex;
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
		}
	}
`;
