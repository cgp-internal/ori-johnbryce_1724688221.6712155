import express, { Request, Response, NextFunction } from 'express';
import { noteRouter } from './controllers/noteController';

const app: express.Application = express();
app.use(express.json());

app.use('/api', noteRouter);

const PORT: number = 3000;
const server: any = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server stopped');
  });
});