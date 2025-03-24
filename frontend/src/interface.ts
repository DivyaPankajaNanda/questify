/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

export interface Questionnaire {
	questionnaireId?: string;
	title: string;
	description?: string;
	createdAt: Date;
	questions: Question[];
	isPublished: boolean;
}

export interface Question {
	questionId?: string;
	text: string;
	type: QuestionType;
	options?: string[];
	correctAnswers?: string[];
}

export type QuestionType = 'multiple-choice' | 'single-choice' | 'number' | 'rating' | 'text';

export interface Option {
	optionId: string;
	text: string;
	score: number;
}

export interface MultipleChoiceQuestion extends Question {
	type: 'multiple-choice';
}

export interface SingleChoiceQuestion extends Question {
	type: 'single-choice';
}

export interface NumberQuestion extends Question {
	type: 'number';
	minValue?: number;
	maxValue?: number;
}

export interface RatingQuestion extends Question {
	type: 'rating';
	scale: number;
}

export interface TextQuestion extends Question {
	type: 'text';
	maxLength?: number;
}
