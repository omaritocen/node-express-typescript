import ErrorDetail from './errorDetail';

class ErrorResponse {
  private success: boolean;
  private message: string;
  private details?: ErrorDetail[];

  constructor(message: string, details?: ErrorDetail[]) {
    this.success = false;
    this.message = message;
    this.details = details;
  }
}
export default ErrorResponse;
