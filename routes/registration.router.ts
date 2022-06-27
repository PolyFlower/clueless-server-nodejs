import { Request, Response, Router } from 'express';

const registrationRouter = Router();

registrationRouter.post('/register', function (req: Request, res: Response) {
  res.send('Register page');
});

export default registrationRouter;
