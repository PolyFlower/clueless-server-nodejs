import { HttpStatus } from '@common/enums/http-codes.enum';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError, ValidatorOptions } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export function requestValidator<T>(
  cls: T,
  validatorOptions?: ValidatorOptions,
) {
  return function validateClass(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const reqBody = req.body;
    const transformed: any = plainToInstance(cls as any, reqBody);
    validate(transformed, validatorOptions).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          return res
            .status(HttpStatus.BadRequest)
            .json({ errs: errors[0].constraints });
        }
        next();
      },
    );
  };
}
