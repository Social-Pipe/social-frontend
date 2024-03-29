import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiPlusMedical } from 'react-icons/bi';

import Container from './styles';

function MyDropzone({ handleChange, value }) {
	const [selectedFileUrl, setSelectedFileUrl] = useState('');
	const onDrop = useCallback(acceptedFiles => {
		const file = acceptedFiles[0];

		if (!file) {
			return;
		}
		const fileUrl = URL.createObjectURL(file);
		setSelectedFileUrl(fileUrl);
		handleChange(file);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	useEffect(() => {
		if (!value) {
			setSelectedFileUrl('');
			return;
		}
		const fileUrl = URL.createObjectURL(value);
		setSelectedFileUrl(fileUrl);
	}, [value]);

	return (
		<Container {...getRootProps()}>
			<input {...getInputProps()} />
			{selectedFileUrl ? (
				<img src={selectedFileUrl} alt="company" />
			) : (
				<div>
					<BiPlusMedical size={20} color="#B1B1B1" />
				</div>
			)}
		</Container>
	);
}

MyDropzone.propTypes = {
	handleChange: PropTypes.func.isRequired,
};

export default MyDropzone;
