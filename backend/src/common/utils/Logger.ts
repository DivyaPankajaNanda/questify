import { createLogger, format, Logger as WinstonLogger, transport, transports } from 'winston';
import { config } from '../../config/config.js';
import fs from 'fs';
import chalk from 'chalk';

export default class Logger {
	static logger: WinstonLogger;

	private constructor() {}

	private static colorize = (text: string, level: string): string => {
		switch (level) {
			case 'error':
				return chalk.red.bold(text);
			case 'warn':
				return chalk.yellow.bold(text);
			case 'info':
				return chalk.green.bold(text);
			case 'http':
				return chalk.cyan.bold(text);
			case 'verbose':
				return chalk.magenta.bold(text);
			case 'debug':
				return chalk.blue.bold(text);
			case 'silly':
				return chalk.gray.bold(text);
			default:
				return text;
		}
	};

	static getInstance = () => {
		// Log level setup
		const logLevel = config.PRODUCTION_ENVIRONMENT ? 'info' : 'debug';

		// Custom log information formatting
		const customTimestampFormat = format((info) => {
			info.timestamp = new Date().toLocaleString('en-US', {
				timeZone: 'IST',
				hour12: false,
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			});
			return info;
		});

		const customLogFormat = format.printf(({ level, message, timestamp }) => {
			message = this.colorize(`${message}`, level);
			level = this.colorize(level, level);
			return `${timestamp} [${level}]: ${message}`;
		});

		// Log transport setup
		const logTransports: transport[] = [
			new transports.Console({
				format: format.combine(format.simple(), customLogFormat),
			}),
		];

		if (config.PRODUCTION_ENVIRONMENT) {
			if (!fs.existsSync('log')) fs.mkdirSync('log');

			logTransports.push(new transports.File({ filename: 'log/app.log' }));
		}

		// logger instantiation
		if (!this.logger) {
			this.logger = createLogger({
				level: logLevel,
				format: format.combine(customTimestampFormat(), format.json()),
				transports: logTransports,
				exitOnError: false,
			});
		}

		return this.logger;
	};
}
