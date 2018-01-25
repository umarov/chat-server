import { createConnection, ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

const {
  POSTGRES_DB,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  NODE_ENV,
  POSTGRES_HOST
} = process.env;

export function setupDb() {
  return createConnection(<ConnectionOptions>{
    database: POSTGRES_DB,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    type: "postgres",
    host: POSTGRES_HOST,
    entities: [__dirname + "/entity/*.ts"],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [__dirname + "/subscriber/*.ts"],
    synchronize: true,
    logging: NODE_ENV === "development"
  });
}
