# chat-server

You need Docker and Docker Compose to run the server in a Docker container.
If you want to manually start the server, you need Postgres and Kafka locally.



## Server
* If you want to run the server in a docker container

    cd server
    cp .prodenv.example .prodenv
Fill out the environment variables, then:
    
    yarn
    docker-compose up -d
* If you want to run the server manually and you have all the dependencies

    cd server
    cp .env.example .env
Fill out the environment variables, then:

    yarn
    yarn start
## UI

    cd chat-ui
    yarn
    yarn start
