/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { Request, Response } from 'express';
import { IAnalyticsService } from '../services/IAnalyticsService.js';
import { HTTP_STATUS } from '../../../../common/utils/Constants.js';
import { ApiResponse } from '../../../../common/utils/ApiResponse.js';

export class AnalyticsController {
	constructor(private analyticsService: IAnalyticsService) {}

	getQuestionnaireAnalytics = async (request: Request, response: Response) => {
		const questionnaireId = request.params.questionnaireId;
		const userId = request.user?.userId;

		const analytics = await this.analyticsService.getQuestionnaireAnalytics(userId as string, questionnaireId);

		response.status(HTTP_STATUS.OK.statusCode).send(new ApiResponse(HTTP_STATUS.OK.statusCode, HTTP_STATUS.OK.message, { analytics: analytics }));
	};
}
