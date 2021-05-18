import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiPlusMedical } from 'react-icons/bi';

import Container from './styles';

function MyDropzone() {
	const [selectedFileUrl, setSelectedFileUrl] = useState('');
	const onDrop = useCallback(acceptedFiles => {
		const file = acceptedFiles[0];

		if (!file) {
			// setFileReject(true);
			return;
		}
		const fileUrl = URL.createObjectURL(file);
		setSelectedFileUrl(fileUrl);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

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

export default MyDropzone;
