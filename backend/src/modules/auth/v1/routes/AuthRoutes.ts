import { Router } from 'express';
import { AuthController } from '../controllers/AuthController.js';
import { AuthService } from '../services/AuthService.js';
import { requestValidationHandler } from '../../../../common/middlewares/requestValidationHandler.js';
import { asyncHandler } from '../../../../common/middlewares/asyncHandler.js';
import { SigninRequestSchema, SignupRequestSchema } from '../validation/zod/schema.js';
import { authenticationValidationHandler } from '../../../../common/middlewares/authenticationValidationHandler.js';
import { UserRepository } from '../repositories/UserRepository.js';

const authController = new AuthController(new AuthService(new UserRepository()));

const router = Router();
router.post('/signup', requestValidationHandler({ bodySchema: SignupRequestSchema }), asyncHandler(authController.signup));
router.post('/signin', requestValidationHandler({ bodySchema: SigninRequestSchema }), asyncHandler(authController.signin));
router.post('/signout', authenticationValidationHandler(), asyncHandler(authController.signout));
router.post('/refresh-token', asyncHandler(authController.refreshToken));

export default router;
