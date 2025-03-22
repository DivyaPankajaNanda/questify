/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { z } from 'zod';

export const CreateQuestionnaireRequestSchema = z
	.object({
		name: z.string().trim().min(1, { message: 'Questionnaire name must have at least 1 character' }),
	})
	.strict();

export type CreateQuestionnaireRequestType = z.infer<typeof CreateQuestionnaireRequestSchema>;

export const UpdateQuestionnaireRequestSchema = z
	.object({
		name: z.string().trim().min(1, { message: 'Questionnaire name must have at least 1 character' }).optional(),
	})
	.strict();

export type UpdateQuestionnaireRequestType = z.infer<typeof UpdateQuestionnaireRequestSchema>;
