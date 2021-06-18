import Carrousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Container from './styles';

function CarrouselContainer({
	handleChange,
	handleDelete,
	value,
	type,
	...rest
}) {
	const [selectedFileUrl, setSelectedFileUrl] = useState([]);
	const [selectedFile, setSelectedFile] = useState([]);
	const [slidesShow, setSlidesShow] = useState(4);
	const onDrop = useCallback(acceptedFiles => {
		const file = acceptedFiles[0];

		if (!file || selectedFileUrl.length === 10) {
			return;
		}

		setSelectedFileUrl(props => {
			const filesUrl = acceptedFiles
				.map(acceptedFile => ({
					file: URL.createObjectURL(acceptedFile),
					id: null,
				}))
				.slice(0, 10 - props.length);
			const newFilesArray = [...props, ...filesUrl];
			if (newFilesArray.length > 10) {
				return props;
			}
			return newFilesArray;
		});
		setSelectedFile(props => {
			const filesUrl = acceptedFiles.slice(0, 10 - props.length);
			const newFilesArray = [...props, ...filesUrl];
			if (newFilesArray.length > 10) {
				return props;
			}
			return newFilesArray;
		});
	}, []);

	useEffect(() => {
		if (selectedFile.length > 0) {
			handleChange(selectedFile);
		}
	}, [selectedFile]);

	useEffect(() => {
		if (!value) {
			return;
		}
		setSelectedFileUrl(value);
	}, [value]);
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: 'image/*',
	});

	useEffect(() => {
		if (window.innerWidth <= 600) {
			setSlidesShow(1);
			return;
		}
		setSlidesShow(4);
	}, []);

	return (
		<Container existImage={selectedFileUrl.length === 0} {...rest}>
			{selectedFileUrl.length < 10 && (
				<div className="add_image" {...getRootProps()}>
					<input {...getInputProps()} />
					<div>
						{selectedFileUrl.length === 0 ? (
							<p>Selecione até 10 imagens</p>
						) : (
							<AiOutlinePlus size={32} color="#76A9EC" />
						)}
					</div>
				</div>
			)}
			{selectedFileUrl.length > 0 && (
				<div className="carrousel-container">
					<Carrousel
						onResize={() => {
							if (window.innerWidth <= 400) {
								setSlidesShow(1);
								return;
							}
							if (window.innerWidth <= 600) {
								setSlidesShow(3);
								return;
							}
							setSlidesShow(4);
						}}
						renderCenterLeftControls={props => (
							<button
								onClick={() => {
									props.previousSlide();
								}}
								type="button"
							>
								<IoIosArrowBack size={30} color="#717171" />
							</button>
						)}
						slidesToShow={slidesShow}
						defaultControlsConfig={{
							pagingDotsStyle: { display: 'none' },
						}}
						renderCenterRightControls={props => (
							<button
								type="button"
								onClick={() => {
									props.nextSlide();
								}}
							>
								<IoIosArrowForward size={30} color="#717171" />
							</button>
						)}
					>
						{selectedFileUrl.map((file, index) => (
							<div key={file} className="carrousel-image" type="button">
								<button
									type="button"
									onClick={() => {
										const newFilesUrl = [...selectedFileUrl];
										const newFiles = [...selectedFile];
										newFiles.splice(index, 1);
										newFilesUrl.splice(index, 1);
										setSelectedFileUrl(newFiles);
										setSelectedFileUrl(newFilesUrl);
										if (file.id !== null) {
											handleDelete(file.id);
										}
									}}
								>
									<img src={file.file} alt="imagem" />
									<span>
										<AiOutlineClose size={32} color="#fff" />
									</span>
								</button>
								<div>
									<p>{index + 1}</p>
								</div>
							</div>
						))}
					</Carrousel>
				</div>
			)}
		</Container>
	);
}

export default CarrouselContainer;
