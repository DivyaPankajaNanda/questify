import { IAnalytics } from '../../../../common/interfaces/IAnalytics.js';

export interface IAnalyticsService {
	getQuestionnaireAnalytics(questionnaireId: string): Promise<Partial<IAnalytics>>;
}
