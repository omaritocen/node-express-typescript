import * as dotenv from 'dotenv';
import { Application, json } from 'express';
import errorHandler from '../middleware/error';
import morganLogger from '../middleware/morgan';
import router from '../routes';
import setupDatabase from './db';

const initialize = async (app: Application): Promise<void> => {
  dotenv.config();

  // Setup Requests Logger
  app.use(morganLogger);

  // Initialize Database
  await setupDatabase();

  // Allow the app to parse JSON
  app.use(json());

  // Setup API routes
  app.use(router);

  // Handle Errors
  app.use(errorHandler);
};

export default initialize;
