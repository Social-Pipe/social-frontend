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

		> div {
			display: flex;
			align-items: center;
		}

		.logo {
			img {
				width: 5.37rem;
				height: 5.37rem;
				object-fit: cover;
				margin-right: 2.87rem;
			}
		}

		.social_redes {
			p {
				font-size: 1.25rem;
				font-weight: 600;
				margin-right: 3rem;
			}

			button {
				border: none;
				margin: 0;
				opacity: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2.25rem;
				height: 2.25rem;
				border-radius: 100%;
				background-color: #dfdfdf;
				border: none;
				cursor: pointer;
				transition: background-color 0.2s linear;

				&.active {
					&.facebook,
					&.linkedin {
						background-color: #3b5998;
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

		.page_header {
			margin-bottom: 5.25rem;

			ul {
				justify-content: center;
				list-style: none;
				display: flex;
				align-items: center;
				margin-top: -1px;
				li {
					padding-top: 1rem;

					:first-child {
						margin-right: 5.25rem;
					}
					&.selected {
						border-top: 1px solid #7f7bfc;
					}

					button {
						background: none;
						border: none;
						cursor: pointer;
						font-size: 1.25rem;
						color: #5d5d5d;
						font-weight: 500;
					}
				}
			}
		}

		.feed {
			display: flex;
			> div {
				width: 23.37rem;
				height: 23.37rem;
				position: relative;
				img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
					z-index: -1;
				}

				span {
					display: flex;
					align-items: center;
					justify-content: center;
					background: #fe6969;
					box-shadow: 0 3px 6px rgba(254, 105, 105, 0.77);
					width: 5rem;
					height: 0.69rem;
					font-size: 0.375rem;
					color: #fff;
					border-radius: 100px;
					margin-top: 0.75rem;
					margin-left: 1rem;
				}
			}
		}

		.products {
			margin-top: 2rem;
		}
	}

	> span {
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
