/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { signin, signup } from '../api/authApi';
import { Button, Input } from '../components/kendo';

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [isSigninEnabled, setIsSigninEnabled] = useState(true);
	const navigate = useNavigate();

	const handleAuthSubmission = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (isSigninEnabled) await signin(email, password);
			else await signup(name, email, password);

			resetInputs();

			localStorage.setItem('auth', 'user');
			navigate(`/dashboard`);
		} catch (error) {
			console.log(error);
		}
	};

	const selectSignin = () => {
		resetInputs();
		setIsSigninEnabled(true);
	};

	const selectSignup = () => {
		resetInputs();
		setIsSigninEnabled(false);
	};

	const resetInputs = () => {
		setName('');
		setEmail('');
		setPassword('');
	};

	return (
		<div className="bg-white min-h-70 w-70 rounded-xl overflow-hidden">
			<div className="flex flex-row h-15 font-bold cursor-pointer">
				<div
					onClick={selectSignin}
					className={`flex items-center justify-center flex-1/2 ${isSigninEnabled ? 'bg-color4 color1' : 'bg-color1 color4'}`}
				>
					Signin
				</div>
				<div
					onClick={selectSignup}
					className={`flex items-center justify-center flex-1/2 ${isSigninEnabled ? 'bg-color1 color4' : 'bg-color4 color1'}`}
				>
					Signup
				</div>
			</div>
			<form onSubmit={(e) => handleAuthSubmission(e)} className="p-4 flex flex-col justify-between">
				<div className="flex flex-col gap-5 h-40 justify-evenly">
					{!isSigninEnabled && (
						<Input
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value as string)}
							className="color5 focus:outline-0 customInput p-1 "
						/>
					)}
					<Input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value as string)}
						className="color5 focus:outline-0 customInput p-1"
					/>
					<Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value as string)}
						className="color5 focus:outline-0 customInput p-1"
					/>
				</div>
				<div className="h-12 flex justify-center items-center">
					<Button type="submit">{isSigninEnabled ? 'Signin' : 'Signup'}</Button>
				</div>
			</form>
		</div>
	);
};

export default AuthForm;
