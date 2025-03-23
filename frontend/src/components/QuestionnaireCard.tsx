/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { SvgIcon, fileReportIcon, Tooltip, eyeIcon, pencilIcon, shareIcon, trashIcon } from '../components/kendo';
import { useNavigate } from 'react-router';

interface Questionnaire {
	questionnaireId: string;
	title: string;
	description: string;
	isPublished: boolean;
}

const QuestionnaireCard = ({ questionnaire }: { questionnaire: Questionnaire }) => {
	const navigate = useNavigate();

	const openPreviewTab = () => {
		window.open(`/questionnaire/${questionnaire.questionnaireId}/preview`, '_blank', 'noopener,noreferrer');
	};

	return (
		<div className="relative bg-white color5 rounded border-4 border-solid p-4 pt-8 flex flex-col gap-3 h-75 w-75 transition duration-100 questionnaireCard">
			<div className="absolute top-1 -right-1 bg-color4 text-white font-bold px-3 rounded-l-[1rem]">
				{questionnaire.isPublished ? 'Published' : 'Draft'}
			</div>
			<div className="text-xl font-bold h-25">{questionnaire.title}</div>
			<div className="h-40 scroll-auto">{questionnaire.description}</div>
			<div className="flex flex-row justify-center items-center gap-5 h-15">
				{/* Share */}
				{questionnaire.isPublished && (
					<Tooltip anchorElement="target" position="top" parentTitle={true}>
						<span className="inline-block" title="Share">
							<SvgIcon className="cursor-pointer" icon={shareIcon} size="xlarge" />
						</span>
					</Tooltip>
				)}

				{/* Analytics */}
				{questionnaire.isPublished && (
					<Tooltip anchorElement="target" position="top" parentTitle={true}>
						<span className="inline-block" title="Analytics">
							<SvgIcon
								className="cursor-pointer"
								icon={fileReportIcon}
								size="xlarge"
								onClick={() => {
									navigate(`/dashboard/questionnaire/${questionnaire.questionnaireId}/analytics`);
								}}
							/>
						</span>
					</Tooltip>
				)}

				{/* Preview */}
				<Tooltip anchorElement="target" position="top" parentTitle={true}>
					<span className="inline-block" title="Preview">
						<SvgIcon className="cursor-pointer" icon={eyeIcon} size="xlarge" onClick={openPreviewTab} />
					</span>
				</Tooltip>

				{/* Edit */}
				<Tooltip anchorElement="target" position="top" parentTitle={true}>
					<span className="inline-block" title="Edit">
						<SvgIcon
							className="cursor-pointer"
							icon={pencilIcon}
							size="xlarge"
							onClick={() => {
								navigate(`/dashboard/questionnaire/${questionnaire.questionnaireId}/edit`);
							}}
						/>
					</span>
				</Tooltip>

				{/* Delete */}
				<Tooltip anchorElement="target" position="top" parentTitle={true}>
					<span className="inline-block" title="Delete">
						<SvgIcon className="cursor-pointer" icon={trashIcon} size="xlarge" />
					</span>
				</Tooltip>
			</div>
		</div>
	);
};

export default QuestionnaireCard;
