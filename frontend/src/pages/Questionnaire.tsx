/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

const Questionnaire = () => {
	const { questionnaireId, preview } = useParams();

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
		<div className="bg-blue-400">
			<div className="min-h-screen bg-green-300 flex flex-col align-middle justify-center gap-4">
				<div className="text-center">step 1 - get started page</div>
			</div>
			<div className="min-h-screen bg-green-600 flex flex-col align-middle justify-center gap-4">
				<div>step2 - user info & avatar</div>
				<div>
					<label htmlFor="name">Name :</label>
					<input type="text" name="name" id="name" />
				</div>
				<div>
					<label htmlFor="email">Email :</label>
					<input type="text" name="email" id="email" />
				</div>
			</div>
			<div>
				<div className="fixed h-8 w-full bg-black top-0 left-0 flex justify-between p-2">
					<div>
						{questionnaireId} - {isPreview ? 'Preview' : ''}
					</div>
				</div>
				{questions.map((question, index) => {
					return (
						<div className={`min-h-screen py-20 px-25  ${index % 2 == 0 ? 'bg-amber-300' : 'bg-gray-500'}`}>
							<div className="mb-3">
								{question.questionId} - {question.question}
							</div>
							<div className="grid grid-cols-2 gap-4">
								{question.options.map((option) => {
									return (
										<div className="bg-white rounded p-2 cursor-pointer" key={option.optionId}>
											{option.option}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Questionnaire;
