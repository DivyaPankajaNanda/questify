/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useState } from 'react';
import { AnimatingCircle, AuthForm } from '../components';
import { motion } from 'motion/react';

const Home = () => {
	const [started, setStarted] = useState(false);

	return (
		<div className="h-screen w-screen relative">
			<div className="bg-color2 h-screen w-screen flex justify-center items-center fixed top-0 left-0">
				<AuthForm />
			</div>

			<motion.div
				initial={{ x: '0%' }}
				animate={{ x: started ? '-100%' : '0%' }}
				transition={{
					duration: 2,
					ease: 'easeInOut',
				}}
				onClick={() => {
					setStarted(true);
				}}
				className="w-6/12 h-screen bg-color3 absolute top-0 left-0 overflow-hidden cursor-pointer"
			>
				<div className="absolute top-0 right-0 h-screen w-2 bg-white"></div>
				<AnimatingCircle size={40} bg={'bg-white'} opacity={10} corner={'right'} />
				<AnimatingCircle size={30} bg={'bg-white'} opacity={50} corner={'right'} />
				<AnimatingCircle size={20} bg={'bg-white'} opacity={100} corner={'right'} />
				<div className="color4 absolute top-[40%] right-0 text-4xl text-right">
					<div>Ques</div>
					<div>
						<span>Beg</span>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ x: '0%' }}
				animate={{ x: started ? '100%' : '0%' }}
				transition={{
					duration: 2,
					ease: 'easeInOut',
				}}
				onClick={() => {
					setStarted(true);
				}}
				className="w-6/12 h-screen bg-color4 absolute top-0 right-0 overflow-hidden cursor-pointer"
			>
				<div className="absolute top-0 left-0 h-screen w-2 bg-white"></div>
				<AnimatingCircle size={40} bg={'bg-white'} opacity={10} corner={'left'} />
				<AnimatingCircle size={30} bg={'bg-white'} opacity={50} corner={'left'} />
				<AnimatingCircle size={20} bg={'bg-white'} opacity={100} corner={'left'} />
				<div className="color4 absolute top-[40%] left-0 text-4xl text-left">
					<div>tify</div>
					<div>in (hand - pointer)</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Home;
