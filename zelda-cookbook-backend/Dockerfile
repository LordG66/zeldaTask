FROM node:alpine
COPY ./package.json ./package.json
RUN apk get update
RUN apk add git
RUN apk add netcat-openbsd
RUN npm install knex -g
RUN npm install
COPY . .
ENTRYPOINT [ "sh", "entrypoint.sh" ]

# FROM node
# COPY ./package.json ./package.json
# RUN apt-get update
# RUN apt-get install netcat-openbsd
# RUN npm install knex -g
# RUN npm install
# COPY . .
# ENTRYPOINT [ "bash", "entrypoint.sh" ]
