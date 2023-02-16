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
  } else if (error.name === 'ValidationError') {
    const errDetails: ErrorDetail[] = [];
    // TODO: Replace with MongooseValidationError if type is available
    const errors = (error as any).errors;

    Object.keys(errors).forEach((key) => {
      const errorDetail = { [key]: errors[key].message };
      errDetails.push(errorDetail);
    });

    error = new AppError('Body validation Error', 402, errDetails);
  }

  // Setting the correct status code
  if (error instanceof AppError) {
    errorMessage = error.message;
    statusCode = error.statusCode;
    errorArr = error.errorArr;
  }

  if (statusCode === 500) {
    Logger.error(error.message);
  }

  const errResponse = new ErrorResponse(errorMessage, errorArr);

  res.status(statusCode).json(errResponse);
};

export default errorHandler;
