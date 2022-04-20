FROM node:16-alpine

WORKDIR /urs/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build

ENTRYPOINT ["npm", "run", "start:prod"]
