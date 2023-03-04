FROM node:17.3.0

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

ENV PORT 80

EXPOSE $PORT

RUN npm run build

CMD [ "npm", "start" ]



