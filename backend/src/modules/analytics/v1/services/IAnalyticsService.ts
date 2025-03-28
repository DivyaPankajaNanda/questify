/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { IAnalytics } from '../../../../common/interfaces/IAnalytics.js';

export interface IAnalyticsService {
	getQuestionnaireAnalytics(userId: string, questionnaireId: string): Promise<Partial<IAnalytics>>;
}
