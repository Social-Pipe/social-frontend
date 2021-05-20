import styled from 'styled-components';

export default styled.div`
	padding: 2.8rem 5.87rem;

	p {
		font-size: 2.5rem;
		font-weight: 600;
		color: #3c3f4f;
		margin-bottom: 1.87rem;
	}

	> div {
		display: flex;

		button {
			flex: 1;

			:last-child {
				color: #5d5d5d;
				font-size: 0.81rem;
				font-weight: 500;
				background: #f9f9f9;
				border-radius: 8px;
				border: none;
				margin-left: 1rem;
				cursor: pointer;
			}
		}
	}
`;