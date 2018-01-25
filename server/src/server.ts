import * as Koa from "koa";
import * as websockify from "koa-websocket";
import * as cors from "@koa/cors";
import { readFile, writeFile } from "fs";
import { promisify } from "util";
import * as path from "path";
import { useKoaServer, Action } from "routing-controllers";
import "reflect-metadata";
import { Server } from "uws";

import { setupDb } from "./db";
import { setupDbConsumer } from "./consumers/messageDb.consumer";
import { setupWsEndpoint } from "./wsServer";
import { User } from "./entity/User";

(async () => {
  let connection = await setupDb();
  if (process.env.CLEAN_UP) {
    await connection.dropDatabase();
    await connection.close();
    connection = await setupDb();
  }

  const koaApp = new Koa();

  koaApp.use(
    cors({
      origin: "*"
    })
  );

  koaApp.use(async (ctx, next) => {
    console.log("Url:", ctx.url);
    await next();
  });

  useKoaServer(koaApp, {
    routePrefix: "api",
    authorizationChecker: async (action: Action) => {
      const token = action.request.headers["authorization"];
      try {
        const user = await User.findByToken(token);
        return !!user;
      } catch {
        return false;
      }
    },
    currentUserChecker: async (action: Action) => {
      const token = action.request.headers["authorization"];
      return User.findByToken(token);
    },
    controllers: [__dirname + "/controllers/*.ts"]
  });

  const ws = await setupWsEndpoint(connection);
  const app = websockify(koaApp);

  app.ws.use(ws.routes());

  setupDbConsumer();

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
})();
