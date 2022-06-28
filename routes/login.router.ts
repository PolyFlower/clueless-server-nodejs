import { LoginRequest } from '@common/schemas/login.schema';
import { requestValidator } from '@middlewares/request.validator';
import { Request, Response, Router } from 'express';

const loginRouter = Router();

loginRouter.use('/login', requestValidator(LoginRequest));

loginRouter.post('/login', function (req: Request, res: Response) {
  res.send('Login page');
});

export default loginRouter;
