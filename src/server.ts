
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as websockify from 'koa-websocket';
import * as serve from 'koa-static';
import { readFile, writeFile } from 'fs';
import { promisify } from 'util';
import * as path from 'path';

const fileName = 'chats';
const messages = new Map();

const koaApp = new Koa();
const app = websockify(koaApp);
let id = 0

app.use(serve(path.resolve(__dirname, '../ui/chat-ui/build')))
app.use(async (ctx, next) => {
  // Log the request to the console
  console.log('Url:', ctx.url);
  // Pass the request to the next middleware function
  await next();
});

const router = new Router();
const ws = new Router();


ws.get('/chat-ws', (context) => {
  context.websocket.send('Welcome to chat server')

  messages.forEach(value => {
    context.websocket.send(value)
  });

  context.websocket.on('message', (message: any) => {
    const currentDate = new Date()
    messages.set(id++, message)
    context.websocket.send(message);
  })
})

app.use(router.routes());
app.ws.use(ws.routes())

app.listen(3000);

console.log('Server running on port 3000');
