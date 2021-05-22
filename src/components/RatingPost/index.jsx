import { BsX } from 'react-icons/bs';
import { ImCheckmark } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';
import { TiPencil } from 'react-icons/ti';

import Container from './styles';

import productTest from '../../assets/images/productTest.png';
import Comment from '../Comment';

const RatingPost = ({ saveClient }) => (
	<Container>
		<div>
			<button type="button" className="close_button" onClick={saveClient}>
				<IoMdClose size={24} color="#fff" />
			</button>
			<div className="image">
				<img src={productTest} alt="produto" />
			</div>
			<div>
				<h3>O que achou do post?</h3>
				<form>
					<div className="buttons">
						<button className="good active" type="button">
							<ImCheckmark color="#fff" size={24} />
						</button>
						<button className="edit" type="button">
							<TiPencil color="#fff" size={24} />
						</button>
						<button className="cancel" type="button">
							<BsX color="#fff" size={24} />
						</button>
					</div>
				</form>
				<div className="content_container">
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</div>

				<div className="newPost">
					<label>Aperte enter para postar seu comentário</label>
					<input placeholder="Seu comentário sobre esse post" />
				</div>
			</div>
		</div>
		<p className="content_text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet
			est in lectus porttitor placerat. Interdum et malesuada fames ac ante
			ipsum primis in faucibus. Fusce ornare, lectus nec lobortis blandit,
			tellus dui iaculis risus, ac maximus mauris est non justo. Vivamus
			facilisis, sapien id luctus consectetur, sem nisl laoreet est, eget
			feugiat tortor turpis ut arcu. Proin vel eros turpis. Etiam vehicula
			scelerisque tristique. Vivamus vitae fringilla neque.
		</p>
	</Container>
);

export default RatingPost;
