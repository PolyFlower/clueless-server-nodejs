import { HttpStatus } from '@common/enums/http-codes.enum';
import {
  ClassConstructor,
  Exclude,
  Expose,
  plainToInstance,
} from 'class-transformer';
import { validate, ValidationError, ValidatorOptions } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

@Exclude()
class ErrorBody extends ValidationError {
  @Expose()
  property: string;

  @Expose()
  constraints: {
    [type: string]: string;
  };
}

type ReqBody = {
  [type: string]: string;
};

export function requestValidator<T>(
  cls: ClassConstructor<T>,
  validatorOptions?: ValidatorOptions,
) {
  return function validateClass(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const reqBody: ReqBody = req.body;
    const transformed: any = plainToInstance(cls, reqBody);
    validate(transformed, validatorOptions).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          return res.status(HttpStatus.BadRequest).json({
            errs: {
              ...errors.map(error => plainToInstance(ErrorBody, error)),
            },
          });
        }
        next();
      },
    );
  };
}
