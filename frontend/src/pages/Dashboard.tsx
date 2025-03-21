import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { QuestionnaireCard } from '../components';

const Dashboard = () => {
	const navigate = useNavigate();

	const questionnairesSetup = [
		{ questionnaireId: '1', title: 'Questionnaire 1', description: 'This is a description for questionnaire 1' },
		{ questionnaireId: '2', title: 'Questionnaire 2', description: 'This is a description for questionnaire 2' },
	];

	const [questionnaires, setQuestionnaires] = useState([...questionnairesSetup]);

	const addQuestionnaire = () => {
		console.log('Adding new questionnaire');
		const length = questionnaires.length;
		const newQuestionnaire = {
			questionnaireId: `${length + 1}`,
			title: 'New Questionnaire',
			description: 'This is a description for the new questionnaire',
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
		<div className="min-h-screen p-12 bg-green-300">
			<h1 className="text-2xl font-bold text-center mb-8 bg-blue-800">Questionnaires</h1>
			<div className="flex flex-row gap-4 flex-wrap bg-pink-500 w-fit">
				{questionnaires.map((questionnaire, index) => (
					<QuestionnaireCard key={index} questionnaire={questionnaire} />
				))}
				<button
					className="w-75 h-75 rounded flex items-center justify-center bg-blue-500 text-white px-5 py-2 cursor-pointer hover:bg-blue-600"
					onClick={() => {
						navigate(`/dashboard/questionnaire/create`);
					}}
				>
					Add New
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
