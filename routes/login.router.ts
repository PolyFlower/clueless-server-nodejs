import { Request, Response, Router } from 'express';

const loginRouter = Router();

loginRouter.post('/login', function (req: Request, res: Response) {
  res.send('Login page');
});

export default loginRouter;
