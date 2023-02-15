import { Request, Response, NextFunction } from 'express';

import AppError from '../utils/apperror';

const nonExistingRoute = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next(new AppError(`Could not find ${req.originalUrl} on this server`, 404));
};

export default nonExistingRoute;
