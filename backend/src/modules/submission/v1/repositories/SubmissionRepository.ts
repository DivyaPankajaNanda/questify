import { ISubmission } from '../../../../common/interfaces/ISubmission.js';
import SubmissionModel from '../models/SubmissionModel.js';
import { ISubmissionRepository } from './ISubmissionRepository.js';

export class SubmissionRepository implements ISubmissionRepository {
	create = async (submission: Partial<ISubmission>): Promise<Partial<ISubmission>> => {
		const createdSubmission = new SubmissionModel(submission);
		return await createdSubmission.save();
	};

	findByQuestionnaireId = async (questionnaireId: string): Promise<Partial<ISubmission>[]> => {
		const submissions = await SubmissionModel.find({ questionnaireId }).exec();
		return submissions;
	};
}
