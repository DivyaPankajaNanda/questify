import { useNavigate, useParams } from 'react-router';
import { QuestionForm } from '../components';
import { useState } from 'react';

const QuestionnaireForm = () => {
	const navigate = useNavigate();
	const { questionnaireId } = useParams<{ questionnaireId: string }>();
	const isEdit = questionnaireId != undefined;

	const [questions, setQuestions] = useState(['1', '2']);

	const createQuestionnaire = async () => {
		console.log('create questionnaire');
	};

	const editQuestionnaire = async () => {
		console.log('edit questionnaire');
	};

	const addQuestion = async () => {
		console.log('add question');
		setQuestions((state) => [...state, `${state.length}`]);
	};

	return (
		<div className="bg-amber-500 min-h-screen p-12">
			<div className="flex justify-between">
				<button
					onClick={() => {
						navigate(-1);
					}}
				>
					Back
				</button>
				{isEdit ? <button onClick={editQuestionnaire}>Edit</button> : <button onClick={createQuestionnaire}>Save</button>}
			</div>
			<div>
				<label htmlFor="name">Name : </label>
				<input type="text" id="name" name="name" />
			</div>
			<div>
				<label htmlFor="name">Description : </label>
				<input type="text" id="description" name="description" />
			</div>
			<div className="questions flex flex-col gap-3">
				{questions.map((question) => (
					<QuestionForm key={question} question={question} />
				))}
				<button onClick={addQuestion}>Add</button>
			</div>
		</div>
	);
};

export default QuestionnaireForm;
