import { IQuestionnaire } from '../../../../common/interfaces/IQuestionnaire.js';

export interface IQuestionnaireRepository {
	findById(questionnaireId: string): Promise<Partial<IQuestionnaire>>;
	findByUserId(userId: string): Promise<Partial<IQuestionnaire>[]>;
	create(questionnaire: Partial<IQuestionnaire>): Promise<Partial<IQuestionnaire>>;
	update(questionnaireId: string, updates: Partial<IQuestionnaire>): Promise<Partial<IQuestionnaire>>;
	delete(questionnaireId: string): Promise<boolean>;
}
