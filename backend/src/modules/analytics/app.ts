import express from 'express';
import analyticsRouter from './v1/routes/AnalyticsRoutes.js';

const app = express();

app.use('/api/v1/analytics', analyticsRouter);

export default app;
