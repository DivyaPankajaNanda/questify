/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import redis, { RedisClientType } from 'redis';
import { config } from './config.js';
import Logger from '../common/utils/Logger.js';

const logger = Logger.getInstance();

export const connectRedis = async (): Promise<RedisClientType> => {
	const redisClient: RedisClientType = redis.createClient({
		url: config.REDIS_URL,
		socket: {
			connectTimeout: 10000,
		},
	});

	redisClient.on(`error`, (error) => {
		logger.error(`Redis connection error : ${error}`);
	});

	redisClient.on(`connect`, () => {
		logger.info(`Redis connection successful at ${config.REDIS_URL}.`);
	});

	await redisClient.connect();

	return redisClient;
};
