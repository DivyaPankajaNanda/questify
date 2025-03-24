/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useNavigate } from 'react-router';
import { Button } from '../components/kendo';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-color3 h-screen w-screen flex flex-col justify-center items-center">
			<h1 className="text-color4 text-center mb-4">404 - Page Not Found</h1>
			<Button onClick={() => navigate('/')}>Go Home</Button>
		</div>
	);
};

export default NotFound;
