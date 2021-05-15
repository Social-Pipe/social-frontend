import styled from 'styled-components';

export default styled.div`
	display: flex;
	overflow: auto;

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
			flex: 1;
		}
	}
`;
