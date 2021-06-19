import * as Yup from 'yup';

export default Yup.object().shape({
	name: Yup.string().required(),
	numberCard: Yup.string()
		.matches(/\d{4}\s\d{4}\s\d{4}\s\d{4}/g)
		.required(),
	codeCard: Yup.string().max(3).required(),
	vality: Yup.string().required(),
});
