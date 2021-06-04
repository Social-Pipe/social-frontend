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
	setNewPage() {},
});

const ContextProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [smart, setSmart] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [clients, setClients] = useState({ clients: [], page: 0 });
	const [user, setUser] = useState({});
	const [newPage, setNewPage] = useState(0);

	const verifyWidthAndSetNumberSlides = useCallback(width => {
		if (width <= 800) {
			setSmart(true);
			return;
		}

		setSmart(false);
	}, []);

	const fetchClients = async () => {
		const { data } = await api.get(`clients/?page=${newPage}`);
		const clientsResult = data.results.map(client => ({
			id: client.id,
			logo: client.logo,
			name: client.name,
		}));
		setClients(props => ({
			clients: [...props.clients, ...clientsResult],
			page: newPage,
		}));
	};

	useEffect(() => {
		if (newPage <= clients.page) {
			return;
		}
		fetchClients();
	}, [newPage, clients.page]);

	function addNewPage() {
		setNewPage(newPage + 1);
	}

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
				clients: clients.clients,
				user,
				addUser,
				setNewPage: addNewPage,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
