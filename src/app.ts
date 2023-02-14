import express, { Application } from 'express';

import initialize from './setup';
import Logger from './logger';

const app: Application = express();

initialize(app);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World' });
});

app.listen(PORT, (): void => {
  Logger.info(`Server is running on port: ${PORT}`);
});
