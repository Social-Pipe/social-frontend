import styled from 'styled-components';

export default styled.div`
	width: 100%;
	height: 5.87rem;
	border-radius: 8px;
	box-shadow: 0 10px 15px rgba(6, 6, 6, 0.05);
	border: 1px solid rgba(190, 190, 190, 0.23);
	padding: 0 2.25rem 0 5.62rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;

	> div {
		display: flex;
		align-items: center;

		img {
			width: 4rem;
			height: 4rem;
			object-fit: contain;
			margin-right: 2.25rem;
		}

		p {
			color: #5d5d5d;
			font-weight: 600;
			font-size: 1.25rem;
		}

		&.buttons {
			display: flex;
			align-items: center;

			span {
				font-size: 1rem;
				margin: 0;
				background-color: #73fe69;
				padding: 0.5rem 1.75rem;
				color: #fff;
				opacity: 1;
				border-radius: 8px;
				margin-right: 1.75rem;
			}

			button {
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
				border: none;

				:not(:last-child) {
					margin-right: 0.81rem;
				}

				&.cancel {
					width: 2.37rem;
					height: 2.37rem;
					background: #fe6969;
					box-shadow: 0 3px 6px rgba(254, 105, 105, 0.28);
				}
				&.edit {
					width: 2.37rem;
					height: 2.37rem;
					background-color: #fee569;
					box-shadow: 0 3px 6px rgba(254, 229, 105, 0.28);
				}
				&.like {
					width: 4rem;
					height: 4rem;
					background: #7f7bfc;
					box-shadow: 0 10px 15px rgba(127, 123, 252, 0.38);
					img {
						width: 1.5rem;
						object-fit: contain;
						margin: 0;
					}
				}
			}
		}
	}

	@media (max-width: 1400px) {
		padding: 0 2.2rem;
	}
`;
