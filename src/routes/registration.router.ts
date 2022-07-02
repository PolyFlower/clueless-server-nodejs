import { RegisterRequest } from '@common/schemas/register.schema';
import { authController } from '@controllers/auth.controller';
import { requestValidator } from '@middlewares/request.validator';
import { Router } from 'express';

const registrationRouter = Router();

registrationRouter.use('/register', requestValidator(RegisterRequest));

registrationRouter.post('/register', authController.register);

export default registrationRouter;
