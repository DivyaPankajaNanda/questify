import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { config } from './config/config.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (request: Request, response: Response) => {
	response.json({ message: 'Hello, Questify backend!' });
});

app.listen(config.PORT, () => {
	console.log(`Server running on http://localhost:${config.PORT}`);
});
