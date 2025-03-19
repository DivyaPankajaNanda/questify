import dotenv from 'dotenv';

if (!process.env.DOCKER_ENVIRONMENT || process.env.DOCKER_ENVIRONMENT !== 'true')
	dotenv.config({
		path: './.env', // Relative path w.r.t. the root directory / current working directory containing package.json
	});

export const config = {
	PRODUCTION_ENVIRONMENT: (process.env.PRODUCTION_ENVIRONMENT && process.env.PRODUCTION_ENVIRONMENT === 'true') || false,
	DOMAIN: process.env.DOMAIN || 'localhost',
	PORT: process.env.PORT || 8000,
	DB_NAME: process.env.DB_NAME || 'questify',
	APP_NAME: process.env.APP_NAME || 'questify',
	MONGODB_URL: process.env.MONGODB_URL,
	REDIS_URL: process.env.REDIS_URL,
	CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
	ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY || 'A strong secret',
	ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY || '1h',
	REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY || 'Another strong secret',
	REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY || '7d',
	SERVICES: {
		AUTH_API: {
			BASE_URL: process.env.AUTH_API_BASE_URL,
		},
		QUESTIONNAIRE_API: {
			BASE_URL: process.env.QUESTIONNAIRE_API_BASE_URL,
		},
		SUBMISSION_API: {
			BASE_URL: process.env.SUBMISSION_API_BASE_URL,
		},
		ANALYTICS_API: {
			BASE_URL: process.env.ANALYTICS_API_BASE_URL,
		},
	},
};
