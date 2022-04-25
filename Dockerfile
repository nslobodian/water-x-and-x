FROM node:18-alpine

ARG APP_DIR=/application

WORKDIR $APP_DIR

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build

ENTRYPOINT ["npm", "run", "start:prod"]
