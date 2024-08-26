import express, { Application } from 'express';
import { noteRouter } from './controllers/noteController';

const app: Application = express();
app.use(express.json());

app.use('/api', noteRouter);

export default app;