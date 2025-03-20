/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { Request, Response, NextFunction } from 'express';
import { CustomException } from '../exceptions/CustomException.js';
import { ERROR_CODES } from '../utils/Constants.js';

export const asyncHandler = (requestHandlerFunction: Function) => {
	return async (request: Request, response: Response, next: NextFunction) => {
		try {
			await requestHandlerFunction(request, response, next);
		} catch (error: any) {
			if (error instanceof CustomException) return next(error);
			else return next(new CustomException({ errorCodeObject: ERROR_CODES.INTERNAL_SERVER_ERROR, error: error }));
		}
	};
};
