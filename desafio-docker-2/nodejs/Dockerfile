FROM node:latest

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

CMD ["dockerize", "-wait", "tcp://sql_db:3306", "-timeout", "20s", "node", "server.js"]
