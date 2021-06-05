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
	showModal: false,
	handleShowModal() {},
	clients: [],
	user: {},
	addUser() {},
});

const ContextProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [smart, setSmart] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [showModal, setShowModal] = useState({
		show: false,
		edit: false,
	});
	const [clients, setClients] = useState([]);
	const [user, setUser] = useState({});

	const verifyWidthAndSetNumberSlides = useCallback(width => {
		if (width <= 800) {
			setSmart(true);
			return;
		}

		setSmart(false);
	}, []);

	useEffect(() => {
		const fetchClients = async () => {
			try {
				const { data } = await api.get('clients/');
				const clientsResult = data.map(client => ({
					id: client.id,
					logo: `${process.env.REACT_APP_DJANGO_MEDIA_URL}/${client.logo}`,
					name: client.name,
				}));
				setClients([...clientsResult]);
			} catch {}
		};
		fetchClients();
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

	function handleShowModal(modal) {
		setShowModal(modal);
	}

	function addUser(newUser) {
		setUser(newUser);
	}

	return (
		<Context.Provider
			value={{
				menuOpen,
				toggleOpenMenu,
				smart,
				showPopUp,
				handleShowPopUp,
				showModal,
				handleShowModal,
				clients,
				user,
				addUser,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
