import styled from 'styled-components';

export default styled.div`
	display: flex;
	height: 100%;
	width: 100%;

	> div {
		:first-child {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #ee4266;
			flex: 1;

			img {
				width: 13.19rem;
				object-fit: contain;
			}
		}

		:last-child {
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
				flex: 3;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				span {
					display: block;
					font-size: 1.25rem;
					color: #707070;
					opacity: 0.3;
					font-weight: 500;
				}
			}
		}
	}
`;
