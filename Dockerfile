FROM node:carbon-alpine

WORKDIR /app

EXPOSE 3000
# some dependency requires git installed on the docker machine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY package.json package.json

RUN npm install

COPY . .

CMD [ "npm", "run", "start"]