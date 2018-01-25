# chat-server

You need Docker and Docker Compose to run the server in a Docker container.
If you want to manually start the server, you need Postgres and Kafka locally.

## Server

    cd server
    yarn
    docker-compose up -d

## UI

    cd chat-ui
    yarn
    yarn start
