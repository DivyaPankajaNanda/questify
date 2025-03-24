/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { create } from 'zustand';
import { Questionnaire } from '../interface';
import * as QuestionnaireAPI from '../api/questionnaireApi';

interface QuestionnairesStore {
	questionnaires: Questionnaire[];
	listUserQuestionnaires: () => Promise<void>;
	addQuestionnaire: (questionnaire: Questionnaire) => Promise<void>;
	updateQuestionnaire: (questionnaireId: string, updatedData: Partial<Questionnaire>) => Promise<void>;
	deleteQuestionnaire: (questionnaireId: string) => Promise<void>;
}

export const useQuestionnairesStore = create<QuestionnairesStore>((set) => ({
	questionnaires: [],

	listUserQuestionnaires: async () => {
		const data = await QuestionnaireAPI.listUserQuestionnaires();
		set({ questionnaires: data.questionnaires });
	},

	addQuestionnaire: async (questionnaire) => {
		await QuestionnaireAPI.createQuestionnaire(questionnaire.title, questionnaire.description as string);
		set((state) => ({
			questionnaires: [...state.questionnaires, questionnaire],
		}));
	},

	updateQuestionnaire: async (id, updates) => {
		await QuestionnaireAPI.updateQuestionnaire(id, updates.title as string, updates.description as string);
		set((state) => ({
			questionnaires: state.questionnaires.map((q) => (q.questionnaireId === id ? { ...q, ...updates } : q)),
		}));
	},

	deleteQuestionnaire: async (id) => {
		await QuestionnaireAPI.deleteQuestionnaire(id);
		set((state) => ({
			questionnaires: state.questionnaires.filter((q) => q.questionnaireId !== id),
		}));
	},
}));
