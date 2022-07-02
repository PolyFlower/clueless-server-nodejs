import { LoginRequest } from '@common/schemas/login.schema';
import { authController } from '@controllers/auth.controller';
import { requestValidator } from '@middlewares/request.validator';
import { Router } from 'express';

const loginRouter = Router();

loginRouter.post(
  '/login',
  [requestValidator(LoginRequest)],
  authController.login,
);

export default loginRouter;
