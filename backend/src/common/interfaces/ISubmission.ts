/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import mongoose from 'mongoose';

export interface ISubmission {
	questionnaireId: mongoose.Schema.Types.ObjectId | string;
	email: string;
	answers: {
		questionId: string;
		questionType: string;
		answer: string;
	}[];
	createdAt?: Date;
}
