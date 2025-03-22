/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

export interface IQuestion {
	questionId: string;
	question: string;
	options: string[];
	correctAnswer: string;
	score?: number;
	createdAt?: Date;
	updatedAt?: Date;
}
