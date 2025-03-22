/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { ISubmission } from '../../../../common/interfaces/ISubmission.js';

export interface ISubmissionRepository {
	create(submission: Partial<ISubmission>): Promise<Partial<ISubmission>>;
	findByQuestionnaireId(questionnaireId: string): Promise<Partial<ISubmission>[]>;
}
