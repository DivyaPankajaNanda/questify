/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { Router } from 'express';
import { requestValidationHandler } from '../../../../common/middlewares/requestValidationHandler.js';
import { asyncHandler } from '../../../../common/middlewares/asyncHandler.js';
import { authenticationValidationHandler } from '../../../../common/middlewares/authenticationValidationHandler.js';
import { CreateQuestionnaireRequestSchema, UpdateQuestionnaireRequestSchema } from '../validation/zod/schema.js';
import { QuestionnaireController } from '../controllers/QuestionnaireController.js';
import { QuestionnaireService } from '../services/QuestionnaireService.js';
import { QuestionnaireRepository } from '../repositories/QuestionnaireRepository.js';

const questionnaireController = new QuestionnaireController(new QuestionnaireService(new QuestionnaireRepository()));

const router = Router();
router.get('/{questionnaireId}', authenticationValidationHandler, asyncHandler(questionnaireController.findUserQuestionnaire));
router.get('/', authenticationValidationHandler, asyncHandler(questionnaireController.listUserQuestionnaires));
router.post(
	'/',
	requestValidationHandler({ bodySchema: CreateQuestionnaireRequestSchema }),
	authenticationValidationHandler,
	asyncHandler(questionnaireController.create),
);
router.patch(
	'/',
	requestValidationHandler({ bodySchema: UpdateQuestionnaireRequestSchema }),
	authenticationValidationHandler,
	asyncHandler(questionnaireController.update),
);
router.delete('/{questionnaireId}', authenticationValidationHandler, asyncHandler(questionnaireController.delete));

export default router;
