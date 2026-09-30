import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { randomUUID } from 'crypto';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Generate a request ID if not exists
    const requestId = request.headers['x-request-id'] || randomUUID();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let code = 'INTERNAL_SERVER_ERROR';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        message = (exceptionResponse as any).message || exception.message;
        code = (exceptionResponse as any).error || code;
      } else {
        message = exception.message;
      }

      // Customize common HTTP exception codes
      if (status === HttpStatus.UNAUTHORIZED) code = 'UNAUTHORIZED';
      if (status === HttpStatus.FORBIDDEN) code = 'FORBIDDEN';
      if (status === HttpStatus.NOT_FOUND) code = 'NOT_FOUND';
      if (status === HttpStatus.BAD_REQUEST) code = 'BAD_REQUEST';
    } else {
      this.logger.error(`Unhandled Exception [${requestId}]: `, exception);
    }

    response.status(status).json({
      success: false,
      message: Array.isArray(message) ? message.join(', ') : message,
      code,
      requestId,
    });
  }
}
