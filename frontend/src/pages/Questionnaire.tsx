/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { AnimatingCircle } from '../components';
import { motion } from 'motion/react';
import { dummy_questionnaires } from '../api/dummy-content';
import { Button } from '@progress/kendo-react-buttons';

const Questionnaire = () => {
	const { questionnaireId, preview } = useParams();
	const [started, setStarted] = useState(false);
	const [step, setStep] = useState(1);
	const [questionnaire] = useState(dummy_questionnaires.find((q) => q.questionnaireId === questionnaireId));

	let isPreview = false;
	if (preview == 'preview') isPreview = true;

	const dummyQuestions = [
		{
			questionId: '1',
			question: 'Question text',
			options: [
				{ optionId: '1', option: 'option 1' },
				{ optionId: '2', option: 'option 2' },
				{ optionId: '3', option: 'option 3' },
				{ optionId: '4', option: 'option 4' },
			],
		},
	];

	const [questions, setQuestions] = useState(dummyQuestions);

	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) return;
		isMounted.current = true;

		const newQuestion = {
			questionId: '2',
			question: 'Question text 2',
			options: [
				{ optionId: '1', option: 'option 1' },
				{ optionId: '2', option: 'option 2' },
				{ optionId: '3', option: 'option 3' },
			],
		};

		setQuestions((questions) => [...questions, newQuestion]);
	}, []);

	return (
		<div className="relative">
			<div>
				<div className="fixed h-8 w-full bg-color5 text-white font-bold top-0 left-0 flex justify-between p-2">
					<div>
						{questionnaire?.title} - {isPreview ? 'Preview' : ''}
					</div>
				</div>
				{questionnaire?.questions.map((question, index) => {
					return (
						<div
							className={`min-h-screen py-20 px-25  color4 ${index % 2 == 0 ? 'bg-color2' : 'bg-color3'} ${index + 1 == step ? 'block' : 'hidden'}`}
						>
							<div className="mb-3">
								{index + 1} - {question.text}
							</div>
							<div className="grid grid-cols-2 gap-4">
								{question.options &&
									question.options.map((option) => {
										return (
											<div className="bg-white rounded p-2 cursor-pointer" key={option.optionId}>
												{option.value}
											</div>
										);
									})}
							</div>
							<div className="fixed w-[20rem] h-[8rem] bottom-10 left-[50%] ml-[-6rem]">
								<Button
									className="mr-4"
									onClick={() => {
										setStep((prev) => {
											if (prev > 1) return prev - 1;
											return prev;
										});
									}}
								>
									Back
								</Button>
								<Button
									onClick={() => {
										setStep((prev) => {
											if (prev < questionnaire?.questions.length) return prev + 1;
											return prev;
										});
									}}
								>
									Next
								</Button>
							</div>
						</div>
					);
				})}
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
						<span> G </span>
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
					<div> O </div>
				</div>
			</motion.div>
		</div>
	);
};

export default Questionnaire;
