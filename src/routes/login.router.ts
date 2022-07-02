import { LoginRequest } from '@common/schemas/login.schema';
import { authController } from '@controllers/auth.controller';
import { requestValidator } from '@middlewares/request.validator';
import { Router } from 'express';

const loginRouter = Router();

loginRouter.use('/login', requestValidator(LoginRequest));

loginRouter.post('/login', authController.login);

export default loginRouter;
