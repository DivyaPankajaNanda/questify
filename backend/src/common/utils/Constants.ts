import { ErrorCodeType, HttpStatusType } from '../types/index.js';

export const HTTP_STATUS: Record<string, HttpStatusType> = {
	SUCCESS: {
		statusCode: 200,
		message: 'Success',
	},
	CREATED: {
		statusCode: 201,
		message: 'Created',
	},
	ACCEPTED: {
		statusCode: 202,
		message: 'Accepted',
	},
	NO_CONTENT: {
		statusCode: 204,
		message: 'No Content',
	},
	BAD_REQUEST: {
		statusCode: 400,
		message: 'Bad Request',
	},
	UNAUTHORIZED: {
		statusCode: 401,
		message: 'Unauthorized',
	},
	FORBIDDEN: {
		statusCode: 403,
		message: 'Forbidden',
	},
	NOT_FOUND: {
		statusCode: 404,
		message: 'Not Found',
	},
	INTERNAL_SERVER_ERROR: {
		statusCode: 500,
		message: 'Internal Server Error',
	},
};

export const ERROR_CODES: Record<string, ErrorCodeType> = {
	USER_UNAUTHORIZED: {
		statusCode: HTTP_STATUS.UNAUTHORIZED.statusCode,
		errorCode: 1000,
		message: 'User is unauthorized.',
	},
	USER_ALREADY_EXISTS: {
		statusCode: HTTP_STATUS.BAD_REQUEST.statusCode,
		errorCode: 1001,
		message: 'User already exists.',
	},
	USER_NOT_FOUND: {
		statusCode: HTTP_STATUS.NOT_FOUND.statusCode,
		errorCode: 1002,
		message: 'User not found.',
	},
	USER_FORBIDDEN: {
		statusCode: HTTP_STATUS.FORBIDDEN.statusCode,
		errorCode: 1003,
		message: 'User is forbidden.',
	},
	INVALID_CREDENTIALS: {
		statusCode: HTTP_STATUS.BAD_REQUEST.statusCode,
		errorCode: 1004,
		message: 'Invalid credentials.',
	},
	QUESTIONNAIRE_NOT_FOUND: {
		statusCode: HTTP_STATUS.NOT_FOUND.statusCode,
		errorCode: 2000,
		message: 'Questionnaire not found.',
	},
	SUBMISSION_NOT_FOUND: {
		statusCode: HTTP_STATUS.NOT_FOUND.statusCode,
		errorCode: 3000,
		message: 'Submission not found.',
	},
	BAD_REQUEST: {
		statusCode: HTTP_STATUS.BAD_REQUEST.statusCode,
		errorCode: 4000,
		message: 'Invalid request.',
	},
	INTERNAL_SERVER_ERROR: {
		statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode,
		errorCode: 5000,
		message: 'Internal Server Error.',
	},
	DATABASE_CONNECTION_FAILED: {
		statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode,
		errorCode: 6000,
		message: 'Database connection failed.',
	},
	AXIOS_ERROR: {
		statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode,
		errorCode: 7000,
		message: 'Internal service communication error.',
	},
	ROUTE_NOT_FOUND: {
		statusCode: HTTP_STATUS.NOT_FOUND.statusCode,
		errorCode: 8000,
		message: 'Route not found.',
	},
	RESOURCE_NOT_FOUND: {
		statusCode: HTTP_STATUS.NOT_FOUND.statusCode,
		errorCode: 9000,
		message: 'Resource not found.',
	},
	JWT_EXPIRED: {
		statusCode: HTTP_STATUS.UNAUTHORIZED.statusCode,
		errorCode: 10000,
		message: 'Token expired.',
	},
};
