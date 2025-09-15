FROM node:18-alpine AS base 

WORKDIR /app

COPY package*.json ./   

RUN npm i

COPY . .

USER node

EXPOSE 3000

CMD ["npm", "start"]