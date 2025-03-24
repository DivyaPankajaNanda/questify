/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { Request, Response } from 'express';
import { ApiResponse } from '../../../../common/utils/ApiResponse.js';
import { ERROR_CODES, HTTP_STATUS } from '../../../../common/utils/Constants.js';
import { CustomException } from '../../../../common/exceptions/CustomException.js';
import { config } from '../../../../config/config.js';
import { IAuthService } from '../services/IAuthService.js';

export class AuthController {
	constructor(private authService: IAuthService) {}

	public signup = async (request: Request, response: Response) => {
		const { name, email, password } = request.body;
		const { accessToken, refreshToken } = await this.authService.signup(name, email, password);

		response = this.setRefreshTokenCookie(response, refreshToken);

		response
			.status(HTTP_STATUS.CREATED.statusCode)
			.send(new ApiResponse(HTTP_STATUS.CREATED.statusCode, HTTP_STATUS.CREATED.message, { accessToken: accessToken }));
	};

	public signin = async (request: Request, response: Response) => {
		const { email, password } = request.body;
		const { accessToken, refreshToken } = await this.authService.signin(email, password);

		response = this.setRefreshTokenCookie(response, refreshToken);

		response
			.status(HTTP_STATUS.SUCCESS.statusCode)
			.send(new ApiResponse(HTTP_STATUS.SUCCESS.statusCode, HTTP_STATUS.SUCCESS.message, { accessToken: accessToken }));
	};

	public signout = async (request: Request, response: Response) => {
		response.clearCookie('refreshToken');
		response.status(HTTP_STATUS.NO_CONTENT.statusCode).send(new ApiResponse(HTTP_STATUS.NO_CONTENT.statusCode, HTTP_STATUS.NO_CONTENT.message));
	};

	public me = async (request: Request, response: Response) => {
		const authenticatedUser = request.user;
		response
			.status(HTTP_STATUS.SUCCESS.statusCode)
			.send(new ApiResponse(HTTP_STATUS.SUCCESS.statusCode, HTTP_STATUS.SUCCESS.message, { user: authenticatedUser }));
	};

	public refreshToken = async (request: Request, response: Response) => {
		const providedRefreshToken = request.cookies.refreshToken;

		if (!providedRefreshToken) throw new CustomException({ errorCodeObject: ERROR_CODES.BAD_REQUEST, customMessage: 'Refresh Token not provided.' });

		const { accessToken, refreshToken } = await this.authService.updateRefreshToken(providedRefreshToken);

		response = this.setRefreshTokenCookie(response, refreshToken);

		response
			.status(HTTP_STATUS.SUCCESS.statusCode)
			.send(new ApiResponse(HTTP_STATUS.SUCCESS.statusCode, HTTP_STATUS.SUCCESS.message, { accessToken: accessToken }));
	};

	public setRefreshTokenCookie = (response: Response, refreshToken: string): Response => {
		response.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			secure: config.PRODUCTION_ENVIRONMENT ? true : false,
			sameSite: config.PRODUCTION_ENVIRONMENT ? 'strict' : 'none',
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
		});

		return response;
	};

	public setAccessTokenCookie = (response: Response, accessToken: string): Response => {
		response.cookie('accessToken', accessToken, {
			httpOnly: true,
			secure: config.PRODUCTION_ENVIRONMENT ? true : false,
			sameSite: config.PRODUCTION_ENVIRONMENT ? 'strict' : 'none',
			maxAge: 60 * 60 * 1000, // 1h
		});

		return response;
	};

	public setTokens = (response: Response, accessToken: string, refreshToken: string) => {
		response = this.setAccessTokenCookie(response, accessToken);
		response = this.setRefreshTokenCookie(response, refreshToken);
		return response;
	};
}
