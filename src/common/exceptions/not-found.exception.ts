import { HttpStatus } from '@common/enums/http-codes.enum';
import { HttpException } from '@common/exceptions/http.exception';

export class NotFoundException extends HttpException {
  constructor(message = 'Not Found') {
    super(message, HttpStatus.NotFound);
  }
}
