FROM node:latest
RUN mkdir -p /app/api
WORKDIR /app/api
COPY package*.json ./
RUN npm install
COPY ./ /app/api
CMD node Server.js
EXPOSE 8080
