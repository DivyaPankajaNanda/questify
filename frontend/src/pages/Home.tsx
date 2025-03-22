/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { AuthForm } from '../components';

const Home = () => {
	return (
		<div>
			<div className="bg-purple-400 min-h-screen">
				<h1>Questify</h1>
				<button onClick={() => {}}>Get Started</button>
			</div>
			<div className="bg-green-400 min-h-screen flex justify-center items-center">
				<AuthForm />
			</div>
		</div>
	);
};

export default Home;
