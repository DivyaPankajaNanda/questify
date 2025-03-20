import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';
import { CustomException } from '../exceptions/CustomException.js';
import { ERROR_CODES } from '../utils/Constants.js';

export const requestValidationHandler = ({
	paramSchema,
	querySchema,
	bodySchema,
	fileSchema,
}: {
	paramSchema?: ZodSchema;
	querySchema?: ZodSchema;
	bodySchema?: ZodSchema;
	fileSchema?: ZodSchema;
}) => {
	return async (request: Request, response: Response, next: NextFunction) => {
		try {
			paramSchema?.parse(request.params);
			querySchema?.parse(request.query);
			bodySchema?.parse(request.body);
			fileSchema?.parse(request.files ? request.files : request.file);
			return next();
		} catch (error) {
			return next(new CustomException({ errorCodeObject: ERROR_CODES.BAD_REQUEST, customMessage: 'Validation Error.', error: error }));
		}
	};
};
