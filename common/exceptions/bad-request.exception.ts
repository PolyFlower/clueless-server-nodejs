import { HttpStatus } from '@common/enums/http-codes.enum';
import { HttpException } from '@common/exceptions/http.exception';

export class BadRequestException extends HttpException {
  constructor(message = 'Bad Request') {
    super(message, HttpStatus.BadRequest);
  }
}
