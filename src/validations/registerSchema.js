import * as Yup from 'yup';

export default Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string().email().required(),
	phone: Yup.string()
		.matches(/(\(\d{2}\)\s\d{5}-\d{4})|(\(\d{2}\)\s\d{4}-\d{4})/g)
		.required(),
	password: Yup.string().required(),
	checkbox: Yup.string().required(),
});
