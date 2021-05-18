import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Container from './styles';

import logoTest from '../../assets/images/Coca.png';
import logoTproductTestest from '../../assets/images/productTest.png';
import Row from '../../components/Row';

const ProductDetail = () => {
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState('facebook');
	return (
		<Container>
			<div className="header">
				<div className="logo">
					<img src={logoTest} alt="logo" />
					<h2>Coca Cola</h2>
				</div>
				<div className="social_redes">
					<p>Selecione a rede social ao lado</p>
					<button
						type="button"
						onClick={() => setFilter('facebook')}
						className={`facebook ${filter === 'facebook' ? 'active' : ''}`}
					>
						<FaFacebookF size={24} color="#fff" />
					</button>
					<button
						type="button"
						onClick={() => setFilter('instagram')}
						className={`instagram ${filter === 'instagram' ? 'active' : ''}`}
					>
						<FaInstagram size={24} color="#fff" />
					</button>
					<button
						type="button"
						onClick={() => setFilter('linkedin')}
						className={`linkedin ${filter === 'linkedin' ? 'active' : ''}`}
					>
						<FaLinkedinIn size={24} color="#fff" />
					</button>
				</div>
			</div>
			<div className="content">
				<div className="page_header">
					<ul>
						<li className={page === 0 ? 'selected' : ''}>
							<button type="button" onClick={() => setPage(0)}>
								Feed
							</button>
						</li>
						<li className={page === 1 ? 'selected' : ''}>
							<button type="button" onClick={() => setPage(1)}>
								Lista
							</button>
						</li>
					</ul>
				</div>
				{page === 0 ? (
					<div className="feed">
						<div>
							<img src={logoTproductTestest} alt="produto" />
							<span>Reprovado</span>
						</div>
					</div>
				) : (
					<div className="products">
						<Row buttons={false} />
						<Row buttons={false} />
						<Row buttons={false} />
						<Row buttons={false} />
						<Row buttons={false} />
					</div>
				)}
			</div>
			<span>Aprovando postagens desde 2021</span>
		</Container>
	);
};

export default ProductDetail;
