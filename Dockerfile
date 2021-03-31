FROM node:11.13.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

RUN npm config set unsafe-perm true

COPY package*.json .env /app/
RUN npm install\
        && npm install serve -g

COPY src /app/src/
COPY public /app/public/
RUN npm run build
EXPOSE 8080

CMD [ "serve", "-p", "8080", "-s", "build" ]