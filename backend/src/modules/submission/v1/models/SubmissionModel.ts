/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import mongoose, { Document, Schema } from 'mongoose';
import { ISubmission } from '../../../../common/interfaces/ISubmission.js';

export interface ISubmissionDocument extends ISubmission, Document {}

const submissionSchema: Schema<ISubmissionDocument> = new Schema(
	{
		questionnaireId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Questionnaire',
			required: [true, 'Submission must have a questionnaireId.'],
		},
		email: {
			type: String,
			required: [true, 'Submission must have an email.'],
		},
		answers: {
			type: [
				{
					questionId: { type: String, required: true },
					questionType: { type: String, required: true },
					answer: { type: String, required: true },
				},
			],
			required: [true, 'Submission must have answers.'],
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

submissionSchema.virtual('submissionId').get(function () {
	const submission = this as ISubmissionDocument;
	return String(submission._id);
});

const Submission = mongoose.model('Submission', submissionSchema);
export default Submission;
