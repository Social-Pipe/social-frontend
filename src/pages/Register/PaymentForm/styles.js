import styled from 'styled-components';

export default styled.div`
	p {
		max-width: 23.3rem;
		margin: 1rem 0;
	}
	> div {
		max-width: 32.37rem;

		.container_buttons {
			margin-top: 3.5rem;
		}
	}

	@media (max-width: 1400px) {
		> div .info_payment_container p {
			font-size: 1.82rem;
		}
	}
`;
