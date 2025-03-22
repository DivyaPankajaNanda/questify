/*
Author : Divya Pankaja Nanda 
Github : https://github.com/DivyaPankajaNanda
*/
import connectDB from './config/database.js';
import app from './config/app.js';
import { config } from './config/config.js';
import Logger from './common/utils/Logger.js';
import { RedisUtil } from './common/utils/RedisUtil.js';

const logger = Logger.getInstance();

(async () => {
	try {
		await connectDB();
		await RedisUtil.initializeRedis();

		app.on('error', (error) => {
			logger.error(`Application error : ${error}`);
		});

		app.listen(config.PORT, () => {
			logger.info(`Server started on http://${config.DOMAIN}:${config.PORT}`);
		});
	} catch (error) {
		logger.error(`Couldn't start the server due to error : ${error}`);
		process.exit(1);
	}
})();
