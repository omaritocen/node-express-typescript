import { NextFunction, Request, Response } from 'express';
import Logger from '../logger';
import ErrorDetail from '../types/errorDetail';
import ErrorResponse from '../types/errorResponse';
import AppError from '../utils/apperror';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorMessage = 'Internal Server Error';
  let statusCode = 500;
  let errorArr: ErrorDetail[] | undefined;

  // Handling syntax error in the body of request
  if (error instanceof SyntaxError) {
    error = new AppError(error.message, 400);
  }

  // Setting the correct status code
  if (error instanceof AppError) {
    errorMessage = error.message;
    statusCode = error.statusCode;
    errorArr = error.errorArr;
  }

  if (statusCode === 500) {
    Logger.error(errorMessage);
    errorMessage = 'Internal Server Error';
  }

  const errResponse = new ErrorResponse(errorMessage, errorArr);

  res.status(statusCode).json(errResponse);
};

export default errorHandler;
