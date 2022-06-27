import 'dotenv/config';
import express from 'express';
import { loginRouter, registrationRouter } from './routes/index';
import logTimeStamp from './utils';

const app = express();

// Mount routes
app.use('/v1', loginRouter);
app.use('/v1', registrationRouter);

app.listen(process.env['APP_PORT'], () => {
  console.log(logTimeStamp('Started server'));
});
