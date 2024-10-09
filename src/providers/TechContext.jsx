import { createContext, useContext, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { UserContext } from './UserContext';

const TechContext = createContext({});
const TechProvider = ({ children }) => {
	const { getUser, techList, setTechList } = useContext(UserContext);
	const [toEdit, setToEdit] = useState('');

	const registerTech = async (payload) => {
		try {
			const { data } = await api.post('/users/techs', payload);
			toast.success('Tecnologia cadastrada com sucesso');
			getUser();
		} catch (error) {
			console.log(error);
			toast.error('Ops, ocorreu um erro ao criar');
		}
	};
	const updateTech = async (payload, tech) => {
		try {
			await api.put(`/users/techs/${tech.id}`, payload);
			toast.success('Tecnologia atualizada com sucesso');
			getUser();
		} catch (error) {
			console.log(error);
			toast.error('Ops, ocorreu um erro ao atualizar');
		}
	};

	const deleteTech = async (techID) => {
		try {
			await api.delete(`/users/techs/${techID}`);
			toast.success('Tecnologia removida');
			getUser();
		} catch (error) {
			console.log(error);
			toast.error('Ocorreu um erro ao remover');
		}
	};
	return (
		<TechContext.Provider
			value={{
				techList,
				setTechList,
				registerTech,
				deleteTech,
				updateTech,
				setToEdit,
				toEdit,
			}}
		>
			{children}
		</TechContext.Provider>
	);
};

export { TechContext, TechProvider };
