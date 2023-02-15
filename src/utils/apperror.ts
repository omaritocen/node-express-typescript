import ErrorDetail from '../types/errorDetail';

class AppError extends Error {
  public statusCode: number;
  public errorArr?: ErrorDetail[];

  constructor(message: string, statusCode: number, errorArr?: ErrorDetail[]) {
    super(message);

    this.statusCode = statusCode;
    this.errorArr = errorArr;
  }
}

export default AppError;
