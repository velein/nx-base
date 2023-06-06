FROM node:18
WORKDIR /code

COPY package.json lerna.json ./

RUN yarn workspace:set

COPY . .

EXPOSE 3000