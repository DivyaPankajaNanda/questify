/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { JWTUtil } from '../../../../common/utils/JWTUtil.js';
import { IUser } from '../../../../common/interfaces/IUser.js';
import { ERROR_CODES } from '../../../../common/utils/Constants.js';
import { CustomException } from '../../../../common/exceptions/CustomException.js';
import { IUserRepository } from '../repositories/IUserRepository.js';
import { IAuthService } from './IAuthService.js';

export class AuthService implements IAuthService {
	constructor(private userRepository: IUserRepository) {}

	signup = async (name: string, email: string, password: string): Promise<{ accessToken: string; refreshToken: string }> => {
		const userData = {
			name: name,
			email: email,
			password: password,
		};
		const user = await this.userRepository.create(userData);

		const { accessToken, refreshToken } = await this.refreshTokens(user);

		return {
			accessToken: accessToken,
			refreshToken: refreshToken,
		};
	};

	signin = async (email: string, password: string): Promise<{ accessToken: string; refreshToken: string }> => {
		const user: Partial<IUser> = await this.userRepository.authenticateUser(email, password);

		const { accessToken, refreshToken } = await this.refreshTokens(user);

		return { accessToken: accessToken, refreshToken: refreshToken };
	};

	refreshTokens = async (user: Partial<IUser>): Promise<{ accessToken: string; refreshToken: string }> => {
		const payloadData = {
			userId: user.userId,
			name: user.name,
		};

		const accessToken = await JWTUtil.generateAccessToken(payloadData);

		const refreshToken = await JWTUtil.generateRefreshToken(payloadData);

		await this.userRepository.update(user.userId!, { refreshToken: refreshToken });
		return { accessToken: accessToken, refreshToken: refreshToken };
	};

	updateRefreshToken = async (refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> => {
		try {
			const payload = await JWTUtil.extractRefreshTokenPayload(refreshToken);
			return await this.refreshTokens(payload as Partial<IUser>);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			if (error.name == 'TokenExpiredError') throw new CustomException({ errorCodeObject: ERROR_CODES.JWT_EXPIRED, error: error });

			if (error.name == 'JsonWebTokenError')
				throw new CustomException({ errorCodeObject: ERROR_CODES.BAD_REQUEST, customMessage: 'Invalid Refresh Token.', error: error });

			throw new CustomException({ errorCodeObject: ERROR_CODES.BAD_REQUEST, customMessage: 'Refresh Token Error.', error: error });
		}
	};
}
