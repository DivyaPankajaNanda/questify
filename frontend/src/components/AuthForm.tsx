import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [isSigninEnabled, setIsSigninEnabled] = useState(true);
	const navigate = useNavigate();

	const handleAuthSubmission = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const signinValidation = email != '' && password != '';
		const signupValidation = name != '' && email != '' && password != '';

		if ((isSigninEnabled && !signinValidation) || (!isSigninEnabled && !signupValidation)) return;

		localStorage.setItem('auth', 'user');
		navigate(`/dashboard`);
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
		<div className="bg-white h-70 w-70 rounded-xl overflow-hidden">
			<div className="flex flex-row h-1/5">
				<div onClick={selectSignin} className={`flex items-center justify-center flex-1/2 ${isSigninEnabled ? 'bg-green-800' : 'bg-blue-800'}`}>
					Signin
				</div>
				<div onClick={selectSignup} className={`flex items-center justify-center flex-1/2 ${isSigninEnabled ? 'bg-blue-800' : 'bg-green-800'}`}>
					Signup
				</div>
			</div>
			<form onSubmit={(e) => handleAuthSubmission(e)} className="flex flex-col gap-4 h-4/5 justify-evenly p-3">
				{!isSigninEnabled && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />}
				<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="submit">{isSigninEnabled ? 'Signin' : 'Signup'}</button>
			</form>
		</div>
	);
};

export default AuthForm;
