import { createConsumer, dbPartition } from "./base.consumer";
import { getConnection } from "typeorm";
import { Message } from "../entity/Message";
import { User } from "../entity/User";

export function setupDbConsumer() {
  createConsumer(
    dbPartition,
    async message => {
      var buf = new Buffer(message.value, "binary");
      var decodedMessage = JSON.parse(buf.toString());
      const connection = getConnection();
      const user = await connection
        .getRepository(User)
        .findOneById(decodedMessage.userId);

      if (user) {
        const message = new Message();
        message.user = user;
        message.content = decodedMessage.message;
        await connection.getRepository(Message).save(message);
        return true;
      }
    },
    err => {
      console.log("error", err);
    }
  );
}
