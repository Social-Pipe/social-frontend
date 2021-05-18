import Container from './styles';

import Button from '../../../components/Button';
import maskCardNumber from '../../../utils/maskCardNumber';
import maskPhone from '../../../utils/maskPhone';
import { ContainerButtons, FormContainer } from '../styles';

const PaymentForm = ({ formik }) => (
	<Container>
		<h1>Finalize adicionando suas informações de assinatura!</h1>
		<p>
			O ambiente é 100% seguro. Não revelaremos a ninguém nenhuma informação de
			pagamento ou quaisquer outra informação que tenha inserido na Social Pipe.
		</p>
		<div>
			<FormContainer>
				<fieldset>
					<label htmlFor="cardNumber">Número do cartão</label>
					<input
						type="text"
						id="cardNumber"
						name="cardNumber"
						onBlur={formik.handleBlur}
						value={formik.values.cardNumber}
						onChange={e =>
							maskCardNumber(e.target.value, newValue =>
								formik.setFieldValue('cardNumber', newValue)
							)
						}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						onBlur={formik.handleBlur}
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="phone">Celular</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formik.values.phone}
						onBlur={formik.handleBlur}
						onChange={e =>
							maskPhone(e.target.value, newValue =>
								formik.setFieldValue('phone', newValue)
							)
						}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="password">Senha</label>
					<input
						type="password"
						id="password"
						name="password"
						onBlur={formik.handleBlur}
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
				</fieldset>
				<ContainerButtons className="container_buttons">
					<Button type="button" className="button">
						Finalizar cadastro
					</Button>
					<div className="container_forget" />
				</ContainerButtons>
			</FormContainer>
		</div>
	</Container>
);

export default PaymentForm;
