/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { NextFunction, Request, Response } from 'express';
import { JWTUtil } from '../utils/JWTUtil.js';
import { CustomException } from '../exceptions/CustomException.js';
import { ERROR_CODES } from '../utils/Constants.js';
import Logger from '../utils/Logger.js';
import { IUser } from '../interfaces/IUser.js';

const logger = Logger.getInstance();

export const authenticationValidationHandler = () => {
	return async (request: Request, response: Response, next: NextFunction) => {
		try {
			logger.debug(`Authentication process started.`);

			const authenticationHeader = request.headers.authorization as string;

			if (!authenticationHeader || !authenticationHeader.startsWith('Bearer '))
				return next(new CustomException({ errorCodeObject: ERROR_CODES.USER_UNAUTHORIZED }));

			const accessToken = request.headers.authorization?.split(' ')[1] as string;

			// const accessToken = request.cookies?.accessToken;
			// console.log('TOKEN:   ', accessToken);
			const payload = await JWTUtil.extractAccessTokenPayload(accessToken);

			request.user = payload as { userId: string; name?: string };
			request.accessToken = accessToken;

			logger.debug(`Authentication process successful for userId : ${(payload as Partial<IUser>).userId}.`);
			return next();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			logger.error(`Authentication process failed with error : ${error}.`);

			if (error.name == 'TokenExpiredError') return next(new CustomException({ errorCodeObject: ERROR_CODES.JWT_EXPIRED, error: error }));

			return next(new CustomException({ errorCodeObject: ERROR_CODES.USER_UNAUTHORIZED, error: error }));
		}
	};
};
