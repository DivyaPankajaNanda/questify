/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { Router } from 'express';
import { requestValidationHandler } from '../../../../common/middlewares/requestValidationHandler.js';
import { asyncHandler } from '../../../../common/middlewares/asyncHandler.js';
import { CreateSubmissionRequestSchema } from '../validation/zod/schema.js';
import { SubmissionController } from '../controllers/SubmissionController.js';
import { SubmissionService } from '../services/SubmissionService.js';
import { SubmissionRepository } from '../repositories/SubmissionRepository.js';

const submissionController = new SubmissionController(new SubmissionService(new SubmissionRepository()));

const router = Router();
router.get('/{questionnaireId}', asyncHandler(submissionController.findByQuestionnaireId));
router.post('/', requestValidationHandler({ bodySchema: CreateSubmissionRequestSchema }), asyncHandler(submissionController.create));

export default router;
