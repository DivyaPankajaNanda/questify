import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../../config/config.js';

export class JWTUtil {
	public static generateAccessToken = async (payload: object): Promise<string> => {
		return jwt.sign(payload, config.ACCESS_TOKEN_SECRET_KEY, { expiresIn: config.ACCESS_TOKEN_EXPIRY });
	};

	public static generateRefreshToken = async (payload: object): Promise<string> => {
		return jwt.sign(payload, config.REFRESH_TOKEN_SECRET_KEY, { expiresIn: config.REFRESH_TOKEN_EXPIRY });
	};

	public static extractAccessTokenPayload = async (token: string): Promise<string | JwtPayload> => {
		return jwt.verify(token, config.ACCESS_TOKEN_SECRET_KEY);
	};

	public static extractRefreshTokenPayload = async (token: string): Promise<string | JwtPayload> => {
		return jwt.verify(token, config.REFRESH_TOKEN_SECRET_KEY);
	};
}
