import { createContext, useEffect, useState, useCallback } from 'react';

export const Context = createContext({
	menuOpen: true,
	toggleOpenMenu() {},
	smart: true,
	showPopUp: false,
	showSucessPopUp() {},
});

const ContextProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [smart, setSmart] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);

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

	function showSucessPopUp() {
		setShowPopUp(true);

		setTimeout(() => setShowPopUp(false), 1000);
	}

	return (
		<Context.Provider
			value={{ menuOpen, toggleOpenMenu, smart, showPopUp, showSucessPopUp }}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
