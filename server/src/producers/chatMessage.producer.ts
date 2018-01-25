import { Client, KafkaClientOptions, HighLevelProducer } from "kafka-node";
import * as uuid from "uuid";
import { promisify } from "util";
import { User } from "../entity/User";
import {
  dbPartition,
  broadcastMessagePartition
} from "../consumers/base.consumer";

const {
  POSTGRES_DB,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  NODE_ENV,
  POSTGRES_HOST,
  KAFKA_TOPIC,
  KAFKA_HOST,
  KAFKA_PORT,
  KAFKA_CLIENT_ID
} = process.env;

const client = new Client(`${KAFKA_HOST}:${KAFKA_PORT}`, KAFKA_CLIENT_ID, {
  sessionTimeout: 300,
  spinDelay: 100,
  retries: 2
});

const producer = new HighLevelProducer(client);
producer.on("ready", function() {
  console.log("Kafka Producer is connected and ready.");
});

producer.on("error", function(error) {
  console.error(error);
});

export function sendChatMessage(user: User, message: string) {
  const event = {
    id: uuid.v4(),
    timestamp: Date.now(),
    userId: user.id,
    message
  };

  // const buffer = Buffer.from(JSON.stringify(event));

  // Create a new payload
  const records = [
    [{
      topic: KAFKA_TOPIC,
      messages: Buffer.from(JSON.stringify(event)),
      partition: dbPartition,
      attributes: 1 /* Use GZip compression for the payload */
    }],
    [{
      topic: KAFKA_TOPIC,
      messages: Buffer.from(JSON.stringify(event)),
      partition: broadcastMessagePartition,
      attributes: 1 /* Use GZip compression for the payload */
    }]
  ];

  return new Promise((resolve, reject) => {
    client.refreshMetadata([KAFKA_TOPIC], (err) => {
      if (err) {
        console.log(err)
      } else {
        records.forEach(record => {
          setTimeout(() => {
            producer.send(record, (error, data) => {
              if (error) {
                reject(error);
              } else {
                resolve(data);
              }
            });
          }, 0);
        })
      }
    })
  });
  //Send record to Kafka and log result/error
}
