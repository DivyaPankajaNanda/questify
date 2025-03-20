import { Request, Response } from 'express';
import { IQuestionnaireService } from '../services/IQuestionnaireService.js';
import { HTTP_STATUS } from '../../../../common/utils/Constants.js';
import { ApiResponse } from '../../../../common/utils/ApiResponse.js';

export class QuestionnaireController {
	constructor(private questionnaireService: IQuestionnaireService) {}

	create = async (request: Request, response: Response) => {
		const { name } = request.body;
		const userId = request.user?.userId;

		const questionnaire = await this.questionnaireService.create({ name: name, createdBy: userId });

		response
			.status(HTTP_STATUS.CREATED.statusCode)
			.send(new ApiResponse(HTTP_STATUS.CREATED.statusCode, HTTP_STATUS.CREATED.message, { questionnaire: questionnaire }));
	};

	findUserQuestionnaire = async (request: Request, response: Response) => {
		const questionnaireId = request.params.questionnaireId;
		const userId = request.user?.userId;

		const questionnaire = await this.questionnaireService.findById(questionnaireId);

		if (questionnaire.createdBy !== userId) {
			response.status(HTTP_STATUS.FORBIDDEN.statusCode).send(new ApiResponse(HTTP_STATUS.FORBIDDEN.statusCode, HTTP_STATUS.FORBIDDEN.message));
		}

		response
			.status(HTTP_STATUS.OK.statusCode)
			.send(new ApiResponse(HTTP_STATUS.OK.statusCode, HTTP_STATUS.OK.message, { questionnaire: questionnaire }));
	};

	listUserQuestionnaires = async (request: Request, response: Response) => {
		const userId = request.user?.userId;

		const questionnaires = await this.questionnaireService.findByUserId(userId as string);

		response
			.status(HTTP_STATUS.OK.statusCode)
			.send(new ApiResponse(HTTP_STATUS.OK.statusCode, HTTP_STATUS.OK.message, { questionnaires: questionnaires }));
	};

	update = async (request: Request, response: Response) => {
		const questionnaireId = request.params.questionnaireId;
		const userId = request.user?.userId;
		const { name } = request.body;

		const questionnaire = await this.questionnaireService.findById(questionnaireId);

		if (questionnaire.createdBy !== userId) {
			response.status(HTTP_STATUS.FORBIDDEN.statusCode).send(new ApiResponse(HTTP_STATUS.FORBIDDEN.statusCode, HTTP_STATUS.FORBIDDEN.message));
		}

		const updatedQuestionnaire = await this.questionnaireService.update(questionnaireId, { name: name });

		response
			.status(HTTP_STATUS.OK.statusCode)
			.send(new ApiResponse(HTTP_STATUS.OK.statusCode, HTTP_STATUS.OK.message, { questionnaire: updatedQuestionnaire }));
	};

	delete = async (request: Request, response: Response) => {
		const questionnaireId = request.params.questionnaireId;
		const userId = request.user?.userId;

		const questionnaire = await this.questionnaireService.findById(questionnaireId);

		if (questionnaire.createdBy !== userId) {
			response.status(HTTP_STATUS.FORBIDDEN.statusCode).send(new ApiResponse(HTTP_STATUS.FORBIDDEN.statusCode, HTTP_STATUS.FORBIDDEN.message));
		}

		await this.questionnaireService.delete(questionnaireId);

		response.status(HTTP_STATUS.OK.statusCode).send(new ApiResponse(HTTP_STATUS.NO_CONTENT.statusCode, HTTP_STATUS.NO_CONTENT.message));
	};
}
