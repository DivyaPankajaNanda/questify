// import axios, { AxiosInstance } from 'axios';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { ERROR_CODES, HTTP_STATUS } from './Constants.js';
import { CustomException } from '../exceptions/CustomException.js';
import { ErrorCodeType } from '../types/ErrorCodeType.js';

export class AxiosClient {
	private axiosClient: AxiosInstance;
	private errorMap: Map<number, ErrorCodeType>;

	constructor(baseUrl: string, apiKey: string, customErrorMap: Map<number, ErrorCodeType> = new Map()) {
		this.errorMap = new Map();
		this.errorMap.set(HTTP_STATUS.BAD_REQUEST.statusCode, customErrorMap.get(HTTP_STATUS.BAD_REQUEST.statusCode) || ERROR_CODES.BAD_REQUEST);
		this.errorMap.set(HTTP_STATUS.NOT_FOUND.statusCode, customErrorMap.get(HTTP_STATUS.NOT_FOUND.statusCode) || ERROR_CODES.NOT_FOUND);
		this.errorMap.set(HTTP_STATUS.UNAUTHORIZED.statusCode, customErrorMap.get(HTTP_STATUS.UNAUTHORIZED.statusCode) || ERROR_CODES.USER_UNAUTHORIZED);
		this.errorMap.set(HTTP_STATUS.FORBIDDEN.statusCode, customErrorMap.get(HTTP_STATUS.FORBIDDEN.statusCode) || ERROR_CODES.USER_FORBIDDEN);

		this.axiosClient = axios.create({
			baseURL: baseUrl,
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
		});

		this.axiosClient.interceptors.response.use(
			(response) => response,
			(error: AxiosError) => {
				if (error.response) {
					const status = error.response.status;

					if (status && status == HTTP_STATUS.NOT_FOUND.statusCode && error.response.statusText.toLowerCase().includes('route'))
						throw new CustomException({ errorCodeObject: ERROR_CODES.ROUTE_NOT_FOUND, error: error });

					this.errorMap.forEach((value, key) => {
						if (status && status == key) throw new CustomException({ errorCodeObject: value, error: error });
					});
				}

				throw new CustomException({ errorCodeObject: ERROR_CODES.AXIOS_ERROR, error: error });
			},
		);
	}

	public getClient = (): AxiosInstance => {
		return this.axiosClient;
	};
}
