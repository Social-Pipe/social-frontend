import { createContext, useEffect, useState, useCallback } from 'react';

export const Context = createContext({
	menuOpen: true,
	toggleOpenMenu() {},
	smart: true,
});

const ContextProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [smart, setSmart] = useState(false);

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

	return (
		<Context.Provider value={{ menuOpen, toggleOpenMenu, smart }}>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
