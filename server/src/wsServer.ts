import * as Router from "koa-router";
import { Connection } from "typeorm/connection/Connection";
import { Message } from "./entity/Message";
import { User } from "./entity/User";
import {
  createConsumer,
  broadcastMessagePartition
} from "./consumers/base.consumer";

import { Subject } from "rxjs/Subject";
import { Client } from "kafka-node";

export async function setupWsEndpoint(
  client: Client,
  connection: Connection,
  sendChatMessage: (user: User, message: string) => Promise<{}>
) {
  const messageSubject$ = new Subject<any>();
  await setupMessageConsumer(client, connection, messageSubject$);
  const ws = new Router();

  ws.all("/chat", async context => {
    const token = context.query.token;

    const user = await User.findByToken(token);

    if (user) {
      const messages = await connection.getRepository(Message).find({
        order: {
          createdAt: "ASC"
        },
        take: 200
      });

      messages.forEach(message => {
        setTimeout(() => {
          context.websocket.send(
            JSON.stringify({
              content: message.content,
              user: {
                id: message.user.id,
                firstName: message.user.firstName,
                lastName: message.user.lastName
              }
            })
          );
        }, 0);
      });

      const subscription = messageSubject$.subscribe(message => {
        context.websocket.send(JSON.stringify(message));
      });

      context.websocket.on("message", async (message: any) => {
        await sendChatMessage(user, message);
      });

      context.websocket.on("close", () => {
        subscription.unsubscribe();
      });
    } else {
      context.websocket.close();
    }
  });

  return ws;
}

async function setupMessageConsumer(
  client: Client,
  connection: Connection,
  messageSubject$: Subject<any>
) {
  await createConsumer(
    client,
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
        console.log('Sending message:', message.content);
        messageSubject$.next({
          content: decodedMessage.message,
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName
          }
        });
      }
    },
    err => {
      console.log("error", err);
    }
  );
}
