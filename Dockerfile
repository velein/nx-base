FROM node:18
WORKDIR /usr/src/app

COPY . .
RUN yarn workspace:set

CMD ["yarn", "serve:web-project-name"]