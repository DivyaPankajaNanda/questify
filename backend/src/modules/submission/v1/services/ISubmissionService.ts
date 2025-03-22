/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { ISubmission } from '../../../../common/interfaces/ISubmission.js';

export interface ISubmissionService {
	findByQuestionnaireId(questionnaireId: string): Promise<Partial<ISubmission>[]>;
	create(submission: Partial<ISubmission>): Promise<Partial<ISubmission>>;
}
