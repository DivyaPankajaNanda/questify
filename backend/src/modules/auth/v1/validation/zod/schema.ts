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
