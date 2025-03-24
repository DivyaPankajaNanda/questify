/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { QuestionnaireCard } from '../components';
import * as QuestionnaireAPI from '../api/questionnaireApi';
import { Questionnaire } from '../interface';
import { dummy_questionnaires } from '../api/dummy-content';
// import { useQuestionnairesStore } from '../store/useQuestionnairesStore';

const Dashboard = () => {
	const [questionnaires, setQuestionnaires] = useState<Questionnaire[]>(dummy_questionnaires);
	// const { questionnaires, listUserQuestionnaires } = useQuestionnairesStore();
	const navigate = useNavigate();

	const isMounted = useRef(false);
	useEffect(() => {
		if (isMounted.current) return;
		isMounted.current = true;

		const fetchQuestionnaires = async () => {
			try {
				const questionnaireList = await QuestionnaireAPI.listUserQuestionnaires();
				setQuestionnaires(questionnaireList);
			} catch (error) {
				console.error('Failed to fetch questionnaires:', error);
			}
		};

		// fetchQuestionnaires();
		// listUserQuestionnaires();
	}, []);

	return (
		<div className="min-h-screen p-12 bg-color1">
			<h1 className="text-2xl font-bold mb-8 color5">My Questionnaires :</h1>
			<div className="flex flex-row gap-4 flex-wrap w-fit">
				{questionnaires.map((questionnaire) => (
					<QuestionnaireCard key={questionnaire.questionnaireId} questionnaire={questionnaire} />
				))}
				<button
					className="w-75 h-75 font-bold rounded flex items-center justify-center bg-color4 text-white px-5 py-2 cursor-pointer"
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
