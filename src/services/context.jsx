import axios from 'axios';
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
	showSucessPopUp() {},
	token: {
		acessToken: '',
		refreshToken: '',
	},
	login() {},
	signOut() {},
	api: {},
});

const ContextProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [smart, setSmart] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [token, setToken] = useState({
		acessToken: '',
		refreshToken: '',
	});
	const [apiState, setApiState] = useState(
		axios.create({
			baseURL: process.env.REACT_APP_API_URL,
		})
	);

	// useEffect(() => {
	// 	console.log(token);
	// 	if (!token) {
	// 		return;
	// 	}

	// 	const newApi = axios.create({
	// 		baseURL: process.env.REACT_APP_API_URL,
	// 		headers: {
	// 			Authorization: `Bearer ${token.acessToken}`,
	// 		},
	// 	});

	// 	// newApi.interceptors.response.use(config => {
	// 	// 	if (config.status === 403) {
	// 	// 		console.log('a');
	// 	// 	}
	// 	// });

	// 	setApiState(newApi);
	// }, [token]);

	function apiFetch(requestType, date, url) {
		console.log(token);
		if (token.acessToken) {
			return api[requestType](url, date, {
				headers: {
					authorization: `Bearer ${token?.acessToken}`,
				},
			});
		}
		// console.log()
		return api[requestType](url, date);
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

	function showSucessPopUp(type, text) {
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
		console.log(newAcessToken);
		setToken({ acessToken: newAcessToken, refreshToken: newRefreshToken });
	}

	function signOut() {
		setToken('');
	}

	return (
		<Context.Provider
			value={{
				menuOpen,
				toggleOpenMenu,
				smart,
				showPopUp,
				showSucessPopUp,
				token,
				login,
				signOut,
				api: apiFetch,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
