/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import morgan from 'morgan';
import Logger from '../common/utils/Logger.js';

const logger = Logger.getInstance();

export default morgan(':method :url :status :response-time ms', {
	stream: {
		write: function (message: string) {
			const [method, url, status, responseTime] = message.trim().split(' ');
			const logObject = {
				method: method,
				url: url,
				status: status,
				responseTime: `${responseTime} ms`,
			};
			logger.http(JSON.stringify(logObject));
		},
	},
});
