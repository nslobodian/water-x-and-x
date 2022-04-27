
FROM node:18-alpine

ARG APP_DIR=/application

WORKDIR $APP_DIR


COPY package*.json ./ yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_PATH=./build

EXPOSE 3000

RUN yarn build

ENTRYPOINT ["yarn", "start:prod"]
