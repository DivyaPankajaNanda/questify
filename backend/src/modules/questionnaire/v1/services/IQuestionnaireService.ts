/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { IQuestionnaire } from '../../../../common/interfaces/IQuestionnaire.js';

export interface IQuestionnaireService {
	findById(questionnaireId: string): Promise<Partial<IQuestionnaire>>;
	findByUserId(userId: string): Promise<Partial<IQuestionnaire>[]>;
	create(questionnaire: Partial<IQuestionnaire>): Promise<Partial<IQuestionnaire>>;
	update(questionnaireId: string, updates: Partial<IQuestionnaire>): Promise<Partial<IQuestionnaire>>;
	delete(questionnaireId: string): Promise<boolean>;
}
