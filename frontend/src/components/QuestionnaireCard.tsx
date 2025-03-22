/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useNavigate } from 'react-router';

const QuestionnaireCard = ({ questionnaire }: { questionnaire: { questionnaireId: string; title: string; description: string } }) => {
	const navigate = useNavigate();

	const openPreviewTab = () => {
		window.open(`/questionnaire/${questionnaire.questionnaireId}/preview`, '_blank', 'noopener,noreferrer');
	};

	return (
		<div className="bg-white rounded-lg border-4 border-solid border-black hover:border-green-400 p-4 flex flex-col gap-4 h-75 w-75">
			<div className="text-xl font-bold h-25 bg-red-500">{questionnaire.title}</div>
			<div className="h-40 bg-amber-400 scroll-auto">{questionnaire.description}</div>
			<div className="flex flex-row justify-center gap-2 h-15 bg-blue-400">
				<button
					onClick={() => {
						navigate(`/dashboard/questionnaire/${questionnaire.questionnaireId}/analytics`);
					}}
				>
					analytics
				</button>
				<button onClick={openPreviewTab}>view</button>
				<button>share</button>
				<button
					onClick={() => {
						navigate(`/dashboard/questionnaire/${questionnaire.questionnaireId}/edit`);
					}}
				>
					edit
				</button>
				<button>delete</button>
			</div>
		</div>
	);
};

export default QuestionnaireCard;
