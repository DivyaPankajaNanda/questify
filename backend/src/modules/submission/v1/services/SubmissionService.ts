/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { ISubmission } from '../../../../common/interfaces/ISubmission.js';
import { ISubmissionRepository } from '../repositories/ISubmissionRepository.js';
import { ISubmissionService } from './ISubmissionService.js';

export class SubmissionService implements ISubmissionService {
	constructor(private submissionRepository: ISubmissionRepository) {}

	create = async (submission: Partial<ISubmission>): Promise<Partial<ISubmission>> => {
		return await this.submissionRepository.create(submission);
	};

	findByQuestionnaireId = async (questionnaireId: string): Promise<Partial<ISubmission>[]> => {
		return await this.submissionRepository.findByQuestionnaireId(questionnaireId);
	};
}
