FROM openjdk:latest

RUN apt-get update
RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install nodejs

COPY . /nightwatch
WORKDIR /nightwatch

RUN npm install