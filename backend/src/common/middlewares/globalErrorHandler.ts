import { NextFunction, Request, Response } from 'express';
import { CustomException } from '../exceptions/CustomException.js';
import { ERROR_CODES } from '../utils/Constants.js';
import { ZodError } from 'zod';
import multer from 'multer';
import Logger from '../utils/Logger.js';
import { uploadedFilesCleanup } from '../utils/FilesCleanupUtil.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const globalErrorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
	let errorObject: CustomException;

	Logger.getInstance().error(`${error.toString()}.${error.error ? error.error.toString() : ''}`);

	if (error instanceof CustomException) errorObject = error;
	else {
		if (error instanceof ZodError)
			errorObject = new CustomException({
				errorCodeObject: ERROR_CODES.BAD_REQUEST,
				customMessage: error.message || ERROR_CODES.BAD_REQUEST.message,
				error: error,
			});
		else if (error instanceof multer.MulterError)
			errorObject = new CustomException({
				errorCodeObject: ERROR_CODES.BAD_REQUEST,
				customMessage: error.message || ERROR_CODES.BAD_REQUEST.message,
				error: error,
			});
		else
			errorObject = new CustomException({
				errorCodeObject: ERROR_CODES.INTERNAL_SERVER_ERROR,
				customMessage: error.message || ERROR_CODES.INTERNAL_SERVER_ERROR.message,
				error: error,
			});
	}

	// Uploaded file cleanup
	uploadedFilesCleanup(request);

	response.status(errorObject.statusCode).json(errorObject);
};
