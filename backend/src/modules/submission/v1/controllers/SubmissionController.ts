import { Request, Response } from 'express';
import { ISubmissionService } from '../services/ISubmissionService.js';
import { HTTP_STATUS } from '../../../../common/utils/Constants.js';
import { ApiResponse } from '../../../../common/utils/ApiResponse.js';

export class SubmissionController {
	constructor(private submissionService: ISubmissionService) {}

	findByQuestionnaireId = async (request: Request, response: Response) => {
		const questionnaireId = request.params.questionnaireId;
		const submissions = await this.submissionService.findByQuestionnaireId(questionnaireId);

		response.status(HTTP_STATUS.OK.statusCode).send(new ApiResponse(HTTP_STATUS.OK.statusCode, HTTP_STATUS.OK.message, { submissions: submissions }));
	};

	create = async (request: Request, response: Response) => {
		const submission = request.body;
		const createdSubmission = await this.submissionService.create(submission);

		response
			.status(HTTP_STATUS.CREATED.statusCode)
			.send(new ApiResponse(HTTP_STATUS.CREATED.statusCode, HTTP_STATUS.CREATED.message, { submission: createdSubmission }));
	};
}
