FROM node:latest

COPY . /nightwatch
RUN mkdir /nightwatch/screenshots
WORKDIR /nightwatch

RUN npm i npm@latest -g
RUN npm install

#CMD node_modules/.bin/nightwatch -c nightwatch.conf.BASIC.js
CMD npm run test