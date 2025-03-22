/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { IUser } from '../../../../common/interfaces/IUser.js';

export interface IAuthService {
	signup(name: string, email: string, password: string): Promise<{ accessToken: string; refreshToken: string }>;
	signin(email: string, password: string): Promise<{ accessToken: string; refreshToken: string }>;
	refreshTokens(user: Partial<IUser>): Promise<{ accessToken: string; refreshToken: string }>;
	updateRefreshToken(refreshToken: string): Promise<{ accessToken: string; refreshToken: string }>;
}
