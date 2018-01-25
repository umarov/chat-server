FROM node:8.9-alpine
RUN apk update && apk add bash
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++

ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../ && apk del .gyp
RUN npm install -g ts-node
RUN npm install -g typescript
COPY . .
EXPOSE 3000
CMD npm start
