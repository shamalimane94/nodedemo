FROM node:latest
WORKDIR /app

COPY . . 
EXPOSE 4000
CMD node server.js