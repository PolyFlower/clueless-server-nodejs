import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cookieParser from 'cookie-parser';
import logTimeStamp from '@utils/index';
import loginRouter from '@routes/login.router';
import registrationRouter from '@routes/registration.router';
import { exceptionHandler } from '@middlewares/exception.handler';
import { database } from '@database/connection';

const app = express();

// Establish database connection
// TODO: Singleton pattern returns instance of existing connection
database.connect();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Mount routes
app.use('/v1', loginRouter);
app.use('/v1', registrationRouter);

app.listen(process.env['APP_PORT'], () => {
  console.log(logTimeStamp('Started server'));
});

app.use(exceptionHandler);
