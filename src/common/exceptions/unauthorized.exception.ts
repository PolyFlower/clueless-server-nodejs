import { HttpStatus } from '@common/enums/http-codes.enum';
import { HttpException } from '@common/exceptions/http.exception';

export class UnauthorizedException extends HttpException {
  constructor(message = 'Unauthorized') {
    super(message, HttpStatus.Unauthorized);
  }
}
