import { z } from 'zod';

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
