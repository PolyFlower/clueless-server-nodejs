import { HttpStatus } from '@common/enums/http-codes.enum';
import { HttpException } from '@common/exceptions/http.exception';

export class ForbiddenException extends HttpException {
  constructor(message = 'Forbidden') {
    super(message, HttpStatus.Forbidden);
  }
}
