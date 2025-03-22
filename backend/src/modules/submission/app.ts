/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import express from 'express';
import submissionRouter from './v1/routes/SubmissionRoutes.js';

const app = express();

app.use('/api/v1/submission', submissionRouter);

export default app;
