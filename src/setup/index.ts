import * as dotenv from 'dotenv';
import { Application } from 'express';
import errorHandler from '../middleware/error';
import morganLogger from '../middleware/morgan';
import router from '../routes';

const initialize = (app: Application): void => {
  dotenv.config();

  // Setup Requests Logger
  app.use(morganLogger);

  // Setup API routes
  app.use(router);

  // Handle Errors
  app.use(errorHandler);
};

export default initialize;
