import { NextFunction, Request, Response } from 'express';
import { HTTP_STATUS } from '../utils/Constants.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const routeNotFoundHandler = (request: Request, response: Response, next: NextFunction) => {
	response.status(HTTP_STATUS.NOT_FOUND.statusCode).send(new ApiResponse(HTTP_STATUS.NOT_FOUND.statusCode, 'Route not found.'));
};
