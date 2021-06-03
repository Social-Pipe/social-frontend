import { createContext, useEffect, useState, useCallback } from 'react';

import api from '../config/api';

export const Context = createContext({
	menuOpen: true,
	toggleOpenMenu() {},
	smart: true,
	showPopUp: {
		show: false,
		type: 'sucess',
		text: 'Alterações salvas com sucesso!',
	},
	handleShowPopUp() {},
	token: {
		acessToken: '',
		refreshToken: '',
	},
	login() {},
	signOut() {},
	api: {},
	showModal: false,
	handleShowModal() {},
	clients: [],
	handleClients() {},
});

const ContextProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [smart, setSmart] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [token, setToken] = useState({
		acessToken: '',
		refreshToken: '',
	});
	const [showModal, setShowModal] = useState(false);
	const [clients, setClients] = useState([]);

	function apiFetch(requestType, date, url) {
		if (token.acessToken) {
			return api[requestType](url, date, {
				headers: {
					authorization: `Bearer ${token?.acessToken}`,
				},
			});
		}
		return api[requestType](url, date);
	}

	function handleClients(clientsArray) {
		setClients(clientsArray);
	}

	const verifyWidthAndSetNumberSlides = useCallback(width => {
		if (width <= 800) {
			setSmart(true);
			return;
		}

		setSmart(false);
	}, []);

	useEffect(() => {
		verifyWidthAndSetNumberSlides(window.innerWidth);
		window.addEventListener('resize', () => {
			verifyWidthAndSetNumberSlides(window.innerWidth);
		});

		return window.removeEventListener('resize', () => {
			verifyWidthAndSetNumberSlides(window.innerWidth);
		});
	}, []);

	function toggleOpenMenu() {
		setMenuOpen(props => !props);
	}

	function handleShowPopUp(type, text) {
		setShowPopUp({
			show: true,
			type,
			text,
		});

		setTimeout(
			() =>
				setShowPopUp(props => ({
					...props,
					show: false,
				})),
			1500
		);
	}

	function login(newAcessToken, newRefreshToken) {
		setToken({ acessToken: newAcessToken, refreshToken: newRefreshToken });
	}

	function signOut() {
		setToken('');
	}

	function handleShowModal(modal) {
		setShowModal(modal);
	}

	return (
		<Context.Provider
			value={{
				menuOpen,
				toggleOpenMenu,
				smart,
				showPopUp,
				handleShowPopUp,
				token,
				login,
				signOut,
				api: apiFetch,
				showModal,
				handleShowModal,
				handleClients,
				clients,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
