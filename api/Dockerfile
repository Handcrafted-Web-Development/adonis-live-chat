FROM node:20-alpine3.18

RUN apk --no-cache add curl

WORKDIR /api
ADD package.json ./
RUN npm install
COPY . .

ENV CHOKIDAR_USEPOLLING=true
