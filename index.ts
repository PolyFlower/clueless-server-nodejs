import 'dotenv/config';
import 'tsconfig-paths/register';
import express from 'express';
import logTimeStamp from '@utils/index';
import loginRouter from '@routes/login.router';
import registrationRouter from '@routes/registration.router';

const app = express();

app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use('/v1', loginRouter);
app.use('/v1', registrationRouter);

app.listen(process.env['APP_PORT'], () => {
  console.log(logTimeStamp('Started server'));
});
