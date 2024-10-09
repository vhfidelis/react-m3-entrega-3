import { useContext } from 'react';
import { UserContext } from '../../providers';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
	const { user } = useContext(UserContext);
	return user ? <Outlet /> : <Navigate to='/' />;
};
