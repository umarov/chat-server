
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as websockify from 'koa-websocket';
import * as serve from 'koa-static';
import { readFile, writeFile } from 'fs';
import { promisify } from 'util';
import * as path from 'path';
import { Subject } from 'rxjs';
import "reflect-metadata";
import {createConnection} from "typeorm";

import {User} from "./entity/User";

createConnection().then(async connection => {
  const fileName = 'chats';
  const messages = new Map();

  const koaApp = new Koa();
  const app = websockify(koaApp);
  const messages$ = new Subject();
  let id = 0
  let userId = 0

  app.use(serve(path.resolve(__dirname, '../ui/chat-ui/dist')))
  app.use(async (ctx, next) => {
    // Log the request to the console
    console.log('Url:', ctx.url);
    // Pass the request to the next middleware function
    await next();
  });

  const ws = new Router();
  let contexts = new Map();
  ws.get('/chat-ws', (context) => {
    const currentUserId = ++userId;
    contexts.set(currentUserId, context);

    messages.forEach(({ userId, message }) => {
      context.websocket.send(JSON.stringify([userId, message]))
    });

    context.websocket.on('message', (message: any) => {
      messages$.next({ userId: currentUserId, message })
    })
  })

  app.ws.use(ws.routes())

  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });

  messages$.subscribe(({ userId, message }) => {
    messages.set(id++, { userId, message })
    contexts.forEach((context, key) => {
      setTimeout(() => {
        try {
          context.websocket.send(JSON.stringify([userId, message]))
        } catch(e) {
          contexts.delete(key)
        }
      }, 0);
    })
  })
}).catch(error => console.log(error));
