import { z } from 'zod';

export const SignupRequestSchema = z
	.object({
		name: z.string().trim().min(1, { message: 'Name must have at least 1 character' }),
		email: z.string().trim().email({ message: 'Invalid email address' }),
		password: z.string().trim().min(1, { message: 'Password must have at least 1 character' }),
	})
	.strict();

export type SignupRequestType = z.infer<typeof SignupRequestSchema>;

export const SigninRequestSchema = z
	.object({
		email: z.string().trim().email({ message: 'Invalid email address' }),
		password: z.string().trim().min(1, { message: 'Password must have at least 1 character' }),
	})
	.strict();

export type SigninRequestType = z.infer<typeof SigninRequestSchema>;

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

export const CreateSubmissionRequestSchema = z
	.object({
		questionnaireId: z.string().trim().min(1, { message: 'Invalid questionnaireId.' }),
		email: z.string().trim().email({ message: 'Invalid email address' }),
		answers: z.array(
			z.object({
				questionId: z.string().trim().min(1, { message: 'Invalid questionId.' }),
				questionType: z.string().trim().min(1, { message: 'Invalid questionType.' }),
				answer: z.string().trim().min(1, { message: 'Answer must have at least 1 character' }),
			}),
		),
	})
	.strict();

export type CreateSubmissionRequestType = z.infer<typeof CreateSubmissionRequestSchema>;
