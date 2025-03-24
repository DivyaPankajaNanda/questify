/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

// /*
// 	Author : Divya Pankaja Nanda
// 	Github : https://github.com/DivyaPankajaNanda
// */

// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router';
// import { QuestionForm } from '../components';
import { Button, Input, Label } from '../components/kendo';
// import * as QuestionnaireAPI from '../api/questionnaireApi';
// import { Questionnaire } from '../interface';

// const QuestionnaireForm = () => {
// 	const navigate = useNavigate();
// 	const { questionnaireId } = useParams<{ questionnaireId: string }>();
// 	const isEdit = questionnaireId != undefined;
// 	const [questionnaire, setQuestionnaire] = useState<Questionnaire>({
// 		title: '',
// 		description: '',
// 		questions: [],
// 	});

// 	const createQuestionnaire = async () => {
// 		console.log('create questionnaire');
// 	};

// 	const editQuestionnaire = async () => {
// 		console.log('edit questionnaire');
// 	};

// 	const addQuestion = () => {
// 		setQuestionnaire((prev) => ({
// 			...prev,
// 			questions: [...prev.questions, `Question ${prev.questions.length + 1}`],
// 		}));
// 	};

// 	useEffect(() => {
// 		const fetchQuestionnaire = async () => {
// 			if (isEdit) {
// 				try {
// 					const data = await QuestionnaireAPI.getQuestionnaire(questionnaireId);
// 					setQuestionnaire(data);
// 				} catch (error) {
// 					console.error('Failed to fetch questionnaire', error);
// 				}
// 			}
// 		};
// 		fetchQuestionnaire();
// 	}, []);

// 	return (
// 		<div className="bg-color1 color5 min-h-screen p-12">
// 			<div className="flex justify-between mb-6">
// 				<Button
// 					onClick={() => {
// 						navigate(-1);
// 					}}
// 				>
// 					Back
// 				</Button>
// 				{isEdit ? <Button onClick={editQuestionnaire}>Edit</Button> : <Button onClick={createQuestionnaire}>Save</Button>}
// 			</div>
// 			<div className="mb-5">
// 				<Label className="text-xl font-bold">Title : </Label>
// 				<Input
// 					className="p-2 w-full rounded customInput border-b-lg bg-white h-10"
// 					type="text"
// 					id="title"
// 					name="title"
// 					value={isEdit ? questionnaire.title : ''}
// 				/>
// 			</div>
// 			<div className="mb-5">
// 				<Label className="text-xl font-bold">Description : </Label>
// 				<Input className="p-2 w-full rounded  customInput border-b-lg  bg-white h-10" type="text" id="description" name="description" />
// 			</div>
// 			<div className="questions flex flex-col gap-3">
// 				{questions.map((question) => (
// 					<QuestionForm key={question} question={question} />
// 				))}
// 				<button
// 					className="h-15 font-bold rounded flex items-center justify-center bg-color4 text-white px-5 py-2 cursor-pointer rounded border-4 border-solid border-transparent"
// 					onClick={addQuestion}
// 				>
// 					Add
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default QuestionnaireForm;

/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { useNavigate, useParams } from 'react-router';
import { QuestionForm } from '../components';
import { useEffect, useState } from 'react';
import { dummy_questionnaires } from '../api/dummy-content';

const QuestionnaireForm = () => {
	const navigate = useNavigate();
	const { questionnaireId } = useParams<{ questionnaireId: string }>();
	const isEdit = questionnaireId != undefined;

	const [questions, setQuestions] = useState<
		{
			questionId: string;
			text: string;
			type: string;
			options?: { optionId: string; value: string }[];
			scale?: number;
			range?: number;
		}[]
	>([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};

	const createQuestionnaire = async () => {
		console.log('create questionnaire');
	};

	const editQuestionnaire = async () => {
		console.log('edit questionnaire');
	};

	const addQuestion = async () => {
		setQuestions((prevQuestions) => [
			...prevQuestions,
			{
				questionId: `q${prevQuestions.length + 1}`,
				text: `Question ${prevQuestions.length + 1}`,
				type: 'multiple-choice',
				options: [
					{ optionId: `o1`, value: 'Option 1' },
					{ optionId: `o2`, value: 'Option 2' },
				],
			},
		]);
	};

	useEffect(() => {
		if (isEdit) {
			const questionnaire = dummy_questionnaires.find((q) => q.questionnaireId === questionnaireId);

			if (questionnaire) {
				setTitle(questionnaire.title);
				setDescription(questionnaire.description);
				setQuestions(questionnaire.questions);
			}
		}
	}, []);

	return (
		<div className="bg-color1 color5 min-h-screen p-12">
			<div className="flex justify-between mb-6">
				<Button
					onClick={() => {
						navigate(-1);
					}}
				>
					Back
				</Button>
				{isEdit ? <Button onClick={editQuestionnaire}>Edit</Button> : <Button onClick={createQuestionnaire}>Save</Button>}
			</div>

			<div className="mb-5">
				<Label className="text-xl font-bold">Title : </Label>
				<Input
					className="p-2 w-full rounded customInput border-b-lg bg-white h-10"
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={handleTitleChange}
				/>
			</div>
			<div className="mb-5">
				<Label className="text-xl font-bold">Description : </Label>
				<Input
					className="p-2 w-full rounded  customInput border-b-lg  bg-white h-10"
					type="text"
					id="description"
					name="description"
					value={description}
					onChange={handleDescriptionChange}
				/>
			</div>
			<div className="questions flex flex-col gap-3">
				{questions.map((question) => (
					<QuestionForm key={question} question={question} />
				))}
				<button
					className="h-15 font-bold rounded flex items-center justify-center bg-transparent color5 text-white px-5 py-2 cursor-pointer rounded border-4 border-solid "
					style={{ borderColor: 'var(--questify-color5)' }}
					onClick={addQuestion}
				>
					Add Question
				</button>
			</div>
		</div>
	);
};

export default QuestionnaireForm;
