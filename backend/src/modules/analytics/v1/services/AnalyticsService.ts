import { CustomException } from '../../../../common/exceptions/CustomException.js';
import { IAnalytics } from '../../../../common/interfaces/IAnalytics.js';
import { ERROR_CODES } from '../../../../common/utils/Constants.js';
import { IQuestionnaireService } from '../../../questionnaire/v1/services/IQuestionnaireService.js';
import { ISubmissionService } from '../../../submission/v1/services/ISubmissionService.js';
import { IAnalyticsService } from './IAnalyticsService.js';

export class AnalyticsService implements IAnalyticsService {
	constructor(
		private submissionService: ISubmissionService,
		private questionnaireService: IQuestionnaireService,
	) {}

	async getQuestionnaireAnalytics(userId: string, questionnaireId: string): Promise<Partial<IAnalytics>> {
		const questionnaire = await this.questionnaireService.findById(questionnaireId);

		if (questionnaire && questionnaire.createdBy != userId) throw new CustomException({ errorCodeObject: ERROR_CODES.USER_FORBIDDEN });

		if (!questionnaire) throw new CustomException({ errorCodeObject: ERROR_CODES.QUESTIONNAIRE_NOT_FOUND });

		const submissions = await this.submissionService.findByQuestionnaireId(questionnaireId);
		return {
			questionnaireId,
			totalSubmissions: submissions.length,
		};
	}
}
