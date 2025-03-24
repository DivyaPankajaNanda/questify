/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { CreateQuestionnaireRequestSchema, UpdateQuestionnaireRequestSchema } from '../validation/zod/schema';
import { getRequest, postRequest, patchRequest, deleteRequest } from '../util/axios';

export const createQuestionnaire = async (title: string, description: string) => {
	try {
		const validation = CreateQuestionnaireRequestSchema.safeParse({ title, description });

		if (!validation.success) throw validation.error;

		const response = await postRequest(`/questionnaire`, { title, description });
		return response.data;
	} catch (error: unknown) {
		console.log(error);
	}
};

export const getQuestionnaire = async (questionnaireId: string) => {
	try {
		const response = await getRequest(`/questionnaire/${questionnaireId}`);
		return response.data.data.questionnaire;
	} catch (error: unknown) {
		console.log(error);
	}
};

export const getUserQuestionnaire = async (questionnaireId: string) => {
	try {
		const response = await getRequest(`/questionnaire/user/${questionnaireId}`);
		return response.data.data.questionnaire;
	} catch (error: unknown) {
		console.log(error);
	}
};

export const listUserQuestionnaires = async () => {
	try {
		const response = await getRequest(`/questionnaire`);
		return response.data.data.questionnaires;
	} catch (error: unknown) {
		console.log(error);
	}
};

export const updateQuestionnaire = async (id: string, title: string, description: string) => {
	try {
		const validation = UpdateQuestionnaireRequestSchema.safeParse({ title, description });

		if (!validation.success) throw validation.error;

		const response = await patchRequest(`/questionnaire`, { id, title, description });
		return response.data;
	} catch (error: unknown) {
		console.log(error);
	}
};

export const deleteQuestionnaire = async (questionnaireId: string) => {
	try {
		const response = await deleteRequest(`/questionnaire/${questionnaireId}`);
		return response;
	} catch (error: unknown) {
		console.log(error);
	}
};
