FROM node:latest
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ /app/
CMD node Server.js
EXPOSE 8080
