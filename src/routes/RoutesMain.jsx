import { Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage, DashBoard } from '../pages';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
export const RoutesMain = () => {
	return (
		<Routes>
			<Route element={<PublicRoutes />}>
				<Route
					path='/'
					element={<LoginPage />}
				/>
				<Route
					path='/register'
					element={<RegisterPage />}
				/>
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route
					path='/dashboard'
					element={<DashBoard />}
				/>
			</Route>
		</Routes>
	);
};
