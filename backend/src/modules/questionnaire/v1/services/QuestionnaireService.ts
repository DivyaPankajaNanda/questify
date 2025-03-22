/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { IQuestionnaire } from '../../../../common/interfaces/IQuestionnaire.js';
import { IQuestionnaireRepository } from '../repositories/IQuestionnaireRepository.js';
import { IQuestionnaireService } from './IQuestionnaireService.js';

export class QuestionnaireService implements IQuestionnaireService {
	constructor(private questionnaireRepository: IQuestionnaireRepository) {}

	findById = async (questionnaireId: string): Promise<Partial<IQuestionnaire>> => {
		return await this.questionnaireRepository.findById(questionnaireId);
	};

	findByUserId = async (userId: string): Promise<Partial<IQuestionnaire>[]> => {
		return await this.questionnaireRepository.findByUserId(userId);
	};

	create = async (questionnaire: Partial<IQuestionnaire>): Promise<Partial<IQuestionnaire>> => {
		return await this.questionnaireRepository.create(questionnaire);
	};

	update = async (questionnaireId: string, updates: Partial<IQuestionnaire>): Promise<Partial<IQuestionnaire>> => {
		return await this.questionnaireRepository.update(questionnaireId, updates);
	};

	delete = async (questionnaireId: string): Promise<boolean> => {
		return await this.questionnaireRepository.delete(questionnaireId);
	};
}
