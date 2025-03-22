/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useNavigate, useParams } from 'react-router';

const QuestionnaireAnalytics = () => {
	const navigate = useNavigate();

	const { questionnaireId } = useParams<{ questionnaireId: string }>();

	return (
		<div className="bg-amber-700 min-h-screen p-12">
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
