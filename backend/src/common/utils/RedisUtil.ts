import { RedisClientType } from 'redis';
import { connectRedis } from '../../config/redis.js';
import { config } from '../../config/config.js';

export class RedisUtil {
	private static redisClient: RedisClientType;

	private constructor() {}

	static initializeRedis = async () => {
		if (!this.redisClient) this.redisClient = await connectRedis();
	};

	static getClient = async () => {
		if (this.redisClient) return this.redisClient;

		await this.initializeRedis();
		return this.redisClient;
	};

	private static generateKey = (args: string[]) => {
		args.unshift(`${config.APP_NAME}`);
		return `${args.join(':')}`;
	};

	// App specific keys
	static getUserKey = (userId: string) => {
		return this.generateKey([`user`, `${userId}`]);
	};

	static getBlogKey = (blogId: string) => {
		return this.generateKey([`blog`, `${blogId}`]);
	};

	static getLatestBlogsKey = () => {
		return this.generateKey([`blog`, `latest`, `100`]);
	};

	static getMonthlyTopBlogsKey = () => {
		return this.generateKey([`blog`, `monthly`, `top`, `10`, `leaderboard`]);
	};
}
