FROM node:20.2-alpine
COPY . /ticketsapp
WORKDIR /ticketsapp
RUN npm install
RUN npm i -g ts-node
CMD npm run prod