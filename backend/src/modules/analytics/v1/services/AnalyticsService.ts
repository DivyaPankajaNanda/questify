import { CustomException } from '../../../../common/exceptions/CustomException.js';
import { IAnalytics } from '../../../../common/interfaces/IAnalytics.js';
import { ERROR_CODES } from '../../../../common/utils/Constants.js';
import { IQuestionnaireRepository } from '../../../questionnaire/v1/repositories/IQuestionnaireRepository.js';
import { ISubmissionRepository } from '../../../submission/v1/repositories/ISubmissionRepository.js';
import { IAnalyticsService } from './IAnalyticsService.js';

export class AnalyticsService implements IAnalyticsService {
	constructor(
		private submissionRepository: ISubmissionRepository,
		private questionnaireRepository: IQuestionnaireRepository,
	) {}

	async getQuestionnaireAnalytics(questionnaireId: string): Promise<Partial<IAnalytics>> {
		const questionnaire = await this.questionnaireRepository.findById(questionnaireId);
		if (!questionnaire) {
			throw new CustomException({ errorCodeObject: ERROR_CODES.QUESTIONNAIRE_NOT_FOUND });
		}

		const submissions = await this.submissionRepository.findByQuestionnaireId(questionnaireId);
		return {
			questionnaireId,
			totalSubmissions: submissions.length,
		};
	}
}
