/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { motion } from 'motion/react';

interface AnimatingCircleProperties {
	size: number;
	bg: string;
	opacity: number;
	corner: 'left' | 'right';
}

const AnimatingCircle = ({ size, bg, opacity, corner }: AnimatingCircleProperties) => {
	return (
		<motion.div
			animate={{ scale: [1, 1.1, 1] }}
			transition={{
				duration: 5,
				ease: 'easeInOut',
				repeat: Infinity,
			}}
			style={{
				marginTop: `-${size / 2}rem`,
				height: `${size}rem`,
				width: `${size}rem`,
				opacity: `${opacity / 100}`,
				left: corner == 'left' ? `-${size / 2}rem` : `auto`,
				right: corner == 'right' ? `-${size / 2}rem` : `auto`,
			}}
			className={`absolute top-[50%] ${bg} rounded-[100%]`}
		></motion.div>
	);
};

export default AnimatingCircle;
