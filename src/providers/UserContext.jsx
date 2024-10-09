import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext({});
const UserProvider = ({ children }) => {
	const navigate = useNavigate();

	const [techList, setTechList] = useState();
	const [user, setUser] = useState(null);
	const getUser = async () => {
		try {
			const localToken = localStorage.getItem('@KenzieHub-acessToken');
			if (localToken) {
				api.defaults.headers.common.Authorization = `Bearer ${localToken}`;
				const { data } = await api.get('/profile');
				setUser(data);
				navigate('/dashboard');
			} else {
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};
	const loginUser = async (payload, setLoading, reset) => {
		try {
			setLoading(true);
			const { data } = await api.post('/sessions', payload);
			toast.success('Bem vindo(a)!');
			localStorage.setItem('@KenzieHub-acessToken', data.token);
			api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
			setUser(data.user);
			navigate('/dashboard');
			reset();
		} catch (error) {
			console.log(error);
			toast.error('Usuário ou senha incorreta');
		} finally {
			setLoading(false);
		}
	};

	const registerUser = async (payload, setLoading, reset) => {
		try {
			setLoading(true);
			const { data } = await api.post('/users', payload);
			toast.success('Conta criada com sucesso');
			reset();
			navigate('/');
		} catch (error) {
			console.log(error);
			toast.error('Ops, algo deu errado');
		} finally {
			setLoading(false);
		}
	};

	const userLogout = () => {
		navigate('/');
		setUser(null);
		localStorage.removeItem('@KenzieHub-acessToken');
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<UserContext.Provider
			value={{
				loginUser,
				registerUser,
				userLogout,
				user,
				getUser,
				techList,
				setTechList,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
