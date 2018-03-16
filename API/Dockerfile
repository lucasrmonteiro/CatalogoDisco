FROM node:latest
RUN mkdir -p /app/api
WORKDIR /app/api
COPY package*.json ./
RUN npm install
COPY ./ /app/api
CMD ["node", "--inspect=0.0.0.0", "Server.js"]
#CMD node Server.js
EXPOSE 8080
EXPOSE 9229