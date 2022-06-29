import { RegisterRequest } from '@common/schemas/register.schema';
import { requestValidator } from '@middlewares/request.validator';
import { Request, Response, Router } from 'express';

const registrationRouter = Router();

registrationRouter.use('/register', requestValidator(RegisterRequest));

registrationRouter.post('/register', function (req: Request, res: Response) {
  res.send('Register page');
});

export default registrationRouter;
