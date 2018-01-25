import { Client, Consumer, ConsumerGroup } from "kafka-node";
const { KAFKA_HOST, KAFKA_PORT, KAFKA_TOPIC } = process.env;

export const dbPartition = 1;
export const broadcastMessagePartition = 0;

const options = {
  autoCommit: true,
  fetchMaxWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024,
  encoding: "buffer"
};

const topic = {
  topic: KAFKA_TOPIC
};

const consumerGroup = new ConsumerGroup({
  host: `${KAFKA_HOST}:${KAFKA_PORT}`,
  groupId: KAFKA_TOPIC + '-group',
  fromOffset: 'earliest'
}, KAFKA_TOPIC);

export function createClient() {

  return new Client(`${KAFKA_HOST}:${KAFKA_PORT}`);
}

export function createConsumer(client, partition, callback, errorCallback) {
  return new Promise((resolve, reject) => {
    try {
      // const consumer = new Consumer(
      //   client,
      //   [Object.assign({}, topic, { partition })],
      //   Object.assign({}, options, { groupId: `chatmessagespartition${partition}` })
      // );

      // consumer.on("message", callback);
      // consumer.on("error", errorCallback);


      consumerGroup.on("message", callback);
      consumerGroup.on("error", errorCallback);

      process.on("SIGINT", function() {
        consumerGroup.close(true, function() {
          process.exit();
        });
      });

      console.log("createConsumer is setup with partition", partition, "Group id of ", `chatmessagespartition${partition}`);
      resolve("createConsumer is setup");
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}
