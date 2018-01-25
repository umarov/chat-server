import { Client, Consumer } from "kafka-node";

const { KAFKA_HOST, KAFKA_PORT, KAFKA_TOPIC } = process.env;

const client = new Client(`${KAFKA_HOST}:${KAFKA_PORT}`);

const topic = {
  topic: KAFKA_TOPIC
};

const options = {
  autoCommit: true,
  fetchMaxWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024,
  encoding: "buffer"
};

export const dbPartition = 0;
export const broadcastMessagePartition = 1;

export function createConsumer(partition, callback, errorCallback) {
  return new Promise((resolve, reject) => {
    try {
      const consumer = new Consumer(
        client,
        [Object.assign({}, topic, { partition })],
        options
      );

      consumer.on("message", callback);
      consumer.on("error", errorCallback);

      process.on("SIGINT", function() {
        consumer.close(true, function() {
          process.exit();
        });
      });

      console.log("createConsumer is setup with partition", partition)
      resolve("createConsumer is setup");
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}
