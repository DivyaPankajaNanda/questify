/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { IQuestionnaire } from '../../../../common/interfaces/IQuestionnaire.js';
import { IQuestionnaireRepository } from './IQuestionnaireRepository.js';
import QuestionnaireModel from '../models/QuestionnaireModel.js';
import { ERROR_CODES } from '../../../../common/utils/Constants.js';
import { CustomException } from '../../../../common/exceptions/CustomException.js';

export class QuestionnaireRepository implements IQuestionnaireRepository {
	constructor() {}

	findById = async (questionnaireId: string): Promise<IQuestionnaire> => {
		const questionnaire = await QuestionnaireModel.findById(questionnaireId).exec();

		if (questionnaire == null) throw new CustomException({ errorCodeObject: ERROR_CODES.QUESTIONNAIRE_NOT_FOUND });

		return questionnaire;
	};

	findByUserId = async (userId: string): Promise<Partial<IQuestionnaire>[]> => {
		const userQuestionnaires = await QuestionnaireModel.find({ userId }).exec();
		return userQuestionnaires;
	};

	create = async (questionnaire: Partial<IQuestionnaire>): Promise<Partial<IQuestionnaire>> => {
		const newQuestionnaire = new QuestionnaireModel(questionnaire);
		return await newQuestionnaire.save();
	};

	update = async (questionnaireId: string, updates: Partial<IQuestionnaire>): Promise<Partial<IQuestionnaire>> => {
		const updatedQuestionnaire = await QuestionnaireModel.findByIdAndUpdate(questionnaireId, updates, { new: true }).exec();

		if (updatedQuestionnaire == null) throw new CustomException({ errorCodeObject: ERROR_CODES.QUESTIONNAIRE_NOT_FOUND });

		return updatedQuestionnaire;
	};

	delete = async (questionnaireId: string): Promise<boolean> => {
		const result = await QuestionnaireModel.findByIdAndDelete(questionnaireId);
		return result != null;
	};
}
