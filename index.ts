import 'dotenv/config';
import 'tsconfig-paths/register';
import express from 'express';
import { loginRouter, registrationRouter } from '@routes/index';
import logTimeStamp from '@utils/index';

const app = express();

app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use('/v1', loginRouter);
app.use('/v1', registrationRouter);

app.listen(process.env['APP_PORT'], () => {
  console.log(logTimeStamp('Started server'));
});
