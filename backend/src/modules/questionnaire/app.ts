/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import express from 'express';
import questionnaireRouter from './v1/routes/QuestionnaireRoutes.js';

const app = express();

app.use('/api/v1/questionnaire', questionnaireRouter);

export default app;
