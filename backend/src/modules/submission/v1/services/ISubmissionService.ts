export interface ISubmissionService {
	findByQuestionnaireId(questionnaireId: string): Promise<Partial<ISubmission>[]>;
	create(submission: Partial<ISubmission>): Promise<Partial<ISubmission>>;
}
