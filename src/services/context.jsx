import { createContext, useEffect, useState, useCallback } from 'react';

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
	token: '',
	login() {},
	signOut() {},
});

const ContextProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [smart, setSmart] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [token, setToken] = useState('');

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

	function login(newToken) {
		setToken(newToken);
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
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
