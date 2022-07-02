import logTimeStamp from '@utils/index';
import ormConfig from '@database/config/orm-config';
import { Connection, createConnection } from 'typeorm';

class Database {
  private connection: Connection;

  async connect() {
    const connection = await createConnection(ormConfig);
    if (connection.isConnected) {
      console.log(
        logTimeStamp('Database connection established: ' + connection.name),
      );
    }
  }

  getConnection() {
    return this.connection;
  }
}

export const database = new Database();
