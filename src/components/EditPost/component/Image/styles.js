import styled from 'styled-components';

export default styled.div`
	flex: 3 !important;
	height: 3rem !important;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	div {
		background: rgba(118, 169, 236, 0.15);
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 3rem;
		border: 2px dashed ${({ active }) => (active ? '#23B123' : '#76a9ec')};
		border-radius: 0.5rem;
		img,
		video {
			width: 2rem;
			height: 2rem;
			border-radius: 100%;
			margin-right: 1rem;
		}

		p {
			max-width: 10.5rem;
			overflow: hidden;
			color: ${({ active }) => (active ? '#23B123' : '#76a9ec')} !important;
			font-weight: 500;
			margin: 0 !important;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}
	}
`;
