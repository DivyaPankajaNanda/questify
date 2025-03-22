/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { Router } from 'express';
import { asyncHandler } from '../../../../common/middlewares/asyncHandler.js';
import { authenticationValidationHandler } from '../../../../common/middlewares/authenticationValidationHandler.js';
import { AnalyticsService } from '../services/AnalyticsService.js';
import { AnalyticsController } from '../controllers/AnalyticsController.js';
import { QuestionnaireService } from '../../../questionnaire/v1/services/QuestionnaireService.js';
import { SubmissionService } from '../../../submission/v1/services/SubmissionService.js';
import { SubmissionRepository } from '../../../submission/v1/repositories/SubmissionRepository.js';
import { QuestionnaireRepository } from '../../../questionnaire/v1/repositories/QuestionnaireRepository.js';

const analyticsController = new AnalyticsController(
	new AnalyticsService(new SubmissionService(new SubmissionRepository()), new QuestionnaireService(new QuestionnaireRepository())),
);

const router = Router();

router.get('/{questionnaireId}', authenticationValidationHandler, asyncHandler(analyticsController.getQuestionnaireAnalytics));

export default router;
