/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import mongoose, { Document, Schema } from 'mongoose';
import { IQuestionnaire } from '../../../../common/interfaces/IQuestionnaire.js';

export interface IQuestionnaireDocument extends IQuestionnaire, Document {}

const questionnaireSchema: Schema<IQuestionnaireDocument> = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'Questionnaire name is required.'],
		},
		description: {
			type: String,
			trim: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: [true, 'Questionnaire must have a creator.'],
		},
	},
	{
		timestamps: true,
		optimisticConcurrency: true,
		toObject: {
			virtuals: true,
		},
		toJSON: {
			virtuals: true,
			transform: (_doc, ret) => {
				delete ret._id;
				delete ret.__v;
				return ret;
			},
		},
		id: false,
	},
);

questionnaireSchema.virtual('questionnaireId').get(function () {
	const questionnaire = this as IQuestionnaireDocument;
	return String(questionnaire._id);
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);
export default Questionnaire;
