/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useNavigate } from 'react-router';
import { Avatar, AppBar, AppBarSection, SvgIcon, logoutIcon } from '../components/kendo';

const Navbar = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('auth');
		navigate('/');
	};

	return (
		// <nav className="bg-color5 text-white py-2 px-6 flex justify-between items-center">
		// 	<h1 className="text-2xl font-bold cursor-pointer">Questify</h1>
		// 	<div className="flex gap-2 justify-between items-center">
		// 		<Avatar type="text" className="bg-color4 text-white h-10 w-10 flex items-center justify-center font-bold">
		// 			<span>JS</span>
		// 		</Avatar>
		// 		<Button onClick={handleLogout}>Logout</Button>
		// 	</div>
		// </nav>
		<AppBar className="bg-color5 text-white py-2 px-6 flex justify-between items-center">
			<AppBarSection>
				<h1 className="text-2xl font-bold cursor-pointer">Questify</h1>
			</AppBarSection>
			<AppBarSection className="flex w-3/12 gap-4 justify-end items-center">
				<AppBarSection>
					<Avatar type="text" className="bg-color4 text-white h-10 w-10 flex items-center justify-center font-bold">
						<span>JS</span>
					</Avatar>
				</AppBarSection>
				<AppBarSection>
					<SvgIcon icon={logoutIcon} className="cursor-pointer" onClick={handleLogout} />
				</AppBarSection>
			</AppBarSection>
		</AppBar>
	);
};

export default Navbar;
