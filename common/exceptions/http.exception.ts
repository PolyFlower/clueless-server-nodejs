import { HttpStatus } from '@common/enums/http-codes.enum';

export abstract class HttpException extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = this.constructor.name || 'HttpException';
    this.statusCode = statusCode || HttpStatus.InternalServerError;
    delete this.stack;
  }
}
