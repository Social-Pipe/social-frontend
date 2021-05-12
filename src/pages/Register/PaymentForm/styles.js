import styled from 'styled-components';

export default styled.div`
	p {
		max-width: 23.3rem;
		margin: 1rem 0;
	}
	> div {
		max-width: 32.37rem;

		.info_payment_container {
			height: 22.19rem;
			border: 1px solid #acacac;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 1.9rem 0;

			p {
				color: #acacac;
				font-weight: 700;
				font-size: 2.43rem;
				text-align: center;
			}
		}
	}

	@media (max-width: 1400px) {
		form .info_payment_container p {
			font-size: 1.82rem;
		}
	}
`;
