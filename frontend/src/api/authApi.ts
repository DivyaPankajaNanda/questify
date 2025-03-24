/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { SigninRequestSchema, SignupRequestSchema } from '../validation/zod/schema';
import { getRequest, postRequest } from '../util/axios';

export const signin = async (email: string, password: string) => {
	try {
		const validation = SigninRequestSchema.safeParse({ email, password });

		if (!validation) return;

		const response = await postRequest(`/auth/signin`, { email, password });
		localStorage.setItem('accessToken', response.data.data.accessToken);
		return response;
	} catch (error: unknown) {
		console.log(error);
	}
};

export const signup = async (name: string, email: string, password: string) => {
	try {
		const validation = SignupRequestSchema.safeParse({ name, email, password });

		if (!validation.success) throw validation.error;

		const response = await postRequest(`/auth/signup`, { name, email, password });
		localStorage.setItem('accessToken', response.data.data.accessToken);
		return response;
	} catch (error: unknown) {
		console.log(error);
	}
};

export const signout = async () => {
	try {
		await postRequest(`/auth/signout`, {});
		localStorage.removeItem('accessToken');
	} catch (error: unknown) {
		console.log(error);
	}
};

export const me = async (): Promise<unknown> => {
	try {
		const response = await getRequest(`/auth/me`);
		return response.data.data.user;
	} catch (error: unknown) {
		console.log(error);
	}
};
