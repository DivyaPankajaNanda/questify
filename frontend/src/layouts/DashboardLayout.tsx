/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { Outlet, useNavigate } from 'react-router';
import { Navbar } from '../components';
import { useEffect } from 'react';

const DashboardLayout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const isAuthenticated = localStorage.getItem('auth');
		if (!isAuthenticated) {
			navigate('/');
		}
	}, [navigate]);

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
