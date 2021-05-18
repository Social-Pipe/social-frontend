import styled from 'styled-components';

export default styled.div`
	display: flex;
	overflow: auto;
	flex: 1;
	main {
		display: flex;
		flex-direction: column;
		padding: 5.37rem 10.7rem;
		overflow: auto;
		flex: 1;

		.header {
			margin-bottom: 3.12rem;

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
			flex-wrap: wrap;
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
	}

	@media (max-width: 1400px) {
		main {
			padding: 2rem 4.01rem;
		}
	}
`;
