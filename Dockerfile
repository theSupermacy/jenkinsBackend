FROM node:carbon-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package.json

# some dependency requires git installed on the docker machine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm install

COPY . .

CMD [ "npm", "run", "start"]