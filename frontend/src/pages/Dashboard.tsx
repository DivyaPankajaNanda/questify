/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { QuestionnaireCard } from '../components';

const Dashboard = () => {
	const navigate = useNavigate();

	const questionnairesSetup = [
		{ questionnaireId: '1', title: 'Questionnaire 1', description: 'This is a description for questionnaire 1', isPublished: true },
		{ questionnaireId: '2', title: 'Questionnaire 2', description: 'This is a description for questionnaire 2', isPublished: false },
	];

	const [questionnaires, setQuestionnaires] = useState([...questionnairesSetup]);

	const addQuestionnaire = () => {
		console.log('Adding new questionnaire');
		const length = questionnaires.length;
		const newQuestionnaire = {
			questionnaireId: `${length + 1}`,
			title: 'New Questionnaire',
			description: 'This is a description for the new questionnaire',
			isPublished: false,
		};
		setQuestionnaires((questionnaires) => [...questionnaires, newQuestionnaire]);
	};

	const isMounted = useRef(false);
	useEffect(() => {
		if (isMounted.current) return;
		isMounted.current = true;

		addQuestionnaire();
	});

	return (
		<div className="min-h-screen p-12 bg-color1">
			<h1 className="text-2xl font-bold mb-8 color5">My Questionnaires :</h1>
			<div className="flex flex-row gap-4 flex-wrap w-fit">
				{questionnaires.map((questionnaire) => (
					<QuestionnaireCard key={questionnaire.questionnaireId} questionnaire={questionnaire} />
				))}
				<button
					className="w-75 h-75 font-bold rounded flex items-center justify-center bg-color4 text-white px-5 py-2 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-color5"
					onClick={() => {
						navigate(`/dashboard/questionnaire/create`);
					}}
				>
					<span>
						Add <br /> Questionnaire
					</span>
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
