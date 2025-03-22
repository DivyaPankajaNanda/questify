/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from '../../config/config.js';
import { ErrorCodeType } from '../types/index.js';

type CustomExceptionArgumentType = {
	errorCodeObject: ErrorCodeType;
	customMessage?: string;
	error?: any;
	stack?: string;
};

export class CustomException extends Error {
	statusCode: number;
	errorCode: number;
	success: boolean;
	error: any;

	constructor({ errorCodeObject, customMessage, error, stack }: CustomExceptionArgumentType) {
		super(customMessage ? customMessage : errorCodeObject.message);
		this.statusCode = errorCodeObject.statusCode;
		this.success = false;
		this.errorCode = errorCodeObject.errorCode;
		if (error) this.error = error;

		if (stack !== '') this.stack = stack;
		else Error.captureStackTrace(this, this.constructor);
	}

	toJSON = () => {
		return {
			statusCode: this.statusCode,
			errorCode: this.errorCode,
			success: this.success,
			message: this.message,
			...(!config.PRODUCTION_ENVIRONMENT && { error: this.error }),
			...(!config.PRODUCTION_ENVIRONMENT && { stack: this.stack }),
		};
	};
}
