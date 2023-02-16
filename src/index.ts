import express, { Application } from 'express';
require('express-async-errors');

import initialize from './setup';
import Logger from './logger';

const app: Application = express();

initialize(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void => {
  Logger.info(`Server is running on port: ${PORT}`);
});
