import * as Router from "koa-router";
import { Connection } from "typeorm/connection/Connection";
import { sendChatMessage } from "./producers/chatMessage.producer";
import { Message } from "./entity/Message";
import { User } from "./entity/User";
import {
  createConsumer,
  broadcastMessagePartition
} from "./consumers/base.consumer";

import { ReplaySubject } from "rxjs/ReplaySubject";

export async function setupWsEndpoint(connection: Connection) {
  const ws = new Router();
  const messageSubject$ = new ReplaySubject<Message>();
  await setupMessageConsumer(connection, messageSubject$);

  ws.all("/chat", async context => {
    const token = context.query.token;

    const user = await User.findByToken(token);

    if (user) {
      const messages = await connection.getRepository(Message).find({
        take: 100,
        order: {
          createdAt: "ASC"
        }
      });
      await sendChatMessage(user, ` joined!`);
      messages.forEach(message => {
        context.websocket.send(JSON.stringify(message));
      });

      const subscription = messageSubject$.subscribe(message => {
        context.websocket.send(JSON.stringify(message));
      })

      context.websocket.on("message", async (message: any) => {
        await sendChatMessage(user, message);
      });

      context.websocket.on("close", () => {
        subscription.unsubscribe()
      })
    } else {
      context.websocket.close();
    }
  });

  return ws;
}

async function setupMessageConsumer(
  connection: Connection,
  messageSubject$: ReplaySubject<Message>
) {
  await createConsumer(
    broadcastMessagePartition,
    async message => {
      var buf = new Buffer(message.value, "binary");
      var decodedMessage = JSON.parse(buf.toString());

      const user = await connection
        .getRepository(User)
        .findOneById(decodedMessage.userId);

      if (user) {
        const message = new Message();
        message.user = user;
        message.content = decodedMessage.message;
        messageSubject$.next(message)
      }
    },
    err => {
      console.log("error", err);
    }
  );
}
