
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as websockify from 'koa-websocket';
const koaApp = new Koa();
const app = websockify(koaApp);
app.use(async (ctx, next) => {
  // Log the request to the console
  console.log('Url:', ctx.url);
  // Pass the request to the next middleware function
  await next();
});

const router = new Router();
const ws = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'Hello World!';
});

ws.get('/chat-ws', (context) => {
  context.websocket.send('YO')
  context.websocket.on('message', (message: any) => {
    console.log(message);
  })
})

app.use(router.routes());
app.ws.use(ws.routes())

app.listen(3000);

console.log('Server running on port 3000');
