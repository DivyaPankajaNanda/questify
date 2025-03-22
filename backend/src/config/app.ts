/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { globalErrorHandler } from '../common/middlewares/globalErrorHandler.js';
import authApp from '../modules/auth/app.js';
import questionnaireApp from '../modules/questionnaire/app.js';
import submissionApp from '../modules/submission/app.js';
import analyticsApp from '../modules/analytics/app.js';
import morganLogger from './morgan.js';
import { routeNotFoundHandler } from '../common/middlewares/routeNotFoundHandler.js';

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());
app.use(morganLogger);

app.use(authApp);
app.use(questionnaireApp);
app.use(submissionApp);
app.use(analyticsApp);

app.use(routeNotFoundHandler);
app.use(globalErrorHandler);

export default app;
