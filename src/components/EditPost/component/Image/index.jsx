import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiPlusMedical } from 'react-icons/bi';

import Container from './styles';

function MyDropzone({ handleChange, value, ...rest }) {
	const [selectedFileUrl, setSelectedFileUrl] = useState('');
	const onDrop = useCallback(acceptedFiles => {
		const files = acceptedFiles;

		if (!files) {
			return;
		}
		const fileUrl = files.map(file => URL.createObjectURL(file));
		console.log(fileUrl);
		// setSelectedFileUrl(fileUrl);
		handleChange(files, fileUrl);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	// useEffect(() => {
	// 	if (!value || !value[0]) {
	// 		setSelectedFileUrl('');
	// 	}
	// 	const fileUrl = URL.createObjectURL(value[0].file);
	// 	setSelectedFileUrl(fileUrl);
	// }, [value]);

	return (
		<Container {...getRootProps()} {...rest}>
			<input {...getInputProps()} />
			{selectedFileUrl ? (
				<img src={selectedFileUrl} alt="company" />
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="35.51"
					height="29.288"
					viewBox="0 0 35.51 29.288"
				>
					<g id="image" opacity="0.96">
						<g id="Grupo_30" data-name="Grupo 30" transform="translate(0 0)">
							<g id="Grupo_29" data-name="Grupo 29">
								<path
									id="Caminho_15"
									data-name="Caminho 15"
									d="M33.942,44.856H1.568A1.569,1.569,0,0,0,0,46.424V72.576a1.569,1.569,0,0,0,1.568,1.568H33.942a1.569,1.569,0,0,0,1.568-1.568V46.424A1.569,1.569,0,0,0,33.942,44.856Zm0,27.72H1.568V46.424H33.942Z"
									transform="translate(0 -44.856)"
									fill="#FF1A1A"
								/>
							</g>
						</g>
						<g
							id="Grupo_32"
							data-name="Grupo 32"
							transform="translate(3.726 3.726)"
						>
							<g id="Grupo_31" data-name="Grupo 31">
								<path
									id="Caminho_16"
									data-name="Caminho 16"
									d="M81,98.58H54.506a.784.784,0,0,0-.784.784v17.325a.784.784,0,0,0,.784.784H81a.784.784,0,0,0,.784-.784V99.364A.784.784,0,0,0,81,98.58ZM55.29,100.148H80.212v13.27l-4.94-4.94a.784.784,0,0,0-1.109,0l-3.011,3.011-6.905-6.905a.784.784,0,0,0-1.109,0l-7.849,7.848V100.148Zm0,15.757V114.65l8.4-8.4L73.35,115.9Zm24.923,0H75.568L72.261,112.6l2.457-2.457,5.314,5.313a.783.783,0,0,0,.18.134v.316Z"
									transform="translate(-53.722 -98.58)"
									fill="#FF1A1A"
								/>
							</g>
						</g>
						<g
							id="Grupo_34"
							data-name="Grupo 34"
							transform="translate(18.145 6.781)"
						>
							<g id="Grupo_33" data-name="Grupo 33">
								<path
									id="Caminho_17"
									data-name="Caminho 17"
									d="M264.579,142.629a2.964,2.964,0,1,0,2.964,2.964A2.967,2.967,0,0,0,264.579,142.629Zm0,4.359a1.4,1.4,0,1,1,1.4-1.4A1.4,1.4,0,0,1,264.579,146.988Z"
									transform="translate(-261.616 -142.629)"
									fill="#FF1A1A"
								/>
							</g>
						</g>
						<g
							id="Grupo_36"
							data-name="Grupo 36"
							transform="translate(3.726 24.386)"
						>
							<g id="Grupo_35" data-name="Grupo 35">
								<path
									id="Caminho_18"
									data-name="Caminho 18"
									d="M61.324,396.458H54.506a.784.784,0,1,0,0,1.568h6.818a.784.784,0,1,0,0-1.568Z"
									transform="translate(-53.722 -396.458)"
									fill="#FF1A1A"
								/>
							</g>
						</g>
						<g
							id="Grupo_38"
							data-name="Grupo 38"
							transform="translate(14.121 24.386)"
						>
							<g id="Grupo_37" data-name="Grupo 37">
								<path
									id="Caminho_19"
									data-name="Caminho 19"
									d="M206.174,396.458h-1.788a.784.784,0,1,0,0,1.568h1.788a.784.784,0,1,0,0-1.568Z"
									transform="translate(-203.602 -396.458)"
									fill="#FF1A1A"
								/>
							</g>
						</g>
					</g>
				</svg>
			)}
		</Container>
	);
}

MyDropzone.propTypes = {
	handleChange: PropTypes.func.isRequired,
};

export default MyDropzone;
