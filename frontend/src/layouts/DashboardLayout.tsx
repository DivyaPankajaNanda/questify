/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { Outlet, useNavigate } from 'react-router';
import { Navbar } from '../components';
import { useAuthStore } from '../store/useAuthStore';
import { useEffect } from 'react';

const DashboardLayout = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuthStore();

	// useEffect(() => {
	// 	if (!isAuthenticated) {
	// 		navigate('/');
	// 	}
	// }, [isAuthenticated, navigate]);

	// return isAuthenticated ? (
	return (
		<div>
			<Navbar />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
