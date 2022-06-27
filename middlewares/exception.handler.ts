import { HttpException } from '@common/exceptions/http.exception';
import { NextFunction, Request, Response } from 'express';

export function exceptionHandler(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(err.statusCode).json(err.body);
}
