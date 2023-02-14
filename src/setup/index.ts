import * as dotenv from 'dotenv';
import { Application } from 'express';
import morganLogger from '../middleware/morgan';

const initialize = (app: Application): void => {
  dotenv.config();

  // Setup Requests Logger
  app.use(morganLogger);
};

export default initialize;
