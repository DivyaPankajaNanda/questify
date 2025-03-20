import mongoose from 'mongoose';
// import { QuestionnaireType } from '../enum/QuestionnaireType.js';

export interface IQuestionnaire {
	questionnaireId: string;
	name: string;
	description?: string;
	// type: QuestionnaireType;
	// details?: object;
	// questions: string[];
	createdBy: mongoose.Schema.Types.ObjectId | string;
	createdAt?: Date;
	updatedAt?: Date;
	// isPublished: boolean;
	// publishedAt?: Date;
	// expiredAt?: Date;
}
