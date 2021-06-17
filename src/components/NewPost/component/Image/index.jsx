import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiPlusMedical } from 'react-icons/bi';

import Container from './styles';

function MyDropzone({ handleChange, value, type, ...rest }) {
	const [selectedFileUrl, setSelectedFileUrl] = useState({
		file: '',
		name: '',
	});
	const onDrop = useCallback(acceptedFiles => {
		const file = acceptedFiles[0];

		if (!file) {
			return;
		}
		const fileUrl = URL.createObjectURL(file);
		setSelectedFileUrl({ file: fileUrl, name: acceptedFiles[0].name });
		handleChange(acceptedFiles);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		maxFiles: 1,
		accept: type === 'Imagem' ? 'image/*' : 'video/*',
	});

	useEffect(() => {
		console.log(value);
		if (!value) {
			setSelectedFileUrl({
				file: '',
				name: '',
			});
			return;
		}
		const fileUrl = URL.createObjectURL(value[0]);
		setSelectedFileUrl({
			file: fileUrl,
			name: value[0].name,
		});
	}, [value]);

	return (
		<Container active={selectedFileUrl.file} {...getRootProps()} {...rest}>
			<input {...getInputProps()} />
			<div>
				{selectedFileUrl.file &&
					(type === 'Imagem' ? (
						<img src={selectedFileUrl.file} alt="imagem" />
					) : (
						<video autoPlay>
							<source src={selectedFileUrl.file} />
						</video>
					))}
				<p>{selectedFileUrl.name || `Selecionar ${type}`}</p>
			</div>
		</Container>
	);
}

MyDropzone.propTypes = {
	handleChange: PropTypes.func.isRequired,
};

export default MyDropzone;
