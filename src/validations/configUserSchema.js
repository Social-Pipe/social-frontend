import * as Yup from 'yup';

export default Yup.object().shape({
	name: Yup.string(),
	email: Yup.string().email(),
	phone: Yup.string().matches(
		/(\(\d{2}\)\s\d{5}-\d{4})|(\(\d{2}\)\s\d{4}-\d{4})/g
	),
	cpf: Yup.string().matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}/g),
	password: Yup.string(),
	cep: Yup.string(/^\d{5}-\d{3}/g),
	adress: Yup.string(),
	number: Yup.string(),
	city: Yup.string(),
	state: Yup.string(),
	bairro: Yup.string(),
	ddd: Yup.string().min(2).max(2),
	phoneContact: Yup.string(/(\d{5}-\d{4})|(\d{4}-\d{4})/g),
});
