import { useNavigate } from 'react-router';

const Navbar = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('auth');
		navigate('/');
	};

	return (
		<nav className="bg-gray-800 text-white py-3 px-6 flex justify-between items-center">
			<h1 className="text-2xl font-bold cursor-pointer">Questify</h1>
			<button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
				Logout
			</button>
		</nav>
	);
};

export default Navbar;
