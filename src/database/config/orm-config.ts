import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  name: 'default',
  database: process.env['PG_DB'],
  host: process.env['PG_HOST'],
  port: Number(process.env['PG_PORT']),
  password: process.env['PG_PASS'],
  username: process.env['PG_USER'],
  synchronize: process.env['NODE_ENV'] === 'development' ? true : false,
  logging: false,
  entities: ['**/*.entity.ts'],
};

export = ormConfig;
