import { HttpStatus } from '@common/enums/http-codes.enum';

interface IExceptionBody {
  message: string;
  name: string;
  statusCode: number;
}

export abstract class HttpException extends Error {
  statusCode: number;
  body: IExceptionBody;
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = this.constructor.name || 'HttpException';
    this.statusCode = statusCode || HttpStatus.InternalServerError;
    this.body = this.createBody();
    delete this.stack;
  }
  createBody() {
    return {
      message: this.message,
      name: this.name,
      statusCode: this.statusCode,
    };
  }
}
