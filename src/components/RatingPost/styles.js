import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;

	max-width: 73.37rem;
	max-height: 43.5rem;
	position: relative;
	> div {
		overflow: auto;
		display: flex;
		width: 100%;
		background-color: #fff;

		> div {
			overflow: auto;
			display: flex;
			flex-direction: column;
			padding: 2.5rem 3rem;
		}
	}

	.content_text {
		color: #fff;
		font-size: 1.12rem;
		flex: 1;
		font-weight: 600;
		margin-top: 1.5rem;
		/* overflow: auto; */
	}

	img {
		object-fit: cover;
		width: 100%;
	}

	.close_button {
		position: absolute;
		top: -2rem;
		right: 1rem;
		background: none;
		border: none;
		z-index: 2;
	}
	h3 {
		font-size: 1.5rem;

		color: #3c3f4f;
	}

	.image {
		flex: 5;
		padding: 0;
		overflow: hidden;
	}

	form {
		display: flex;
		flex-direction: column;

		display: flex;
		padding-top: 2.5rem;

		.buttons {
			display: flex;
			justify-content: space-evenly;
			button {
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
				border: none;
				width: 4.12rem;
				height: 4.12rem;
				opacity: 0.29;

				:not(:last-child) {
					margin-right: 0.81rem;
				}

				&.cancel {
					background: #fe6969;
				}
				&.edit {
					background-color: #fee569;
				}

				&.good {
					background-color: #73fe69;
				}

				&.active {
					opacity: 1;
				}
			}
		}
	}

	.content_container {
		flex: 1;
		margin: 2rem 0;
		padding-top: 2rem;
		min-height: 8.2rem;
		overflow: auto;
		border-top: 1px solid #e5e5e5;
	}

	.newPost {
		display: flex;
		flex-direction: column;
		label {
			font-size: 0.5rem;
			color: #5d5d5d;
			margin-left: 0.5rem;
		}

		input {
			width: 100%;
			margin-top: 0.5rem;
			border: 1px solid #e4e4e4;
			height: 3rem;
			border-radius: 8px;
			outline: none;
			padding-left: 1.5rem;
			font-size: 0.69rem;
			color: #5d5d5d;
			font-weight: 500;
			box-shadow: 0px 15px 40px rgba(183, 183, 183, 0.1);
		}
	}

	@media (max-height: 800px) {
		max-height: 30rem;
	}
`;