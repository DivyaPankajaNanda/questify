/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import * as QuestionnaireAPI from '../api/questionnaireApi';

const QuestionnaireAnalytics = () => {
	const navigate = useNavigate();

	const { questionnaireId } = useParams<{ questionnaireId: string }>();

	useEffect(() => {
		const fetchQuestionnaire = async () => {
			await QuestionnaireAPI.getUserQuestionnaire(questionnaireId as string);
		};
		fetchQuestionnaire();
	}, []);

	return (
		<div className="bg-color1 color5 min-h-screen p-12">
			<div className="flex justify-between">
				<button
					onClick={() => {
						navigate(-1);
					}}
				>
					Back
				</button>
			</div>
			<div>QuestionnaireAnalytics {questionnaireId}</div>
		</div>
	);
};

export default QuestionnaireAnalytics;
