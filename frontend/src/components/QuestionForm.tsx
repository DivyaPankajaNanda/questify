import { useState } from 'react';

const QuestionForm = ({ question }) => {
	const [isHidden, setIsHidden] = useState(true);
	const [options, setOptions] = useState<string[]>([]);

	const addOption = () => {
		console.log(`add question option`);
		const newOption = `new option`;
		setOptions((options) => [...options, newOption]);
	};

	const deleteOption = (optionId: number) => {
		console.log(`delete question option`);
		setOptions((options) => options.filter((_, index) => index !== optionId));
	};

	return (
		<div className="bg-white rounded-lg border-4 border-solid border-black">
			<div
				className="p-4 flex flex-row justify-between gap-2 bg-blue-300 cursor-pointer"
				onClick={() => {
					setIsHidden((status) => !status);
				}}
			>
				<div>Question :</div>
				<div>{isHidden ? 'down' : 'up'}</div>
			</div>
			<div className={`p-2 transition ease-in ${isHidden ? 'hidden' : 'block'}`}>
				<div>Question Text :</div>
				<div>
					<input type="text" name="question" id="question" />
				</div>
				<div>Options :</div>
				<div className={`p-4 flex flex-col gap-2 bg-green-500`}>
					{options.map((option, index) => (
						<div key={index} className="flex justify-between">
							<input type="text" name="option" id="option" value={option} />
							<button onClick={() => deleteOption(index)}>Delete</button>
						</div>
					))}
					<button onClick={addOption}>Add</button>
				</div>
			</div>
		</div>
	);
};

export default QuestionForm;
