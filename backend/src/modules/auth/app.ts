/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import express from 'express';
import authRouter from './v1/routes/AuthRoutes.js';

const app = express();

app.use('/api/v1/auth', authRouter);

export default app;
