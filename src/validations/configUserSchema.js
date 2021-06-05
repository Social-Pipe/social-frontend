import * as Yup from 'yup';

export default Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string().email().required(),
	phone: Yup.string()
		.matches(/(\(\d{2}\)\s\d{5}-\d{4})|(\(\d{2}\)\s\d{4}-\d{4})/g)
		.required(),
	cpf: Yup.string()
		.matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}/g)
		.required(),
	password: Yup.string(),
	cep: Yup.string(/^\d{5}-\d{3}/g).required(),
	adress: Yup.string().required(),
	number: Yup.string().required(),
	city: Yup.string().required(),
	state: Yup.string().required(),
	bairro: Yup.string().required(),
	sigla: Yup.string().required(),
	ddd: Yup.string().min(2).max(2),
	phoneContact: Yup.string(/(\d{5}-\d{4})|(\d{4}-\d{4})/g),
});
