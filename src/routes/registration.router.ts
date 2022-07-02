import { RegisterRequest } from '@common/schemas/register.schema';
import { authController } from '@controllers/auth.controller';
import { requestValidator } from '@middlewares/request.validator';
import { Router } from 'express';

const registrationRouter = Router();

registrationRouter.post(
  '/register',
  [requestValidator(RegisterRequest)],
  authController.register,
);

export default registrationRouter;
