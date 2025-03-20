import mongoose from 'mongoose';
import { ERROR_CODES } from '../common/utils/Constants.js';
import { CustomException } from '../common/exceptions/CustomException.js';
import Logger from '../common/utils/Logger.js';
import { config } from './config.js';

const logger = Logger.getInstance();

const connectDB = async function () {
	try {
		const connectionInstance = await mongoose.connect(`${config.MONGODB_URL}`, {
			dbName: `${config.DB_NAME}`,
		});
		logger.info(`MongoDB connection successful at ${connectionInstance.connection.host}.`);
	} catch (error) {
		logger.error(`MongoDB connection error : ${error}`);
		throw new CustomException({ errorCodeObject: ERROR_CODES.DATABASE_CONNECTION_FAILED });
	}
};

export default connectDB;
